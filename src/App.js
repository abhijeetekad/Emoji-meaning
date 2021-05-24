import React, { useState } from "react";

import "./styles.css";

const flagEmoji = {
  "😁": "Beaming Face with Smiling Eyes",
  "🤣": "Rolling on the Floor Laughing Face",
  "😭": "Loudly Crying Face",
  "😲": "Astonished Face"
};

const emojis = Object.keys(flagEmoji);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Translation will appear here");
  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in flagEmoji) {
      setMeaning(flagEmoji[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(flagEmoji[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>Search Emoji </h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder=" put an emoji here to know its meaning"
        style={{ padding: "1rem", width: "80%" }}
      />
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
