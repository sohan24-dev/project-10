import { Briefcase, Layers, Person, Star } from "@gravity-ui/icons";
import Image from "next/image";

const StatsHero = () => {
    const stats = [
        {
            id: 1,
            value: "50K",
            label: "Active Jobs",
            icon: <Briefcase className="w-6 h-6 text-neutral-400" />,
        },
        {
            id: 2,
            value: "12K",
            label: "Companies",
            icon: <Layers className="w-6 h-6 text-neutral-400" />,
        },
        {
            id: 3,
            value: "2M",
            label: "Job Seekers",
            icon: <Person className="w-6 h-6 text-neutral-400" />,
        },
        {
            id: 4,
            value: "97%",
            label: "Satisfaction Rate",
            icon: <Star className="w-6 h-6 text-neutral-400" />,
        },
    ];

    return (
        <section className="relative w-full min-h-[650px] flex flex-col justify-end items-center bg-black text-white px-4 py-16 overflow-hidden">

            {/* Globe Image (FIXED - full visible) */}
            <div className="absolute top-[-500] opacity-75 pointer-events-none">
                <Image
                    src="/images/globe.png"
                    alt="Globe Background"
                    width={1100}
                    height={1100}
                    className="object-contain"
                />
            </div>

            {/* Blue Glow */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl w-full text-center flex flex-col items-center">

                {/* Heading */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-neutral-300 max-w-3xl leading-snug mb-16">
                    Assisting over{" "}
                    <span className="font-medium text-white">15,000 job seekers</span>
                    <br />
                    find their dream positions.
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col justify-between items-start p-7 bg-[#0d0d0d]/80 border border-neutral-800/80 rounded-2xl backdrop-blur-md transition-all duration-200 hover:border-neutral-700 text-left min-h-[190px]"
                        >
                            {/* Icon */}
                            <div className="mb-8">{stat.icon}</div>

                            {/* Value + Label */}
                            <div>
                                <div className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs lg:text-sm text-neutral-400 font-medium tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsHero;