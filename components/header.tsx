import { Container } from "./container"
import { Logo } from '../public/logo'
import { Button } from "./button"
import Link from "next/link"

const links = [
    {
        label: "Features",
        href: "/",
    },
    {
        label: "Method",
        href: "/",
    },
    {
        label: "Customers",
        href: "/",
    },
    {
        label: "Changelog",
        href: "/",
    },
    {
        label: "Pricing",
        href: "/",
    },
    {
        label: "Company",
        href: "/",
    },
    {
        label: "Contact",
        href: "/",
    },
    {
        label: "Log In",
        href: "/",
    },
]

export const Header = () => {
    return (
        <header className="z-20 fixed top-0 left-0 w-full border-b border-white/10 backdrop-blur-[12px]">
            <Container className="text-[15px] font-medium h-[--nav-height]">
                <nav className="h-full">
                    <ul className="flex items-center justify-between h-full">
                        <li>
                            <Link href="/" className="flex items-center text-off-white backdrop-blur-[12px]" >
                                <Logo className="h-[18px] w-[18px] mr-3" /> Linear
                            </Link>
                        </li>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Button href="/">Sign In</Button>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
