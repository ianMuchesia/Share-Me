import { CreateContainer } from "@/components/create";
import Head from "next/head";

export default function Create() {
  return (
    <main>
      <Head>
        <title>Create Page</title>
        <meta
          name="description"
          content="This is the create page of my website."
        />
        <link rel="icon" href="/Designer-removebg.png" />
      </Head>
      <CreateContainer />
    </main>
  );
}
