import { HeroSubtitle } from "../components/hero-subtitle"
import { HeroTitle } from "../components/hero-title"
import { Container } from "../components/container"
import Image from "next/image"

export default function Home() {
    return ( 
        <Container>
            <HeroTitle>
                Linear is a better way
                <br />
                to build products"
            </HeroTitle>
            <HeroSubtitle>
                Meet the new standard for modern software development.
                <br />
                Streamline issues, sprints, and product roadmaps.
            </HeroSubtitle>
            <img
                src="/images/hero.webp"
                alt="hero image"
            />
        </Container>
    )
}
