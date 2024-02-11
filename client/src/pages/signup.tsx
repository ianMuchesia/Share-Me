import { SignupContainer } from "@/components/login";
import Head from "next/head";

const Signup = () => {
  return (
    <main>
      <Head>
        <title>Sign up page</title>
        <meta
          name="description"
          content="This is the signup page of my website."
        />
        <link rel="icon" href="/Designer-removebg.png" />
      </Head>
      <SignupContainer />
    </main>
  );
};

export default Signup;
