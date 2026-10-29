//import components
import NavigationBar from "@/components/landing/NavBar";

export default function LandingLayout({children}:LayoutProps<'/'>){

    return (
      <div className="w-full min-h-screen flex flex-col">
            <NavigationBar/>
        <main>{children}</main>
      </div>
    );
}