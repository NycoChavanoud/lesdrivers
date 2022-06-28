import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { SessionProvider } from "next-auth/react";
import CurrentUserContextProvider from "../contexts/CurrentUserContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider
      session={session}
      // Re-fetch session every 5 minutes
      refetchInterval={5 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={true}
    >
      <CurrentUserContextProvider>
        <Component {...pageProps} />
      </CurrentUserContextProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
