import Container from "@/containers/Container.jsx";
import "./CardSlider.css";
import Swiper from "swiper";
import "swiper/css";
import { useRef, useEffect } from "react";
import poza4 from "@/assets/images/poza4.jpg";
import poza5 from "@/assets/images/poza5.jpg";
import arrow from "@/assets/images/arrow.svg";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import ButtonArrow from "@/objects/ButtonArrow.jsx";

export default function CardSlider() {
    const indicatorRef = useRef();
    const nextRef = useRef();
    const backRef = useRef();
    const swiperRef = useRef();

    useEffect(() => {
        const swiper = new Swiper(swiperRef.current, {
            modules: [Navigation, Pagination],
            speed: 400,
            spaceBetween: 38,
            slidesPerView: 1,
            grabCursor: true,
            loop: true,

            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
            navigation: {
                nextEl: nextRef.current,
                prevEl: backRef.current,
            },
            pagination: {
                el: indicatorRef.current,
                type: "progressbar",
            },
        });
    }, [swiperRef.current]);

    return (
        <Container name="card-slider" tag="section" container="1" padding>
            <div className="swiper" ref={swiperRef}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <h3 className="card_title">ALEMBIC</h3>
                        <figure className="img_box">
                            <img className="img" src={poza5} alt="poza"></img>
                        </figure>
                        <div className="bottom_content">
                            <p className="text">
                                Alembic uses AI to connect marketing activity to
                                net new business and revenue. Alembic provides a
                                holistic view of your marketing activity and
                                media mix, showing impacts across all efforts in
                                near-real time.
                            </p>
                            <a className="link">VISIT WEBSITE</a>
                            <div className="buttons">
                                <p className="tag">FINTECH</p>
                                <p className="tag">SERIES A</p>
                                <p className="tag">2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <h3 className="card_title">ALEMBIC</h3>
                        <figure className="img_box">
                            <img className="img" src={poza4} alt="poza"></img>
                        </figure>
                        <div className="bottom_content">
                            <p className="text">
                                Alembic uses AI to connect marketing activity to
                                net new business and revenue. Alembic provides a
                                holistic view of your marketing activity and
                                media mix, showing impacts across all efforts in
                                near-real time.
                            </p>
                            <a className="link">VISIT WEBSITE</a>
                            <div className="buttons">
                                <p className="tag">FINTECH</p>
                                <p className="tag">SERIES A</p>
                                <p className="tag">2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <h3 className="card_title">ALEMBIC</h3>
                        <figure className="img_box">
                            <img className="img" src={poza5} alt="poza"></img>
                        </figure>
                        <div className="bottom_content">
                            <p className="text">
                                Alembic uses AI to connect marketing activity to
                                net new business and revenue. Alembic provides a
                                holistic view of your marketing activity and
                                media mix, showing impacts across all efforts in
                                near-real time.
                            </p>
                            <a className="link">VISIT WEBSITE</a>
                            <div className="buttons">
                                <p className="tag">FINTECH</p>
                                <p className="tag">SERIES A</p>
                                <p className="tag">2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <h3 className="card_title">ALEMBIC</h3>
                        <figure className="img_box">
                            <img className="img" src={poza4} alt="poza"></img>
                        </figure>
                        <div className="bottom_content">
                            <p className="text">
                                Alembic uses AI to connect marketing activity to
                                net new business and revenue. Alembic provides a
                                holistic view of your marketing activity and
                                media mix, showing impacts across all efforts in
                                near-real time.
                            </p>
                            <a className="link">VISIT WEBSITE</a>
                            <div className="buttons">
                                <p className="tag">FINTECH</p>
                                <p className="tag">SERIES A</p>
                                <p className="tag">2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <h3 className="card_title">ALEMBIC</h3>
                        <figure className="img_box">
                            <img className="img" src={poza5} alt="poza"></img>
                        </figure>
                        <div className="bottom_content">
                            <p className="text">
                                Alembic uses AI to connect marketing activity to
                                net new business and revenue. Alembic provides a
                                holistic view of your marketing activity and
                                media mix, showing impacts across all efforts in
                                near-real time.
                            </p>
                            <a className="link">VISIT WEBSITE</a>
                            <div className="buttons">
                                <p className="tag">FINTECH</p>
                                <p className="tag">SERIES A</p>
                                <p className="tag">2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <h3 className="card_title">ALEMBIC</h3>
                        <figure className="img_box">
                            <img className="img" src={poza4} alt="poza"></img>
                        </figure>
                        <div className="bottom_content">
                            <p className="text">
                                Alembic uses AI to connect marketing activity to
                                net new business and revenue. Alembic provides a
                                holistic view of your marketing activity and
                                media mix, showing impacts across all efforts in
                                near-real time.
                            </p>
                            <a className="link">VISIT WEBSITE</a>
                            <div className="buttons">
                                <p className="tag">FINTECH</p>
                                <p className="tag">SERIES A</p>
                                <p className="tag">2021</p>
                            </div>
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
            <ButtonArrow href="#">VIEW ALL</ButtonArrow>
        </Container>
    );
}
