export default function PromptTextBox({
  prompt,
  guiltyChar,
  sceneId,
  userName,
}) {
  if (sceneId === 1) {
    return (
      <>
        <div>{`${userName}, there has been a MURDER. And it is your job to find out who is guilty. It won't be easy, but here are some tips to help you on your journey:`}</div>
        <div id="prompt-text-box">{prompt}</div>
      </>
    );
  } else if (guiltyChar && sceneId != 2 && sceneId != 778 && sceneId != 779) {
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div>{`There are also some ${guiltyChar.fav_food} on the floor...`}</div>
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
