import { signOut, useSession } from "next-auth/react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";

export const CurrentUserContext = createContext({});

export default function CurrentUserContextProvider({ children }) {
  const { status } = useSession();

  const [currentUserProfile, setCurrentUserProfile] = useState(null);

  const getProfile = useCallback(() => {
    axios
      .get("/api/profile")
      .then(({ data }) => {
        setCurrentUserProfile(data);
      })
      .catch(() => {
        signOut();
      });
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      getProfile();
    } else if (status === "unauthenticated") {
      setCurrentUserProfile(null);
    }
  }, [status, getProfile]);

  return (
    <CurrentUserContext.Provider value={{ currentUserProfile }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
