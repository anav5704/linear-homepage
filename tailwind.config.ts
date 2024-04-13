import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
            },
            colors: {
                transparent: "transparent",
                white: "#fff",
                "off-white": "#f7f8f8",
                "transparent-white": "rgba(255, 255, 255, 0.08)",
                background: "#000212",
                grey: "#858699",
                "grey-dark": "#222326",
                "primary": "#b4bcd0",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "glow-lines":
                    "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
            },
            keyframes: {
                "fade-in": {
                    from: { opacity: 0, transform: "translateY(-10px)" },
                    to: { opacity: 1, transform: "none" },
                },
                "image-rotate": {
                    "0%": { transform: "rotateX(25deg)" },
                    "25%": { transform: "rotateX(25deg) scale(0.9)" },
                    "60%": { transform: "none" },
                    "100%": { transform: "none" },
                },
                "image-glow": {
                    "0%": {
                        opacity: 0,
                        "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
                    },
                    "10%": {
                        opacity: 1,
                        "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
                    },
                    "100%": {
                        opacity: 0.2,
                    },
                },
                "sketch-lines": {
                    "0%": { "stroke-dashoffset": 1 },
                    "50%": { "stroke-dashoffset": 0 },
                    "99%": { "stroke-dashoffset": 0 },
                    "100%": { visiblity: "hidden" },
                },
                "glow-line-horizontal": {
                    "0%": { opacity: 0, transform: "translateX(0)" },
                    "5%": { opacity: 1, transform: "translateX(0)" },
                    "90%": { opacity: 1 },
                    "100%": { opacity: 0, transform: "translateX(min(60vw, 45rem))" },
                },
                "glow-line-vertical": {
                    "0%": { opacity: 0, transform: "translateY(0)" },
                    "5%": { opacity: 1, transform: "translateY(0)" },
                    "90%": { opacity: 1 },
                    "100%": { opacity: 0, transform: "translateY(min(21vw, 45rem))" },
                },
                zap: {
                    "0%, 9%, 11%, 100% ": {
                        fill: "transparent",
                    },
                    "10%": {
                        fill: "white",
                    },
                },
                bounce: {
                    "50%": {
                        transform: "scale(0.98)",
                    },
                },
            },
            animation: {
                "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
                "image-rotate": "image-rotate 1400ms ease forwards",
                "image-glow": "image-glow 4100ms 300ms ease-out forwards",
                "sketch-lines": "sketch-lines 1200ms ease-out forwards",
                "glow-line-horizontal":
                    "glow-line-horizontal var(--animation-duration) ease-in forwards",
                "glow-line-vertical":
                    "glow-line-vertical var(--animation-duration) ease-in forwards",
                zap: "zap 2250ms calc(var(--index) * 20ms) linear infinite",
                bounce: "240ms ease 0s 1 running bounce",
            },
        },
    },
    plugins: [],
}
export default config
