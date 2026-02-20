import Hero from "@/components/home/Hero";
import Programmes from "@/components/home/Programmes";
import About from "@/components/home/About";
import Locations from "@/components/home/Locations";
import SocialMedia from "@/components/home/SocialMedia";

export default function Home() {
    return (
        <>
            <Hero />
            <Programmes />
            <About />
            <Locations />
            <SocialMedia />
        </>
    );
}
