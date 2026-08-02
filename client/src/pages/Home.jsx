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
      <article>
        <div className="">
          <h2>The Minecraft MMO Survival</h2>
          <div className=""><img src="" alt="" /></div>
          <p>
            Forge your own destiny in HeavenEarthRealm, a unique Minecraft MMORPG Survival experience where the world is shaped by your choices. No mods are required—just join and begin your adventure.

            Choose your class, master powerful skills, and progress through a living world filled with quests, dangerous dungeons, challenging bosses, hidden secrets, and legendary loot. Build your reputation, level up your character, craft powerful gear, and explore a fantasy realm where Heaven and Earth collide.

            Whether you prefer battling monsters, uncovering ancient mysteries, gathering rare resources, or becoming one of the server’s strongest adventurers, your journey is entirely your own.
          </p>
          <p>How to Join HeavenEarthRealm</p>
          <ul>
            <li>Launch Minecraft: Java Edition</li>
            <li>Open Multiplayer and Click Add Server</li>
            <li>Enter the Server IP: play.heavenearthrealms.com</li>
            <li>Click Join Server and install resource packs it's compulsory</li>
            <li>After installation, you can start playing!</li>
          </ul>
        </div>
      </article>
    </section>

  );
};

export default Home;