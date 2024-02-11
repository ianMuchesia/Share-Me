import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
import { useEffect, ComponentType } from "react";
import { NextPage } from "next";



//higher oredr component to check if user is authenticated
//if not redirect to signin page
const withAuth = (WrappedComponent: ComponentType | NextPage) => {
  return (props: any) => {
    const Router = useRouter();
    const user = useAppSelector((state) => state.auth);

    useEffect(() => {
      if (user.isAuthenticated) {
       return 
      }
      if (user.isAuthenticated === false) {
        Router.replace("/signin");
      }
    }, [user]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
