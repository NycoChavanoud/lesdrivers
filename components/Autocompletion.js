import React, { useState } from "react";
import axios from "axios";

export default function Autocompletion() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const onSuggestHandler = async (text) => {
    setText(text);
    setSuggestions([]);
  };

  const setTextOriginAdress = async (address) => {
    setText(address);
    if (text.length > 6) {
      const response = await axios.get(
        `/api/autocomplete/?address=${encodeURIComponent(text)}`
      );
      setSuggestions(response.data.features);
    }
  };

  return (
    <div>
      <input
        type="text"
        style={{ marginTop: 6, width: 280 }}
        onChange={(e) => setTextOriginAdress(e.target.value)}
        value={text}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 100);
        }}
      />
      <div>
        {suggestions.map((i, index) => {
          return (
            <div key={index}>
              <div
                type="button"
                style={{ marginTop: 3, width: 250 }}
                onClick={() => onSuggestHandler(i.properties.label)}
              >
                {i.properties.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
