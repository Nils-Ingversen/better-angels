import MouseFollower from "mouse-follower";
import "../assets/styles/vendors/mouse-follower.css";
import { gsap } from "gsap";

MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower({
    skewing: 2,
});

export default cursor;
