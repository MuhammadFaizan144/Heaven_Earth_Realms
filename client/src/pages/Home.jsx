import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl flex flex-col items-center text-center gap-8">
        <img
          src="/images/model01.png"
          alt="Minecraft Model"
          className="w-full max-w-lg"
        />

        <h1 className="text-5xl font-bold">
          The Minecraft MMO Survival
        </h1>

        <p className="text-lg text-gray-400 max-w-3xl">
          Experience a unique MMORPG-inspired survival adventure featuring
          custom classes, powerful bosses, RPG progression, player-driven
          economy, unique dungeons, quests, and a fully customized terrain
          world unlike any other Minecraft Survival server.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-5 py-2 rounded-lg bg-zinc-800">
            play.heavenearthrealms.com
          </div>
          <div className="px-5 py-2 rounded-lg bg-zinc-800">
            100 Online
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 transition">
            UNDER DEVELOPMENT
          </button>
          <button className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-black transition">
            WATCH OUR PROGRESS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;