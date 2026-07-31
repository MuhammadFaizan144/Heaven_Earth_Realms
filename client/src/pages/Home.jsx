import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-zinc-800">
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
    </section>
  );
};

export default Home;