import { Container } from "./container"
import { Logo } from '../public/logo'
import Link from "next/link"
import { Button } from "./button"

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full border-b border-white/10 backdrop-blur-[12px]">
            <Container className="w-3/4 text-[15px] font-medium h-[--nav-height]">
                <nav className="h-full">
                    <ul className="flex items-center justify-between h-full">
                        <li>
                            <Link href="/" className="flex items-center" >
                                <Logo className="h-[18px] w-[18px] mr-3" /> Linear
                            </Link>
                        </li>
                        <li>
                            <Link href="/">Features</Link>
                        </li>
                        <li>
                            <Link href="/">Method</Link>
                        </li>
                        <li>
                            <Link href="/">Customers</Link>
                        </li>
                        <li>
                            <Link href="/">Changelog</Link>
                        </li>
                        <li>
                            <Link href="/">Pricing</Link>
                        </li>
                        <li>
                            <Link href="/">Company</Link>
                        </li>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>
                        <li>
                            <Link href="/">Log In</Link>
                        </li>
                        <li>
                            <Button href="/">Sign In</Button>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
