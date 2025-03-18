import { NavLink } from "react-router";
import lenis from "@/vendors/lenis.js";

const ButtonFlip = ({ children, ...props }) => {
    const {
        className,
        href,
        title = "",
        target = "_self",
        scroll,
        onClick,
    } = props;
    const btnClasses = `btn u-btn--2 ${className ? className : ""}`;
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
                <span className="btn_label">{children}</span>
                <span className="btn_label_up">{children}</span>
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
                <span className="btn_label_up">{children}</span>
                <span className="btn_label">{children}</span>
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
            <span className="btn_label">{children}</span>
            <span className="btn_label_up">{children}</span>
        </NavLink>
    );
};

export default ButtonFlip;

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
