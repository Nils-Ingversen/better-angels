import target from "@/assets/images/target.svg";
import img_background from "@/assets/images/hero_background_image.png";
import "./Hero.css";
import Container from "@/containers/Container.jsx";

export default function Hero() {
    return (
        <Container name="hero" tag="section" container="1">
            <figure className="img_background_box">
                <img
                    className="img_background"
                    src={img_background}
                    alt="o femeie de culoare cu casti pe cap"
                />
            </figure>
            <div className="left_content">
                <h1 className="hero_tittle">
                    A FUND OF <span className="is_white">FRIENDS</span>
                </h1>
            </div>
            <div className="right_content">
                <p className="subtittle">
                    We commit our experience and expertise as operators and
                    executives across every startup we believe can succeed with
                    the help of a better angel.
                </p>
                <div className="right_box">
                    <figure className="logo_box">
                        <img className="logo" src={target} alt="logo" />
                    </figure>
                    <p className="sub_subtitile">SCROLL & DISCOVER</p>
                </div>
            </div>
        </Container>
    );
}
