export default function LeftButton({ text, optionId, onClick }) {
  if (text) {
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
  } else {
    return <></>;
  }
}
