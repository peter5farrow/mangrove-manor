export default function PromptTextBox({ prompt, guiltyChar, sceneId }) {
  if (guiltyChar && sceneId != 778) {
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div>{`You find some ${guiltyChar.fav_food} on the ground as well...`}</div>
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
