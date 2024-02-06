import { login } from "@/store/features/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { useGetmeQuery } from "@/store/services/authApi";
import { useEffect } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const dispatch = useAppDispatch();

  // Get the user data from the server
  const { data, isLoading, error } = useGetmeQuery([]);

  console.log(data)


  // If the user is authenticated, set the user data in the store
  useEffect(() => {
    if (data) {
      dispatch(login({ isAuthenticated: true, user: data }));
    } else if (isLoading) {
      dispatch(login({ isAuthenticated: false, user: null, loading: true }));
    } else {
      dispatch(login({ isAuthenticated: false, user: null }));
    }
  }, [data]);

  return <div>{children}</div>;
};

export default AuthLayout;
