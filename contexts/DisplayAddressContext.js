import React, { createContext } from "react";

const DisplayAddressContext = createContext();

export const DisplayAddressProvider = ({ children }) => {
  const [address, setAddress] = React.useState(null);

  return (
    <DisplayAddressContext.Provider value={{ address, setAddress }}>
      {children}
    </DisplayAddressContext.Provider>
  );
};

export default DisplayAddressContext;
