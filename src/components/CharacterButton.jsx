export default function CharacterButton({ onClick, character, isGuilty }) {
  return <button onClick={() => onClick(isGuilty)}>{character}</button>;
}
