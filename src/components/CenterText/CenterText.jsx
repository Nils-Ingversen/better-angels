import Container from "@/containers/Container.jsx";
import poza1 from "@/assets/images/poza1.jpg";
import poza2 from "@/assets/images/poza2.jpg";
import poza3 from "@/assets/images/poza3.jpg";
import "./CenterText.css";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function CenterText() {
    const viewRef = useRef();

    return (
        <Container name="center-text" tag="section" container="2" padding>
            <div className="content" ref={viewRef}>
                <motion.p
                    className="title"
                    initial={{ opacity: 0, y: "-20%" }}
                    whileInView={{
                        opacity: 1,
                        y: "0",
                        transition: { duration: 0.6 },
                    }}
                    viewport={{ root: viewRef }}
                >
                    Better Angels Ventures is a “fund of friends” committed to
                    investing in and contributing value to early-stage
                    companies. l
                </motion.p>
                <motion.p
                    className="title"
                    initial={{ opacity: 0, y: "-20%" }}
                    whileInView={{
                        opacity: 1,
                        y: "0",
                        transition: { duration: 0.6, delay: 0.4 },
                    }}
                    viewport={{ root: viewRef }}
                >
                    We commit our experience and expertise as operators and
                    executives across every startup we believe can succeed with
                    the help of a better angel
                </motion.p>
            </div>

            <figure className="image_box1">
                <img className="img" src={poza1} alt="poza cu femeie" />
            </figure>
            <figure className="image_box2">
                <img className="img" src={poza2} alt="poza cu femeie" />
            </figure>
            <figure className="image_box3">
                <img className="img" src={poza3} alt="poza cu o femeie" />
            </figure>
        </Container>
    );
}
