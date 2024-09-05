export default function GuessButton({ onLastScene }) {
  return (
    <>
      <button id="guess-button" onClick={onLastScene}>
        Guess
      </button>
    </>
  );
}
