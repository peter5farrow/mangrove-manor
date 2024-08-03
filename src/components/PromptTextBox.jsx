import axios from "axios";

export default function PromptTextBox({ prompt, guiltyChar }) {
  if (guiltyChar) {
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div>{guiltyChar.character_id}</div>
      </>
    );
  } else {
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
      </>
    );
  }
}
