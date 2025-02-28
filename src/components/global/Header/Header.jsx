import Container from "@/containers/Container";
import "./Header.css";

function Header() {
    return (
        <Container name="header" tag="header" import>
            <div className="logo">
                <img
                    src="https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fHw%3D"
                    alt="logo"
                    className="logo_img"
                />
            </div>
            <nav className="link_items">
                <a href="#" className="item_link">
                    <span className="link_label">Home</span>
                </a>
                <a href="#" className="item_link">
                    <span className="link_label">About</span>
                </a>
                <a href="#" className="item_link">
                    <span className="link_label">Contact</span>
                </a>
            </nav>
        </Container>
    );
}

export default Header;
