import Heading from "@/components/Heading";
import QAComponent, { QAProps } from "@/components/Q&A";

const questions: QAProps[] = [
    {
        question: "What social campaigns can I fund here?",
        answer: "Support causes like environmental projects, education, disaster relief, and social justice.",
    },
    {
        question: "How does crowdfunding work for these campaigns?",
        answer: "Pledge funds to support campaigns, and funds are released if the goal is met.",
    },
    {
        question: "What is Web3, and how does it help?",
        answer: "Web3 uses blockchain for secure, transparent funding of social campaigns with crypto.",
    },
    {
        question: "Which cryptocurrencies can I use to pledge?",
        answer: "You can use Ethereum (ETH), Binance Coin (BNB), and USDT (Tether).",
    },
    {
        question: "Will I get rewards for supporting a campaign?",
        answer: "Some campaigns offer digital certificates or shoutouts, but rewards vary.",
    },
    {
        question: "What if a campaign doesn’t reach its goal?",
        answer: "Your contribution is automatically refunded to your Web3 wallet.",
    },
    {
        question: "What are the benefits of Web3 for social campaigns?",
        answer: "It offers transparency, security, global access, and lower fees for contributions.",
    },
    {
        question: "How can I track a campaign’s impact?",
        answer: "Check updates on our platform and verify fund usage on the blockchain.",
    },
];

export default function FAQSection() {
    return (
        <section className="w-full col gap-4">
            <Heading
                className="text-center"
                heading="FAQs"
                subHeading="Frequently asked Questions"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 place-items-start mt-6">
                {questions.map((prop, i) => (
                    <QAComponent key={i} {...prop} />
                ))}
            </div>

            {/* <div className="flex flex-row flex-wrap mt-6">
                {questions.map((prop, i) => (
                    <div key={i} className="flex-[100%] md:flex-[50%]">
                        <QAComponent {...prop} />
                    </div>
                ))}
            </div> */}
        </section>
    );
}
