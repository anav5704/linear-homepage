import { Logo } from "../public/logo"
import { Container } from "./container"

const links = [
    {
        title: "Product",
        subLinks: [
            {
                label: "Features",
                href: "/"
            },
            {
                label: "Pricing",
                href: "/"
            },
            {
                label: "Integrations",
                href: "/"
            },
            {
                label: "Changelog",
                href: "/"
            },
            {
                label: "Download",
                href: "/"
            },
        ]
    },
    {
        title: "Company",
        subLinks: [
            {
                label: "About us",
                href: "/"
            },
            {
                label: "Blog",
                href: "/"
            },
            {
                label: "Careers",
                href: "/"
            },
            {
                label: "Customers",
                href: "/"
            },
            {
                label: "Brand",
                href: "/"
            },
        ]
    },
    {
        title: "Resources",
        subLinks: [
            {
                label: "Community",
                href: "/"
            },
            {
                label: "Contact",
                href: "/"
            },
            {
                label: "Privacy Policy",
                href: "/"
            },
            {
                label: "Terms of service",
                href: "/"
            },
            {
                label: "Report vulnerability",
                href: "/"
            },
        ]
    },
    {
        title: "Developers",
        subLinks: [
            {
                label: "API",
                href: "/"
            },
            {
                label: "Status",
                href: "/"
            },
            {
                label: "GitHub",
                href: "/"
            },
            {
                label: "README",
                href: "/"
            },
        ]
    },
]

export const Footer = () => {
    return (
        <footer className="py-[56px] border-t border-white/10 text-white/50 text-[15px] mt-20">
            <Container className="flex justify-between">
                <div className="flex flex-col justify-between">
                    <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                        <Logo className="h-4 w-4" />Linear - Designed Worldwide
                    </div>
                    <div className="flex items-center gap-5">
                        <svg className="fill-white h-4 w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" /></svg>
                        <svg className="fill-white h-4 w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                        <svg className="fill-white h-4 w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" /></svg>
                        <svg className="fill-white h-4 w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                    </div>
                </div>
                <div className="flex">
                    {links.map((link, index) => (
                        <div
                            key={"link-" + index}
                            className="min-w-[180px]"
                        >
                            <h4 className="text-white mb-4">
                                {link.title}
                            </h4>
                            <ul>
                                {link.subLinks.map((subLinks, index) => (
                                    <li
                                        key={"sub-link-" + index}
                                        className="text-white/50 transition-colors hover:text-white mb-4 cursor-pointer"
                                    >
                                        {subLinks.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </footer>
    )
}
