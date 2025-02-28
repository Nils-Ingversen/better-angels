import lenis from "@/vendors/lenis.js";

/**
 * classes: string
 * href: string
 * title: string
 * target: string
 * scroll: boolean
 * onClick: function
 */

const Button = ({ children, ...props }) => {
    const {
        classes,
        href,
        title = "",
        target = "_self",
        scroll,
        onClick,
    } = props;
    const btnClass = classes ? `btn ${classes}` : "btn";

    const handleClick = (event) => {
        if (scroll) {
            event.preventDefault();
            lenis.scrollTo(href);
        }
        if (onClick) {
            onClick(event);
        }
    };

    if (href) {
        return (
            <a
                className={btnClass}
                href={href}
                title={title}
                target={target}
                onClick={handleClick}
                data-cursor="-pointer"
            >
                <span className="btn_label">{children}</span>
            </a>
        );
    }

    return (
        <div className={btnClass} style={{ cursor: "default" }}>
            <span className="btn_label">{children}</span>
        </div>
    );
};

export default Button;
