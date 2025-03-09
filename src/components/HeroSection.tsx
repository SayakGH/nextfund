
export default function HeroSection() {
    return (
        <section className="max-w-5xl mx-auto flex justify-between items-center gap-8 mt-28">
        <div className="p-4 gap-8">
            <h1 className="md:text-8xl text-5xl font-bold text-white">
                Funding made easy with Web3.
            </h1>
            <span className="text-white leading-8 text-xl ">
                Run crowdfunding campaigns to support your projects leveraging web3 technology.
            </span>
            <div className="row gap-4 mt-8">
                <a href="/campaign" target="_blank" rel="noopener noreferrer">
                <button className="rounded-full py-4 px-6 bg-[#4326f3] hover:bg-[#3b1dff] mr-3"> Get Started</button>
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <button className="rounded-full py-4 px-6 border-2 border-white bg-transparent hover:bg-gray-50/10"> Join Discord</button>
                </a>
            </div>
        </div>
        <div className="items-center ">
            <img
                src="https://mza-web3.vercel.app/assets/etherum.png"
                alt="etherum_logo"
                className="h-[450px] w-[1200px]"
            />
        </div>
    </section>
    );
}