'use client';
import { getContract } from "thirdweb";
import { client } from "../client";
import { polygonAmoy } from "thirdweb/chains";
import { CROWDFUNDINFFACTORY } from "../constants/contracts";
import { useReadContract } from "thirdweb/react";
import { MyCampaignCard } from "@/components/MyCampaignCard";
import Header from "@/components/Header";

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
      <div >
        <div className="container max-w-6xl mx-auto text-white">
                        <Header />
                        </div>
                <div className="mx-auto max-w-7xl px-4 mt-16 sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between items-center mb-8">
                        <p className="text-4xl font-redzone text-white">Campaign</p>
                      
                    </div>
                    {/* <p className="text-2xl font-semibold mb-4 text-white">My Campaigns:</p> */}
                    <div className="grid grid-cols-3 gap-4">
                        {!isLoading && (
                            campaigns && campaigns.length > 0 ? (
                                campaigns.map((campaign, index) => (
                                    <MyCampaignCard
                                        key={index}
                                        contractAddress={campaign.campaignAddress}
                                    />
                                ))
                            ) : (
                                <p>No campaigns</p>
                            )
                        )}
                    </div>
                      </div>
      
      </div>
    );
  }
  