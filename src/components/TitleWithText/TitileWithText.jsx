import Container from "@/containers/Container.jsx";
import "./TitleWithText.css";
import target from "@/assets/images/target.svg";

export default function TitleWithText() {
    return (
        <Container name="title-text" tag="section" container="1" padding>
            <h2 className="title">
                OUR <span className="blue">COMPANIES</span>
            </h2>
            <div className="c_line"></div>
            <div className="bottom_content">
                <figure className="img_box">
                    <img className="img" alt="logo" src={target}></img>
                </figure>
                <div className="text_box">
                    <p className="text">
                        We don’t focus on a specific sector - we focus on what
                        drives us as entrepreneurs: insanely great people,
                        disruptive concepts, and problems that need to be
                        solved.
                    </p>
                    <p className="text2">
                        Currently, a tiny slice of seed and venture capital goes
                        to startups owned/founded by under-represented people.
                        This needs to change, and we actively seek
                        under-represented founders and teams.
                    </p>
                </div>
            </div>
        </Container>
    );
}
