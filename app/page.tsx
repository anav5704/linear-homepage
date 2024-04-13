import { HeroSubtitle } from "../components/hero-subtitle"
import { HeroTitle } from "../components/hero-title"
import { Container } from "../components/container"
import { Button } from "../components/button"

export default function Home() {
    return ( 
        <Container>
            <Button href="/">Button</Button>
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
            <Button href="/">Button</Button>
            <img
                src="/images/hero.webp"
                alt="hero image"
            />
        </Container>
    )
}
