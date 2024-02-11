import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
import { useEffect, ComponentType } from "react";
import { NextPage } from "next";



//higher oredr component to check if user is authenticated
//if not redirect to signin page
const withAuth = (WrappedComponent: ComponentType | NextPage) => {
  const WithAuthComponent = (props: any) => {
    const Router = useRouter();
    const user = useAppSelector((state) => state.auth);

    useEffect(() => {
      if (user.isAuthenticated) {
       return 
      }
      if (user.isAuthenticated === false) {
        Router.replace("/signin");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.isAuthenticated]);

    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuthComponent;
}

function getDisplayName(WrappedComponent: ComponentType | NextPage) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}


export default withAuth;