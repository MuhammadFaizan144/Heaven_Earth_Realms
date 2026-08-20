import React from "react";
import { FaNewspaper, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";

const NewsDetails = () => {
    const news = {
        title: "HeavenEarthRealms: Development Has Begun!",
        category: "Development",
        author: "HeavenEarthRealms",
        date: "July 9th, 2026",
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
                                HeavenEarthRealms is a survival server with an MMORPG-style
                                progression system. We're keeping the core Minecraft survival
                                experience while adding our own systems, custom content, and
                                ways for players to progress.
                            </p>

                            <p>
                                You can still build, gather resources, explore, fight mobs,
                                and play survival just like you normally would. The difference
                                is that there is a lot more to discover and work towards as
                                your character grows.
                            </p>

                            <h2 className="pt-4 text-xl font-bold text-white sm:text-2xl">
                                THE WORLD
                            </h2>

                            <p>
                                The survival world isn't using completely vanilla world
                                generation. We're creating a custom-generated world using{" "}
                                <span className="font-bold text-white">
                                    Premium World Generation Plugins
                                </span>
                                , giving us much more control over the terrain, biomes,
                                landscapes, and environments.
                            </p>

                            <p>
                                Alongside the custom generation, we're also adding new
                                structures, villages, dungeons, farms, and other locations
                                throughout the world for players to discover while exploring.
                            </p>

                            <h2 className="pt-4 text-xl font-bold text-white sm:text-2xl">
                                WHAT ARE WE WORKING ON?
                            </h2>

                            <p>
                                There's a lot being worked on behind the scenes. The server
                                is still focused on survival, but we've added an MMORPG-style
                                progression system to give players more depth and different
                                ways to develop their characters.
                            </p>

                            <div className="space-y-2 text-sm">

                                <p>
                                    ⚔️{" "}
                                    <span className="font-semibold text-white">
                                        Classes
                                    </span>{" "}
                                    — choose a class and build your character around your
                                    preferred playstyle.
                                </p>

                                <p>
                                    🌟{" "}
                                    <span className="font-semibold text-white">
                                        Skills & Skill Trees
                                    </span>{" "}
                                    — unlock abilities and customize how your character
                                    develops.
                                </p>

                                <p>
                                    📈{" "}
                                    <span className="font-semibold text-white">
                                        MMORPG Progression
                                    </span>{" "}
                                    — level up, improve your character, and become stronger
                                    as you play.
                                </p>

                                <p>
                                    📜{" "}
                                    <span className="font-semibold text-white">
                                        Quests
                                    </span>{" "}
                                    — complete quests, earn rewards, and discover things
                                    around the world.
                                </p>

                                <p>
                                    🌍{" "}
                                    <span className="font-semibold text-white">
                                        Custom World Generation
                                    </span>{" "}
                                    — a custom survival world generated with premium world generation plugin, with unique terrain, biomes, and environments.
                                </p>

                                <p>
                                    🏰{" "}
                                    <span className="font-semibold text-white">
                                        Custom Structures
                                    </span>{" "}
                                    — discover villages, dungeons, farms, ruins, and other
                                    structures throughout the world.
                                </p>

                                <p>
                                    👹{" "}
                                    <span className="font-semibold text-white">
                                        Custom Mobs & Bosses
                                    </span>{" "}
                                    — fight enemies with custom models, abilities, and
                                    mechanics.
                                </p>

                                <p>
                                    🪑{" "}
                                    <span className="font-semibold text-white">
                                        Custom Furniture
                                    </span>{" "}
                                    — decorate your builds with furniture and other custom
                                    objects made for the server.
                                </p>

                                <p>
                                    🪓{" "}
                                    <span className="font-semibold text-white">
                                        Custom Items & Equipment
                                    </span>{" "}
                                    — discover custom weapons, equipment, resources, and
                                    other content.
                                </p>

                            </div>

                            <h2 className="pt-4 text-xl font-bold text-white sm:text-2xl">
                                SURVIVAL IS STILL AT THE CORE
                            </h2>

                            <p>
                                Even with all these systems, HeavenEarthRealms is still a
                                survival server at its core.
                            </p>

                            <p>
                                You don't have to follow a main story or a specific path.
                                Build your base, explore the world, gather resources, fight
                                mobs, complete quests, level up your character, or just play
                                with your friends.
                            </p>

                            <p>
                                The MMORPG systems are there to give you more things to do
                                and more ways to progress while keeping the freedom of
                                Minecraft survival.
                            </p>

                            <h2 className="pt-4 text-xl font-bold text-white sm:text-2xl">
                                THIS IS ONLY THE BEGINNING
                            </h2>

                            <p>
                                We're still in the early stages of development, and there's
                                a lot more to come. As development continues, we'll share
                                more screenshots, builds, custom mobs, systems, structures,
                                and other things we're working on.
                            </p>

                            <p>
                                We're building HeavenEarthRealms piece by piece, and we
                                can't wait to show you what we've been working on.
                            </p>

                            {/* Development Image */}
                            <div className="pt-1">
                                <img
                                    src="/images/model01.png"
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
                                    ⚔️{" "}
                                    <span className="font-semibold text-white">
                                        Survive. Explore. Progress.
                                    </span>
                                </p>

                                <p>
                                    ✨{" "}
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