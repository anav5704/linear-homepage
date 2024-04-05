import { HeroSubtitle } from "../components/hero-subtitle"
import { HeroTitle } from "../components/hero-title"
import { Container } from "../components/container"

export default function Home() {
    return (
        <>
            <header></header>
            <main>
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
                </Container>
            </main>
            <footer></footer>
        </>
    )
}
