
export default function LandingLayout({children}:LayoutProps<'/'>){
    return(
        <div
        className="w-full min-h-screen flex flex-col"
        >
            {children}
        </div>
    )
}