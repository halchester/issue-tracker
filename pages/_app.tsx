import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/query";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
