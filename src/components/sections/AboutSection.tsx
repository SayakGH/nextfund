import Heading from "@/components/Heading";
import { SectionProps } from "@/app/types";

const tags = [
    "Wide range of wallets",
    "Impactful Causes",
    "Any type of campaigns",
    "Fast payments",
];

export default function AboutSection() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row-reverse items-center">
            <div className="text md:w-1/2 col gap-4 my-2">
                <Heading
                    className="max-w-[90%]"
                    heading="About Us"
                    subHeading="Be a part of something bigger—support and fund!"
                />
                <span className="text-app_gray/80 leading-8 text-xl">
                We are a crowdfunding platform that helps turn ideas into reality. Whether you are launching a passion project, a startup, or a cause, we connect you with a community ready to back your vision.

                </span>
                <div className="row gap-2">
                    {tags.map((tag, i) => (
                        <button
                            key={i}
                            className="rounded-full px-4 py-3 bg-white/20 hover:bg-white/30"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2 my-2 h-full">
                <img
                    src="/assets/robo.png"
                    alt="robo"
                    className="object-contain max-w-[80%] max-h-[90%] mx-auto"
                />
            </div>
        </section>
    );
}
