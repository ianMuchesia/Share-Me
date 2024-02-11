import Layout from "@/components/Layout";
import AuthLayout from "@/lib/AuthLayout";
import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthLayout>
    </Provider>
  );
}
