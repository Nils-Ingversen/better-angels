"use strict";

import lenis from "./lenis.js";
import "../assets/styles/vendors/scroller.css";

/**
 * The Scroller class is intended to create a customised scrolling interface
 * with additional features such as click-and-drag functionality and smooth scrolling.
 *
 * The scroller is built respecting users' reduced motion preference.
 * It offers programmatic control of scroll position with fine-tuned behaviour.
 * Custom scrollbar indicators, distances, and scroll buttons are provided for enhanced UX.
 *
 * The class also contains methods for controlling and manipulating the scrollbar,
 * alongside various handlers for responding to user interactions such as click and
 * keypress events.
 */
export class Scroller {
    constructor() {
        this.isDragging = false;
        this.dragOffset = 0;
        this.scrollerView = null;
        this.scrollDistance = null;
        this.viewportIndicator = null;
        this.scrollerArrowUp = null;
        this.scrollerArrowDown = null;
        this.thread = null;
        this.keypressTimeout = null;
    }

    init() {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            this.createScrollbar();
            this.updateScrollbar();

            this.viewportIndicator.addEventListener(
                "mousedown",
                this.startDragOperation.bind(this)
            );
            window.addEventListener(
                "mouseup",
                this.stopDragOperation.bind(this)
            );
            window.addEventListener(
                "scroll",
                this.onScrollUpdatePosition.bind(this),
                { passive: true }
            );
            window.addEventListener(
                "resize",
                this.onScrollUpdateSize.bind(this),
                { passive: true }
            );
            window.addEventListener("keyup", this.onKeyPressed.bind(this));
            this.scrollDistance.addEventListener(
                "click",
                this.onClickScrollTo.bind(this)
            );
            this.scrollerArrowUp.addEventListener(
                "click",
                this.onClickArrowScrollTo.bind(this)
            );
            this.scrollerArrowDown.addEventListener(
                "click",
                this.onClickArrowScrollTo.bind(this)
            );
        } else {
            console.log(
                "Scroller is disabled due to reduced motion preference."
            );
        }
    }

    createElementWithClass(type, className) {
        const element = document.createElement(type);
        element.className = className;
        return element;
    }

    calculateDestination(clickPosition, scrollDistance, viewportHeight) {
        const documentHeight = document.documentElement.scrollHeight;
        const ratio =
            (clickPosition - scrollDistance.getBoundingClientRect().top) /
            scrollDistance.getBoundingClientRect().height;

        return ratio * (documentHeight - viewportHeight);
    }

    createScrollbar() {
        this.scrollerView = this.createElementWithClass("div", "scroller");
        this.scrollDistance = this.createElementWithClass(
            "div",
            "scroller_distance"
        );
        this.viewportIndicator = this.createElementWithClass(
            "div",
            "scroller_indicator"
        );
        this.scrollerArrowUp = this.createElementWithClass(
            "button",
            "scroller_arrow -up"
        );
        this.scrollerArrowDown = this.createElementWithClass(
            "button",
            "scroller_arrow -down"
        );

        this.scrollerView.setAttribute("data-cursor", "-hidden");
        this.scrollerArrowUp.setAttribute("aria-hidden", "true");
        this.scrollerArrowDown.setAttribute("aria-hidden", "true");

        this.scrollerView.append(
            this.scrollerArrowUp,
            this.scrollDistance,
            this.scrollerArrowDown
        );
        this.scrollDistance.append(this.viewportIndicator);
        document.body.append(this.scrollerView);
    }

    updateScrollbar() {
        this.onScrollUpdateSize();
        this.onScrollUpdatePosition();
        this.thread = requestAnimationFrame(this.updateScrollbar.bind(this));
    }

    onScrollUpdateSize() {
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = document.documentElement.clientHeight;
        const scrollDistanceHeight = parseInt(
            getComputedStyle(this.scrollDistance).height
        );

        let viewportRatio = viewportHeight / documentHeight;
        let indicatorHeight = viewportRatio * scrollDistanceHeight;

        requestAnimationFrame(() => {
            this.viewportIndicator.style.height = `${indicatorHeight}px`;
        });
    }

    onScrollUpdatePosition() {
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        const scrollDistanceHeight = parseInt(
            getComputedStyle(this.scrollDistance).height
        );
        const indicatorHeight = parseInt(
            getComputedStyle(this.viewportIndicator).height
        );

        let scrollRatio = scrollPosition / (documentHeight - viewportHeight);
        let indicatorTop =
            scrollRatio * (scrollDistanceHeight - indicatorHeight);

        requestAnimationFrame(() => {
            this.viewportIndicator.style.top = `${indicatorTop}px`;
        });
    }

    onClickScrollTo(e) {
        if (e.target !== this.viewportIndicator) {
            const viewportHeight = document.documentElement.clientHeight;
            const clickPosition = e.clientY;

            const destination = this.calculateDestination(
                clickPosition,
                this.scrollDistance,
                viewportHeight
            );

            lenis.scrollTo(destination, {
                duration: 2,
                easing: (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
                immediate: false,
            });
        }
    }

    onClickArrowScrollTo(e) {
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = document.documentElement.clientHeight;
        const currentScrollDistance =
            window.pageYOffset || document.documentElement.scrollTop;

        let destination;

        if (e.target === this.scrollerArrowUp) {
            destination = currentScrollDistance - viewportHeight;
        } else if (e.target === this.scrollerArrowDown) {
            destination = currentScrollDistance + viewportHeight;
        } else {
            const clickPosition = e.clientY;
            destination = this.calculateDestination(
                clickPosition,
                this.scrollDistance,
                viewportHeight
            );
        }

        destination = Math.max(
            0,
            Math.min(destination, documentHeight - viewportHeight)
        );

        lenis.scrollTo(destination, {
            duration: 2,
            easing: (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
            immediate: false,
        });
    }

    onKeyPressed(e) {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            this.scrollerView.classList.add("is-key-press");

            if (this.keypressTimeout) {
                clearTimeout(this.keypressTimeout);
            }

            this.keypressTimeout = setTimeout(() => {
                this.scrollerView.classList.remove("is-key-press");
                this.keypressTimeout = null;
            }, 1000);
        }
    }

    startDragOperation(e) {
        this.isDragging = true;
        this.dragOffset =
            e.clientY - this.viewportIndicator.getBoundingClientRect().top;
        this.viewportIndicator.classList.add("no-transition");
        window.addEventListener(
            "mousemove",
            this.performDragOperation.bind(this)
        );
    }

    performDragOperation(e) {
        if (!this.isDragging) return;
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = document.documentElement.clientHeight;
        const scrollDistanceHeight = parseInt(
            getComputedStyle(this.scrollDistance).height
        );
        let indicatorTop =
            e.clientY -
            this.scrollDistance.getBoundingClientRect().top -
            this.dragOffset;

        indicatorTop = Math.min(
            Math.max(indicatorTop, 0),
            scrollDistanceHeight - this.viewportIndicator.clientHeight
        );

        this.viewportIndicator.style.top = `${indicatorTop}px`;

        const scrollPosition =
            (indicatorTop /
                (scrollDistanceHeight - this.viewportIndicator.clientHeight)) *
            (documentHeight - viewportHeight);
        window.scrollTo(0, scrollPosition);
    }

    stopDragOperation() {
        this.isDragging = false;
        this.viewportIndicator.classList.remove("no-transition");
        window.removeEventListener(
            "mousemove",
            this.performDragOperation.bind(this)
        );
    }

    cleanUp() {
        this.viewportIndicator.removeEventListener(
            "mousedown",
            this.startDragOperation.bind(this)
        );
        window.removeEventListener(
            "mousemove",
            this.performDragOperation.bind(this)
        );
        window.removeEventListener(
            "mouseup",
            this.stopDragOperation.bind(this)
        );
        window.removeEventListener(
            "scroll",
            this.onScrollUpdatePosition.bind(this)
        );
        window.removeEventListener(
            "resize",
            this.onScrollUpdateSize.bind(this)
        );
        window.removeEventListener("keyup", this.onKeyPressed.bind(this));

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            this.scrollDistance.removeEventListener(
                "click",
                this.onClickScrollTo.bind(this)
            );
            this.scrollerArrowUp.removeEventListener(
                "click",
                this.onClickArrowScrollTo.bind(this)
            );
            this.scrollerArrowDown.removeEventListener(
                "click",
                this.onClickArrowScrollTo.bind(this)
            );
        }

        cancelAnimationFrame(this.thread);
    }

    resume() {
        this.scrollerView.classList.remove("is-stopped");
        lenis.start();
    }

    pause() {
        this.scrollerView.classList.add("is-stopped");
        lenis.stop();
    }
}
