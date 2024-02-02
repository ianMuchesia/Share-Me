import { Hero, ImagePosts, Profiles } from "@/components/home";


export default function Home() {
  return (
    <main
      
    >
    <div className="gradient-bg-hero">

    </div>

    <div className=" gradient-bg-hero">
        {/* <Header /> */}
        <Hero />
      </div>
     <ImagePosts/>
     <Profiles/>
    </main>
  );
}
