import { SigninContainer } from "@/components/login";
import Head from "next/head";

const Signin = () => {
  return (
    <main>
      <Head>
        <title>Sign in Page</title>
        <meta
          name="description"
          content="This is the sign in page of my website."
        />
        <link rel="icon" href="/Designer-removebg.png" />
      </Head>
      <SigninContainer />
    </main>
  );
};

export default Signin;
