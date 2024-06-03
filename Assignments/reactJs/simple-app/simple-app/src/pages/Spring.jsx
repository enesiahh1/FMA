import Nav from "../componets/Nav";
import Hero from "../componets/Hero";
import Footer from "../componets/Footer";

export default function Spring() {
    return (
        <div>
            <Nav />,
            <Hero title="Welcome to Spring" photo="spring.png" />,
            <Footer />
        </div>
    )
}