"use client";
import { useEffect } from "react";
import Header from "@/components/Header";

import AboutSection from "@/components/sections/AboutSection";
import CollectionSection from "@/components/sections/CollectionSection";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FooterSection from "@/components/sections/FooterSection";
import MainSection from "@/components/sections/MainSection";
import Popularity from "@/components/sections/Popularity";
import PromoSection from "@/components/sections/PromoSection";
import { theme, APP_BODY_ID } from "@/app/ustils";
import Link from "next/link";
import AppLogo from "@/components/sub-components/AppLogo";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function App() {
    useEffect(() => {
        const loader = document.querySelector(".loader");
        if (loader) loader.remove();
        theme.initiate();
    }, []);

    return (
        <main className="app-bg min-h-[100dvh] overflow-x-hidden max-w-full">
            <section className="max-w-6xl xl:px-0 px-4 flex center col mx-auto pb-8 md:gap-36 gap-12">
                <div id={APP_BODY_ID} className="fixed inset-0 light round-gradient" />
                <header className="sticky w-full mt-2 py-4 px-1 min-h-16 row items-center justify-between gap-2">
            <div className="row items-center gap-2">
                <AppLogo
                    onClick={() => window.location.assign("/")}
                    className="cursor-pointer"
                />
                <div className="ml-24 hidden lg:flex flex-row flex-wrap gap-8">
                    
                    <Link href="/" className={`uppercase font-redzone`}>Home</Link>
                    <Link href="/campaign" className={`uppercase font-redzone`}>Explore</Link>
                    {/* {account &&
                <Link href={`/dashboard/${account?.address}`} className={`uppercase font-redzone`}>Dashboard</Link>
} */}
                </div>
            </div>
            <div className="row items-center gap-12">
                <SignedOut>
                <div className="hidden sm:block">
                <SignInButton/>
                </div>

                </SignedOut>
                 <SignedIn>
                 <div className="hidden sm:block">
                <UserButton/>
                </div>
                 </SignedIn>
            </div>
        </header>
                <MainSection />
                <Popularity />
                <AboutSection />
                <FeaturesSection /> 
                <CollectionSection />
                <FAQSection />
                <PromoSection />
                <FooterSection />

            </section>
        </main>
    );
}

export default App;
