'use client';
import Link from "next/link";
import Connection from "@/components/Connection";
import { useActiveAccount, useActiveWallet } from "thirdweb/react";

export default function Header() {
    const account = useActiveAccount();
    return(
        <header className="text-white py-6">
        <div className="max-w-5xl flex justify-between mx-auto px-6">
            <div className="flex items-center gap-10 text-xl"> 
            <h1 className="bold">NEXTFUND</h1>
            <nav className="flex items-center gap-6 text-lg">
            <Link href="/">Home</Link>
            <Link href="/campaign">Campaigns</Link>
            {account &&
                <Link href={`/dashboard/${account?.address}`}>Dashboard</Link>
}
            </nav>
            </div>
            <Connection/>
            </div>

        </header>
    );
}