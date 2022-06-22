import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Autocompletion() {
  const [address, setAddress] = useState([]);
  const [text, setText] = useState("");
  // const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadAddress = async () => {
      if (text.length > 6) {
        const response = await axios.get(
          `/api/autocomplete/?address=${encodeURIComponent(text)}`
        );
        // .then((response) => response.data)
        // .then((data) => data.features)
        // .then((features) => features[0].properties)
        // .then((properties) => properties.label)
        // .then((label) => setAddress(label));
        setAddress(response.data.features[0].properties.label);
        console.log(response.data.features[0].properties.label);
      }
    };
    loadAddress();
  }, [text]);
  // const onSuggestHandler = (text) => {
  //   setText(text);
  //   setSuggestions([]);
  // };
  // const onChangeHandler = (text) => {
  //   let matches = [];
  //   if (text.length > 0) {
  //     matches = address.filter((address) => {
  //       const regex = new RegExp(`${text}`, "gi");
  //       return address.text.match(regex);
  //     });
  //   }
  //   console.log("matches", matches);
  //   setSuggestions(matches);
  //   setText(text);
  // };
  return (
    <div className="Autocompletion">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        // onBlur={() => {
        //   setTimeout(() => {
        //     setSuggestions([]);
        //   }, 100);
        // }}
      />
      <div>{address}</div>
      {/* {countryList
          .filter((country) => country.name.includes(search))
          .map((elem) => (
            <Link
              to={`/destination/${elem.name.toLowerCase()}`}
              key={elem.name}
            ></Link> */}
    </div>
  );
}
