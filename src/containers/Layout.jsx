import Header from "@/components/global/Header/Header";
import Footer from "@/components/global/Footer/Footer";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main id="top">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
