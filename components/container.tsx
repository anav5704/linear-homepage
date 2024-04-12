interface ContainerProps {
    children: React.ReactNode,
    className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <section className={`${className} max-w-[1200px] w-3/4 mx-auto`}>
            {children}
        </section>
    )
}