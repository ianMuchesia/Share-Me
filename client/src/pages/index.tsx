import { Hero, ImagePosts, Profiles } from "@/components/home";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the home page of my website."
        />
    
        <link rel="icon" href="/Designer-removebg.png" />
      </Head>
      <div className="gradient-bg-hero"></div>

      <div className=" gradient-bg-hero">
        {/* <Header /> */}
        <Hero />
      </div>
      <ImagePosts />
      <Profiles />
    </main>
  );
}
