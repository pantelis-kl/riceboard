import Logo from "../ui/Logo";
import NavigationLinks from "./NavigationLinks";

export default function NavigationBar(){
    return(
        <header
        className="flex items-center justify-between w-full backdrop-blur-md p-2 sticky top-0 z-50 border-b"
        style={{backgroundColor:'var(--bg-navbar)',
            borderColor:'var(--border-navbar)'
        }}
        >
            <Logo/>
            <NavigationLinks/>
        </header>
    )
}