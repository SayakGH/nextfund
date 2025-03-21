import Heading from "@/components/Heading";

const cards = [
    {
        id: 1,
        title: "Transparency",
        desc: "All contributions and fund usage are recorded on the blockchain. Backers can verify every transaction, ensuring trust and accountability.",
    },
    {
        id: 2,
        title: "Accessibility",
        desc: "Anyone with a Web3 wallet can contribute using cryptocurrencies like ETH or USDT. This breaks down traditional banking barriers, enabling worldwide participation.",
    },
    {
        id: 3,
        title: "Secure Funding",
        desc: "Smart contracts automatically manage pledges, releasing funds only if goals are met. This protects backers and ensures campaigns are funded fairly.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="w-full col center gap-4">
            <Heading
                heading="Key Features"
                subHeading="Access The Future"
                className="text-center"
            />
            <div className="row w-full justify-center gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-gradient-to-br from-white/10 col rounded-2xl items-start gap-4 py-6 px-4 md:flex-1"
                    >
                        <img
                            className="w-16 h-w-16"
                            src={`/assets/${card.id}.png`}
                            alt={card.title}
                        />
                        <h4 className="font-redzone text-2xl">{card.title}</h4>
                        <span className="text-app_gray/70">{card.desc}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
