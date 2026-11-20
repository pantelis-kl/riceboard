//import components
import FeaturesSection from "@/components/landing/FeaturesSection";
import GetStartedSection from "@/components/landing/GetStartedSection";
import Hero from "@/components/landing/Hero";
import PrioritizeSection from "@/components/landing/VoteSection";

export default function Landing(){
     return(
        <div
        className="flex min-h-screen flex-col bg-[linear-gradient(180deg,var(--bg-primary)_0%,var(--bg-primary)_20%,color-mix(in_srgb,var(--accent-primary)_3%,var(--bg-primary))_36%,var(--bg-primary)_50%,color-mix(in_srgb,var(--accent-primary)_5%,var(--bg-primary))_63%,var(--bg-primary)_76%,color-mix(in_srgb,var(--accent-primary)_3%,var(--bg-primary))_88%,var(--bg-primary)_100%)]"
        >
            <Hero/>
            <PrioritizeSection/>
            <FeaturesSection/>
            <GetStartedSection/>
        </div>
     )
}