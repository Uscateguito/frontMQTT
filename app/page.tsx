import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MQTTSubscriber from "@/app/components/MQTTSubscriber";

export default function Home() {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <Footer/>
        </main>
    );
}
