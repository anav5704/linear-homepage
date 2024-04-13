import { HeroSubtitle } from "../components/hero-subtitle"
import { HeroTitle } from "../components/hero-title"
import { Container } from "../components/container"
import { Button } from "../components/button"

export default function Home() {
    return (
        <Container className="pt-[64px] flex flex-col">
            <Button
                href="/"
                variant="secondary"
                size="small"
            >
                Linear Conference 2024
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="ml-1 w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </Button>
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
            <Button
                href="/"
                size="large"
            >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="ml-1 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </Button>
            <img
                src="/images/hero.webp"
                className="mt-[128px]"
                alt="hero image"
            />
        </Container>
    )
}
