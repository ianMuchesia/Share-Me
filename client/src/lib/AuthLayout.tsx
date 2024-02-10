import { loading, login, logout } from "@/store/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useGetmeQuery } from "@/store/services/authApi";
import { useEffect } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const dispatch = useAppDispatch();

  // Get the user data from the server
  const { data, isLoading, error } = useGetmeQuery();

  // If the user is authenticated, set the user data in the store
  useEffect(() => {
    if (data) {
      dispatch(login(data));
    } else if (isLoading) {
      dispatch(loading());
    } else {
      dispatch(logout());
    }
  }, [data]);

  return <div>{children}</div>;
};

export default AuthLayout;
