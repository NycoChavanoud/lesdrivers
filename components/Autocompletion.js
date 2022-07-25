import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Autocompletion() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadAddress = async () => {
      if (text.length > 10) {
        const response = await axios.get(
          `/api/autocomplete/?address=${encodeURIComponent(text)}`
        );
        setSuggestions(response.data.features);
      }
    };
    loadAddress();
  }, [text]);
  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        style={{ marginTop: 6, width: 250 }}
        onChange={(e) => setText(e.target.value)}
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
