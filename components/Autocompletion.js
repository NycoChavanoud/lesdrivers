import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import qs from "query-string";
import axios from "axios";
import DisplayAddressContext from "../contexts/DisplayAddressContext";

const Autocompletion = ({ foundAddress }) => {
  const { address } = useParams();
  const parameters = qs.stringify({ tags: foundAddress });
  const { setAddress } = useContext(DisplayAddressContext);

  const searchAddress = () => {
    axios
      .get(
        `https://api-adresse.data.gouv.fr/search/?q=${address}&autocomplete=1${parameters}`
      )
      .then((res) => setAddress(res.data));
  };

  useEffect(() => {
    searchAddress();
  });

  return (
    <button type="button" id="tag-btn" onClick={searchAddress}>
      FILTER
    </button>
  );
};

export default Autocompletion;
