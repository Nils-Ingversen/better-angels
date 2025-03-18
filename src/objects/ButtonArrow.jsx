import { NavLink } from "react-router";
import lenis from "@/vendors/lenis.js";
import arrow from "@/assets/images/arrow.svg";

const Button = ({ children, ...props }) => {
    const {
        className,
        href,
        title = "",
        target = "_self",
        scroll,
        onClick,
    } = props;
    const btnClasses = `btn u-btn--3 ${className ? className : ""}`;
    const isExternal = href.startsWith("http");
    const isAnchor = href.startsWith("#");

    const handleClick = (event) => {
        if (scroll) {
            event.preventDefault();
            lenis.scrollTo(href);
        }
        if (onClick) {
            onClick(event);
        }
    };

    if (isExternal) {
        return (
            <a
                className={btnClasses}
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                data-cursor="-pointer"
            >
                <figure className="btn_arrow_after">
                    <img className="arrow_image" src={arrow}></img>
                </figure>
                <span className="btn_label">{children}</span>
                <figure className="btn_arrow">
                    <img className="arrow_image" src={arrow}></img>
                </figure>
            </a>
        );
    }

    if (isAnchor) {
        return (
            <a
                className={btnClasses}
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                data-cursor="-pointer"
            >
                <figure className="btn_arrow_before">
                    <img className="arrow_image" src={arrow}></img>
                </figure>
                <span className="btn_label">{children}</span>
                <figure className="btn_arrow">
                    <img className="arrow_image" src={arrow}></img>
                </figure>
            </a>
        );
    }

    return (
        <NavLink
            className={btnClasses}
            to={href}
            title={title}
            target={target}
            onClick={handleClick}
            data-cursor="-pointer"
            end
        >
            <figure className="btn_arrow_before">
                <img className="arrow_image" src={arrow}></img>
            </figure>
            <span className="btn_label">{children}</span>
            <figure className="btn_arrow">
                <img className="arrow_image" src={arrow}></img>
            </figure>
        </NavLink>
    );
};

export default Button;

/**
 * Instructions:
 * 	<PrimaryBtn classes="{optional modifiers}" href="#contact" title="Scroll" scroll  onClick={handleLinkClick}>
		Contact
	</PrimaryBtn>


	// Optional onClick function
	
	const handleLinkClick = () => {
		console.log('handleLinkClick')
		setIsOpen(false)
	}
*/
