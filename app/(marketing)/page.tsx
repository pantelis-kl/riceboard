import FeaturesSection from "@/components/landing/FeaturesSection";
import Hero from "@/components/landing/Hero";
import PrioritizeSection from "@/components/landing/VoteSection";

export default function Landing(){
     return(
        <div
        className="flex flex-col min-h-screen"
        >
            <Hero/>
            <PrioritizeSection/>
            <FeaturesSection/>
        </div>
     )
}