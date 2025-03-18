import Container from "@/containers/Container";
import "./Header.css";
import logo from "@/assets/images/logo.svg";
import ButtonFlip from "@/objects/ButtonFlip.jsx";
import ButtonArrow from "@/objects/ButtonArrow.jsx";
import NavbarMenu from "@/objects/NavbarMenu";
import { useRef, useState } from "react";

function Header() {
    const navIconRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Container name="header" tag="header" import>
            <div className="logo">
                <img src={logo} alt="logo" className="logo_svg" />
            </div>
            <nav className="link_items">
                <ButtonFlip classes="item_link" href="#">
                    Mission
                </ButtonFlip>
                <ButtonFlip classes="item_link" href="#">
                    Our Companies
                </ButtonFlip>
                <ButtonFlip classes="item_link" href="#">
                    Testimonials
                </ButtonFlip>
                <ButtonFlip classes="item_link" href="#">
                    Newslatter
                </ButtonFlip>
                <ButtonArrow classes="item_link" href="#">
                    Contact
                </ButtonArrow>
            </nav>
            <div
                className={`mobile_icon ${isOpen ? "open" : ""}`}
                ref={navIconRef}
                onClick={handleClick}
            >
                <NavbarMenu />
            </div>
            <div className={`overlay_mobile ${isOpen ? "open" : ""}`}>
                <ButtonFlip classes="item_link" href="#">
                    Mission
                </ButtonFlip>
                <div className="u-line"></div>
                <ButtonFlip classes="item_link" href="#">
                    Our Companies
                </ButtonFlip>
                <div className="u-line"></div>
                <ButtonFlip classes="item_link" href="#">
                    Testimonials
                </ButtonFlip>
                <div className="u-line"></div>
                <ButtonFlip classes="item_link" href="#">
                    Newslatter
                </ButtonFlip>
                <div className="u-line"></div>
                <ButtonFlip classes="item_link" href="#">
                    Contact
                </ButtonFlip>
            </div>
            <div className={`overlay_bg ${isOpen ? "open" : ""}`}></div>
        </Container>
    );
}

export default Header;
