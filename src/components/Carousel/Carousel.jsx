import { motion } from "framer-motion";
import "./Carousel.css";

export default function Carousel() {
    const text = "ANGEL.SEED. SERIES A. AND FORWARD. • ";
    return (
        <div className="carousel_box">
            <div className="carousel">
                <motion.span
                    className="title"
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 16,
                        ease: "linear",
                    }}
                >
                    ANGEL.SEED. SERIES A. AND FORWARD. • ANGEL.SEED. SERIES A.
                    AND FORWARD. • ANGEL.SEED. SERIES A. AND FORWARD. •
                    ANGEL.SEED. SERIES A. AND FORWARD. •
                </motion.span>
                <motion.span
                    className="title"
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 16,
                        ease: "linear",
                    }}
                >
                    ANGEL.SEED. SERIES A. AND FORWARD. • ANGEL.SEED. SERIES A.
                    AND FORWARD. • ANGEL.SEED. SERIES A. AND FORWARD. •
                    ANGEL.SEED. SERIES A. AND FORWARD. •
                </motion.span>
            </div>
        </div>
    );
}
