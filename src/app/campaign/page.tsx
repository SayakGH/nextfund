'use client';
import { getContract } from "thirdweb";
import { client } from "../client";
import { polygonAmoy } from "thirdweb/chains";
import { CROWDFUNDINFFACTORY } from "../constants/contracts";
import { useReadContract } from "thirdweb/react";
import CampaignCard from "@/components/CampaignCard";

export default function Campaign() {
    const contract= getContract({
        client:client,
        chain:polygonAmoy,
        address:CROWDFUNDINFFACTORY
    });

    const { data: campaigns, isPending : isLoading} = useReadContract({
        contract,
        method:
          "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
        params: [],
      });

      console.log(campaigns);
    return (
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="py-10">
            <h1 className="text-4xl font-bold text-white mb-4">Campaigns:</h1>
            <div className="grid gird-cols-3 gap-4">
                {!isLoading && campaigns &&(
                    campaigns.length > 0 ?(
                        campaigns.map((campaign) => (
                            <CampaignCard key={campaign.campaignAddress} campaignAddress={campaign.campaignAddress}/>
                        ))
                    ):(
                        <p>No campaigns found</p>
                    )
                )}


            </div>
        </div>

      </main>
    );
  }
  