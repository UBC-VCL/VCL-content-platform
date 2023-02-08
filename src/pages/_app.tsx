import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";
import { useHandleGetAllProjects } from "@/services/projectService";
import { useHandleCheckAuth } from "@/services/authService";

export default function App({ Component, pageProps }: AppProps) {
  useHandleGetAllProjects();
  useHandleCheckAuth();
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
