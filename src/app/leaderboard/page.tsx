import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MetaTags from "../components/MetaTags";

// import TopCard from "../components/TopCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Leaderboard | JWoC 2K22</title>
        <link rel="shortcut icon" type="image/png" />
        <MetaTags />
      </Head>

      <Header />

      <section className="relative mx-auto mt-32 mb-12">
        <div className="px-5 lg:px-0">
          <div className="relative my-10 mx-auto flex justify-center items-center flex-col text-center lg:mx-8 sm:mx-2">
            <h2 className="my-1.5 pt-0 px-2 pb-2 font-['Blanka'] text-[2rem] font-bold text-lightblack tracking-[4px] rounded-lg bg-[rgba(255,255,255,0.8)] shadow-[0_0_4px_rgba(50,69,107,0.2)] md:text-[1rem]">
              JWoC 2K22 Leaderboard
            </h2>
            <p className="my-4 font-codefont text-2xl font-medium text-lightblack tracking-wide">
              Check your rank here!
            </p>
            <p className="my-2 font-codefont text-lg font-medium text-lightblack tracking-wide">
              Last updated on:
              <span className="mx-0.5 font-curlfont font-bold text-primarydark italic"></span>
            </p>
          </div>

          <div className="relative my-10 px-12 flex justify-center items-center gap-8 lg:px-8 sm:px-2 md:flex-col"></div>

          <div className="my-12 mx-12 lg:mx-8 sm:mx-2">
            <input
              type="search"
              className="h-14 w-full px-3 py-3 font-codefont text-lg text-lightblack font-medium shadow focus:outline-none border-[3px] border-darkgrey tracking-wider rounded-lg"
              placeholder="Search for your Name, GitHub username or college"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
