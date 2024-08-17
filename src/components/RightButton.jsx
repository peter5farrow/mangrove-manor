export default function RightButton({ text, optionId, onClick, onLastScene }) {
  if (text && optionId != 777) {
    return (
      <>
        <button
          id="right-button"
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
        <button id="right-button" onClick={onLastScene}>
          {text}
        </button>
      </>
    );
  } else {
    return <></>;
  }
}
