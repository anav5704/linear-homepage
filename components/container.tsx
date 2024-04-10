interface ContainerProps {
    children: React.ReactNode,
    className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <section className={`${className} max-w-[1200px] mx-auto`}>
            {children}
        </section>
    )
}