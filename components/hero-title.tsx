export const HeroTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="text-[80px] font-[500] leading-[80px] tracking-[-2px] mb-[24px] text-center">
            {children}
        </h1>
    )
}
