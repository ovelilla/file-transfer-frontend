import Header from "@/components/header";
import Body from "@/components/body";
import Footer from "@/components/footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            <Body>{children}</Body>

            <Footer />
        </>
    );
};

export default Layout;
