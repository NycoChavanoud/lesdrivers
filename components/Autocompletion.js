import React, { useEffect, useState } from "react";
import axios from "axios";

function Autocompletion() {
  const [address, setAddress] = useState([]);
  const [text, setText] = useState([""]);
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadAddress = async () => {
      const response = await axios.get(
        `https://api-adresse.data.gouv.fr/search/`
      );
      setAddress(response.data.data);
      console.log(setAddress);
    };
    loadAddress();
  }, []);
  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = address.filter((address) => {
        const regex = new RegExp(`${text}`, "gi");
        return address.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 100);
        }}
      />
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div key={i} onClick={() => onSuggestHandler(suggestion.address)}>
            {suggestion.address}
          </div>
        ))}
    </div>
  );
}

export default Autocompletion;
