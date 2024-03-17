import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MQTTSubscriber from "@/app/components/MQTTSubscriber";

export default function Home() {
    return (
        <main>
            <NavBar/>
            <MQTTSubscriber broker="mqtt://broker.emqx.io" topic="python/mqtt"/>
            <Footer/>
        </main>
    );
}
