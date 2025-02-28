import Lenis from "lenis";
import "../assets/styles/vendors/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Holds the instance of Lenis
let lenis;

// Flag indicating whether the "has-scrolled" class has been added or not
let hasScrolledClassAdded = false;

const root = document.documentElement;

/**
 * Toggle DOM element classes based on condition
 *
 * @param {HTMLElement} element - The DOM element
 * @param {String} className - Class to add or remove
 * @param {Boolean} condition - Condition to meet
 */
const toggleClass = (element, className, condition) => {
    condition
        ? element.classList.add(className)
        : element.classList.remove(className);
};

/**
 * Updates scroll status by adding the necessary classes to the element
 *
 * @param {Object} data - Scroll data
 * @param {Number} data.scroll - Current scroll position
 */
const updateScrollStatus = ({ scroll }) => {
    const documentHeight = root.scrollHeight;
    const viewportHeight = root.clientHeight;

    // If user has scrolled, add "has-scrolled" class
    if (!hasScrolledClassAdded && scroll > 0) {
        toggleClass(root, "has-scrolled", true);
        hasScrolledClassAdded = true;
    }

    // Add or remove classes based on the current position of the scroll
    toggleClass(root, "is-stopped-top", scroll <= 0);
    toggleClass(
        root,
        "is-stopped-bottom",
        scroll + viewportHeight >= documentHeight
    );
};

if (window.scrollY === 0) {
    toggleClass(root, "is-stopped-top", true);
}

// Handles reduced motion
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // If reduced motion is not preferred, initialise Lenis and GSAP
    lenis = new Lenis({
        lerp: 0.1,
        duration: 1.2,
    });

    // Hook GSAP's ScrollTrigger and the scroll status update to Lenis' scroll event
    lenis.on("scroll", ScrollTrigger.update);
    lenis.on("scroll", updateScrollStatus);

    // Add Lenis' request animation frame method to the GSAP ticker
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    // Turn off GSAP's lag smoothing
    gsap.ticker.lagSmoothing(0);
} else {
    // Add class to body
    document.documentElement.classList.add("has-reduced-motion");

    // If reduced motion is preferred, log the situation and initialise a fallback Lenis object
    lenis = {
        start: () => {},
        stop: () => {},
        on: () => {},
    };
    console.log("Lenis is disabled due to reduced motion preference.");
}

export default lenis;
