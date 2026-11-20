//import components
import NavigationBar from "@/components/landing/NavBar";
import LandingEffects from "@/components/landing/LandingEffects";

export default function LandingLayout({children}:LayoutProps<'/'>){

    return (
      <div className="flex min-h-screen w-full flex-col [--landing-accent-fill:#0f766e] [--landing-on-accent:#ffffff] [--landing-accent-bright:#14b8a6] [--landing-accent-warm:#b78a45] dark:[--landing-on-accent:#f0fdfa] dark:[--landing-accent-bright:#2dd4bf] dark:[--landing-accent-warm:#e2bd78]">
            <NavigationBar/>
        <main className="flex-1">
          <LandingEffects>{children}</LandingEffects>
        </main>
      </div>
    );
}