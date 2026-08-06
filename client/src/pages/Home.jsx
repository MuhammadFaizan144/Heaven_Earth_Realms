import React from "react";

const Home = () => {
  return (
    <section>

      <article className="min-h-screen flex items-center justify-center px-6 bg-zinc-800">
        <div className="max-w-3xl flex flex-col items-center text-center gap-8">
          <img
            src="/images/model01.png"
            alt="Minecraft Model"
            className="w-full"
          />

          <h1 className="text-5xl font-bold italic">
            The Minecraft MMO Survival
          </h1>

          <p className="text-lg text-gray-400 max-w-3xl">
            Experience a unique MMORPG-inspired survival adventure featuring
            custom classes, powerful bosses, RPG progression, player-driven
            economy, unique dungeons, quests, and a fully customized terrain
            world unlike any other Minecraft Survival server.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-5 py-2 rounded-lg text-white">
              play.heavenearthrealms.com
            </div>
            <div className="px-5 py-2 rounded-lg text-white">
              00 Online
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 transition">
              UNDER DEVELOPMENT
            </button>
            <button className="px-6 py-3 rounded-lg border bg-white border-white hover:bg-zinc-800 hover:text-white transition">
              WATCH OUR PROGRESS
            </button>
          </div>
        </div>
      </article>
      <article className="w-full bg-zinc-800 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              The Minecraft MMO Survival
            </h2>

            <div className="mb-8 overflow-hidden rounded-xl border border-zinc-700">
              <img
                src=""
                alt="HeavenEarthRealm"
                className="h-auto w-full object-cover"
              />
            </div>

            <p className="mb-8 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Forge your own destiny in <strong>HeavenEarthRealm</strong>, a unique
              Minecraft MMORPG Survival experience where the world is shaped by your
              choices. No mods are required—just join and begin your adventure.
              <br />
              <br />
              Choose your class, master powerful skills, and progress through a living
              world filled with quests, dangerous dungeons, challenging bosses, and
              legendary loot. Build your reputation, level up your character, craft
              powerful gear, and explore a fantasy custom world filled with new
              terrain, biomes, and structures.
              <br />
              <br />
              Whether you prefer battling monsters, gathering rare resources, or
              becoming one of the server's strongest adventurers, your journey is
              entirely your own.
            </p>

            <h3 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
              How to Join HeavenEarthRealm
            </h3>

            <ul className="space-y-3 pl-5 text-base leading-7 text-gray-300 marker:text-yellow-400 sm:text-lg">
              <li>Launch Minecraft: Java Edition.</li>
              <li>
                Open <strong>Multiplayer</strong> and click{" "}
                <strong>Add Server</strong>.
              </li>
              <li>
                Enter the Server IP:{" "}
                <span className="font-semibold break-all text-yellow-400">
                  play.heavenearthrealms.com
                </span>
              </li>
              <li>Join the server and accept the resource pack (required).</li>
              <li>Once the resource pack finishes downloading, your adventure begins!</li>
            </ul>
          </div>
        </div>
      </article>
      <article className="w-full bg-zinc-800 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Custom Terrain, Biomes, and Structures
            </h2>
            <p className="mb-8 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Travel the new biomes, each filled with incredible medieval rustic builds and fantasy landscapes created with care and attention to detail. Explore the world and discover unique dungeons, hidden treasures, and challenging bosses that will test your skills and reward your efforts.
              <br />
              <br />
              Each biome is designed to provide a unique experience, from lush forests and towering mountains to dark caves and mystical ruins. The world of HeavenEarthRealm is alive and colorful, with new content and challenges added regularly to keep your adventure fresh and exciting.
            </p>

            <div className="mb-8 overflow-hidden rounded-xl border border-zinc-700">
              <img
                src=""
                alt="HeavenEarthRealm"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </article>
      <article className="w-full bg-zinc-800 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Loot & Economy
            </h2>
            <p className="mb-8 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Find legendary items and combo them with your attributes for devastating effects, or sell them on the Auction House and become the richest player in one of the largest Minecraft server economies.
            </p>

            <div className="mb-8 overflow-hidden rounded-xl border border-zinc-700">
              <img
                src=""
                alt="HeavenEarthRealm"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </article>
    </section>

  );
};

export default Home;