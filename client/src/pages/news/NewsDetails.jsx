import React from "react";
import { FaNewspaper, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";

const NewsDetails = () => {
    const news = {
  title: "HeavenEarthRealms: Development Has Begun!",
  category: "Development",
  author: "HeavenEarthRealms",
  date: "August 18th 2026",
  likes: 0,
  time: "just now",
  banner: "/images/news/heavenearth-development-banner.png",
  image: "/images/news/heavenearth-development.png",
};

    return (
        <main className="min-h-screen bg-[#171410] text-white">
            {/* Background */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#3b2b20_0%,#171410_55%,#0e0d0b_100%)]" />

            <div className="mx-auto w-full max-w-[1120px] px-4 py-8 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
                    <FaNewspaper className="text-gray-300" />

                    <span>News</span>

                    <FaChevronRight className="text-[10px] text-gray-600" />

                    <span>{news.category}</span>

                    <FaChevronRight className="text-[10px] text-gray-600" />

                    <span className="font-semibold text-white">
                        {news.title}
                    </span>
                </div>

                {/* Article Card */}
                <article className="overflow-hidden rounded-md border border-[#302c26] bg-[#211f1b] shadow-2xl">

                    {/* Banner */}
                    <div className="p-5 sm:p-8">
                        <div className="relative h-[180px] overflow-hidden rounded-md sm:h-[240px] lg:h-[270px]">
                            <img
                                src={news.banner}
                                alt={news.title}
                                className="h-full w-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="px-5 pb-8 sm:px-8 lg:px-10">

                        {/* Title */}
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            {news.title}
                        </h1>

                        {/* Date */}
                        <p className="mt-1 text-sm text-gray-300">
                            The gate opens{" "}
                            <span className="rounded bg-[#34312c] px-1.5 py-0.5 font-medium text-white">
                                {news.time}
                            </span>
                            !
                        </p>

                        <div className="my-6 h-px bg-[#39352f]" />

                        {/* Article */}
                        <div className="max-w-5xl space-y-6 text-[15px] leading-6 text-gray-200">

                            <h2 className="text-xl font-bold text-white sm:text-2xl">
                                THE JOURNEY BEGINS!
                            </h2>

                            <p>
                                The world of{" "}
                                <span className="font-bold text-white">
                                    HeavenEarthRealms
                                </span>{" "}
                                is officially under development!
                            </p>

                            <p>
                                We're excited to finally begin building the world we've been
                                imagining — a unique Minecraft experience filled with adventure,
                                exploration, progression, custom content, and a world waiting to
                                be discovered.
                            </p>

                            <p>
                                This is only the beginning. Behind the scenes, we're working on
                                the foundation of the server, from the{" "}
                                <span className="font-bold text-white">
                                    world and environments
                                </span>{" "}
                                to custom systems, gameplay mechanics, items, mobs, quests,
                                structures, and much more.
                            </p>

                            <h2 className="pt-4 text-xl font-bold text-white sm:text-2xl">
                                WHAT ARE WE WORKING ON?
                            </h2>

                            <p>
                                HeavenEarthRealms is being designed from the ground up with a
                                strong focus on creating an immersive RPG experience while still
                                keeping the world familiar and enjoyable for Minecraft players.
                            </p>

                            <div className="space-y-2 text-sm">
                                <p>
                                    ⚔️{" "}
                                    <span className="font-semibold text-white">
                                        Custom Combat
                                    </span>{" "}
                                    — unique weapons, abilities, classes, and combat mechanics.
                                </p>

                                <p>
                                    🌍{" "}
                                    <span className="font-semibold text-white">
                                        A Living World
                                    </span>{" "}
                                    — custom environments, structures, towns, dungeons, and
                                    unexplored regions.
                                </p>

                                <p>
                                    🧙{" "}
                                    <span className="font-semibold text-white">
                                        RPG Progression
                                    </span>{" "}
                                    — character levels, skills, equipment, and progression systems.
                                </p>

                                <p>
                                    👹{" "}
                                    <span className="font-semibold text-white">
                                        Custom Mobs & Bosses
                                    </span>{" "}
                                    — enemies with unique abilities, mechanics, and encounters.
                                </p>

                                <p>
                                    🏰{" "}
                                    <span className="font-semibold text-white">
                                        Dungeons & Adventures
                                    </span>{" "}
                                    — challenging locations, quests, secrets, and rewards to
                                    discover.
                                </p>

                                <p>
                                    🪓{" "}
                                    <span className="font-semibold text-white">
                                        Custom Items & Content
                                    </span>{" "}
                                    — new equipment, furniture, resources, and other content
                                    created specifically for HeavenEarthRealms.
                                </p>
                            </div>

                            <h2 className="pt-4 text-xl font-bold text-white sm:text-2xl">
                                THIS IS ONLY THE BEGINNING
                            </h2>

                            <p>
                                We're still in the early stages of development, so there's a lot
                                more to come. As development progresses, we'll share more
                                screenshots, features, systems, builds, and behind-the-scenes
                                updates with the community.
                            </p>

                            <p>
                                Our goal is to create something that feels like more than just
                                another Minecraft server — a world where players can explore,
                                grow, fight, build their own stories, and create memories
                                together.
                            </p>

                            <p>
                                We can't wait to show you what we've been working on.
                            </p>

                            {/* Development Image */}
                            <div className="pt-1">
                                <img
                                    src={news.image}
                                    alt="HeavenEarthRealms development"
                                    className="w-full max-w-[720px] rounded-sm object-cover"
                                />
                            </div>

                            <div className="space-y-1 pt-2 text-sm">
                                <p>
                                    🌎{" "}
                                    <span className="font-semibold text-white">
                                        Welcome to HeavenEarthRealms.
                                    </span>
                                </p>

                                <p>
                                    ✨{" "}
                                    <span className="font-semibold text-white">
                                        The journey starts now.
                                    </span>
                                </p>

                                <p>
                                    ⚔️{" "}
                                    <span className="font-semibold text-white">
                                        More updates coming soon.
                                    </span>
                                </p>
                            </div>

                        </div>

                        {/* Divider */}
                        <div className="my-8 h-px bg-[#39352f]" />

                        {/* Footer */}
                        <div className="text-sm text-gray-500">
                            Published by{" "}
                            <span className="text-gray-300">
                                {news.author}
                            </span>{" "}
                            on {news.date}{" "}
                            <span className="text-gray-600">
                                ({news.likes} likes)
                            </span>
                        </div>

                    </div>
                </article>
            </div>
        </main>
    );
};

export default NewsDetails;