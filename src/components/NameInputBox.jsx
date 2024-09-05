import { useState } from "react";

export default function NameInputBox({ onInput }) {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        onInput(e, {
          name: name,
        });
      }}
    >
      <input
        name="name"
        id="name"
        type="text"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" id="name-submit-button">
        Continue
      </button>
    </form>
  );
}
