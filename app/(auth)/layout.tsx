
export default function SignLayout({children}:{children:React.ReactNode}){

    return(
        <main className="min-h-screen w-full flex items-center justify-center px-4 py-8 bg-(--bg-primary)">
            {children}
        </main>
    )
}