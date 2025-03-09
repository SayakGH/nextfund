"use client";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/client";
import { createWallet } from "thirdweb/wallets";

const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
  ];
  
 export default function Connection() {
    return (
      <ConnectButton
        client={client}
        wallets={wallets}
        connectModal={{ size: "compact" }}
      />
    );
  }