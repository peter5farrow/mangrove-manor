import axios from "axios";

export default function PromptTextBox({ prompt, guiltyChar }) {
  const getGuiltyChar = async () => {
    const res = await axios.get(`/api/characters/${guiltyChar}`);
    return res.data;
  };
  return (
    <>
      <div id="prompt-text-box">{prompt}</div>
    </>
  );
}
