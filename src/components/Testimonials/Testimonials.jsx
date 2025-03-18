import Container from "@/containers/Container";
import "./Testimonials.css";
import Swiper from "swiper";
import "swiper/css";
import { useRef, useEffect } from "react";
import pozaBarbat from "@/assets/images/poza-barbat.jpg";
import pozaFemeie from "@/assets/images/poza-femeie.jpg";
import arrow from "@/assets/images/arrow.svg";
import { Navigation, Pagination, Controller } from "swiper/modules";
import "swiper/css/pagination";

export default function Testimonials() {
    const imageRef = useRef();
    const contentRef = useRef();
    const indicatorRef = useRef();
    const nextRef = useRef();
    const backRef = useRef();

    useEffect(() => {
        const content = new Swiper(contentRef.current, {
            modules: [Navigation, Pagination, Controller],
            speed: 400,
            slidesPerView: 1,
            loop: true,
            spaceBetween: 50,
            simulateTouch: false,
            navigation: {
                nextEl: nextRef.current,
                prevEl: backRef.current,
            },
            pagination: {
                el: indicatorRef.current,
                type: "progressbar",
            },
        });
        const image = new Swiper(imageRef.current, {
            speed: 400,
            slidesPerView: 1,
            loop: true,
            simulateTouch: false,
        });
        content.controller.control = image;
    }, [contentRef.current, imageRef.current]);

    return (
        <Container name="testimonials" tag="section" container="1">
            <div className="image_box">
                <div className="swiper_image" ref={imageRef}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <figure className="img_box">
                                <img
                                    className="img"
                                    src={pozaBarbat}
                                    alt="poza"
                                ></img>
                            </figure>
                        </div>
                        <div className="swiper-slide">
                            <figure className="img_box">
                                <img
                                    className="img"
                                    src={pozaFemeie}
                                    alt="poza"
                                ></img>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content_box">
                <div className="swiper_content" ref={contentRef}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <p className="text">
                                “Better Angels brings enormous value to any
                                young company. The partners were essential to
                                the growth, branding, and positioning of LUCID.“
                            </p>

                            <div className="buttons">
                                <p className="tag">PATRICK COMER</p>
                                <p className="tag">FOUNDER & CEO, LUCID</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <p className="text">
                                Elizabeth and the Better Angels team are exactly
                                the kind of badass investors you need on your
                                side.”
                            </p>
                            <div className="buttons">
                                <p className="tag">EMANUELA PALMELA</p>
                                <p className="tag">FOUNDER & CEO, MAXO</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper_controls">
                        <div className="arrows">
                            <figure ref={backRef} className="btn_arrow">
                                <img className="arrow_image" src={arrow}></img>
                            </figure>
                            <figure ref={nextRef} className="btn_arrow2">
                                <img className="arrow_image" src={arrow}></img>
                            </figure>
                        </div>
                        <div className="scroll_bar" ref={indicatorRef}></div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
