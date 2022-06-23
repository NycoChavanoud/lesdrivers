import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Autocompletion() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadAddress = async () => {
      if (text.length > 6) {
        const response = await axios.get(
          `/api/autocomplete/?address=${encodeURIComponent(text)}`
        );
        setSuggestions(response.data.features);
        setLatitude(response.data.features[0].geometry.coordinates[1]);
        setLongitude(response.data.features[0].geometry.coordinates[0]);
      }
    };
    loadAddress();
  }, [text]);
  console.log(latitude);
  console.log(longitude);
  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  console.log(suggestions, text);
  return (
    <div className="container">
      <input
        className="input"
        style={{ marginTop: 10, width: 250 }}
        type="text"
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
                className="col-md-12 input"
                style={{ marginTop: 12, width: 400 }}
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
