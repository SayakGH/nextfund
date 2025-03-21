'use client';
import Link from "next/link";
import Connection from "@/components/Connection";
import { useActiveAccount, useActiveWallet } from "thirdweb/react";
import AppLogo from "./sub-components/AppLogo";


export default function Header() {
    const account = useActiveAccount();
    return (
        <header className="sticky w-full mt-2 py-4 px-1 min-h-16 row items-center justify-between gap-2">
            <div className="row items-center gap-2">
                <AppLogo
                    onClick={() => window.location.assign("/")}
                    className="cursor-pointer"
                />
                <div className="ml-24 hidden lg:flex flex-row flex-wrap gap-8">
                    
                    <Link href="/" className={`uppercase font-redzone`}>Home</Link>
                    <Link href="/campaign" className={`uppercase font-redzone`}>Explore</Link>
                    {account &&
                <Link href={`/dashboard`} className={`uppercase font-redzone`}>Dashboard</Link>
}
                </div>
            </div>
            <div className="row items-center gap-12">
    
                <div className="hidden sm:block">
                <Connection/>
                </div>
            </div>
        </header>
    );
}