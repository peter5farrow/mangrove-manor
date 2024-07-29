export default function RightButton({ text, optionId, onClick }) {
  if (text) {
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
  } else {
    return <></>;
  }
}
