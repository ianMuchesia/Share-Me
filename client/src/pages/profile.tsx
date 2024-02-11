import { ProfileContainer } from "@/components/profile";
import withAuth from "@/lib/WithAuth";
import Head from "next/head";

// Profile page with HOC to protect the route
const Profile = () => {
  return (
    <main>
      <Head>
        <title>Profile Page</title>
        <meta
          name="description"
          content="This is the user profile page of my website."
        />
        <link rel="icon" href="/Designer-removebg.png" />
      </Head>
      <ProfileContainer />
    </main>
  );
};

Profile.displayName = 'Profile';

export default withAuth(Profile);
