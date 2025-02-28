import { forwardRef } from "react";

// Explain the props
// - name: string (name of the component)
// - tag: string (html tag, default is div)
// - container: number (container 1, 2, 3, 4)
// - padding: boolean (add padding to the container)
// - id: string (id of the component) (not required)

const Container = forwardRef(({ children, ...props }, ref) => {
    const { name, tag: Tag = "div", container = 1, padding, id } = props;
    const componentName = name ? `c-${name}` : "";
    const containerClass = `u-container u-container--${container}${
        padding ? " u-container--pad" : ""
    }`;

    return (
        <Tag className={componentName} {...(id ? { id: id } : {})} ref={ref}>
            <div className={containerClass}>
                <div className="c_inner">{children}</div>
            </div>
        </Tag>
    );
});

Container.displayName = "Container";

export default Container;
