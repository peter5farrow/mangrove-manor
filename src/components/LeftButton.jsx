export default function LeftButton({ text, optionId, onClick, onLastScene }) {
  if (text && optionId != 777) {
    return (
      <>
        <button
          id="left-button"
          onClick={() => {
            return onClick(optionId);
          }}
        >
          {text}
        </button>
      </>
    );
  } else if (optionId === 777) {
    return (
      <>
        <button id="left-button" onClick={onLastScene}>
          {text}
        </button>
      </>
    );
  } else {
    return <></>;
  }
}
