import { useGuiltyChar } from "../contexts/GuiltyCharContext";
import { useNavigate } from "react-router-dom";

export default function PromptTextBox({ prompt, sceneId }) {
  const navigate = useNavigate();
  const { guiltyChar, userName } = useGuiltyChar();
  // if (!guiltyChar) {
  //   navigate("/scene/1");
  // }
  if (sceneId === 1) {
    return (
      <>
        <div>{`${userName}, there has been a murder! Ms. Mangrove was found dead in her room early this morning, and you have been asked to help find out who is guilty. It won't be easy, but here are some tips to help you on your journey:`}</div>
        <div id="prompt-text-box">{prompt}</div>
      </>
    );
  } else if (sceneId === 3) {
    //living room, food
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div>{`Across the room from her stands a man with flowing blonde hair. He is much younger than the woman, and he leans with his back against the wall, his arms folded across his chest and his eyes fixed on ${guiltyChar.food.food_clue} on the carpet. Where will you go next?`}</div>
      </>
    );
  } else if (sceneId === 4) {
    //kitchen, job
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div>{`The back of the marble countertops are lined with every manner of cooking tool: a toaster oven, a self-grinding coffee maker, four cast iron skillets of different sizes, knives, wooden spoons, ${guiltyChar.job.job_clue}, an old copper tea kettle, a spice rack, and much more. Where will you go next?`}</div>
      </>
    );
  } else if (sceneId === 5) {
    //dining room, age?
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div>{`The walls are covered with dozens of old photographs, and there is a cabinet containing some china, a few glass figurines, a postcard from Japan, and {CLUE}. Where will you go next?`}</div>
      </>
    );
  } else if (sceneId === 6) {
    //laundry room, also job
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div>{`As you look around, you notice some more paint stains on the floor, as well as ${guiltyChar.food.food_clue}, something that looks like old chewing gum, and a few small pieces of balled up duct tape. A fly lands on your coat sleeve. Where will you go next?`}</div>
      </>
    );
  } else if (sceneId === 7) {
    //spare bedroom, hair
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div>{`The spare room feels incredibly cozy. Light pierces through the window as the sun is just beginning to set, bathing the room in a yellow-orange glow. The bed has crisp white sheets (save for a single ${guiltyChar.hair_color} hair) and is topped with a stack of what must be the world’s fluffiest pillows. There is a bookshelf on the north wall filled with old textbooks, most of them covered with a thin veneer of dust. A nail file and one half-melted candle sit on the bedside table. Where will you go next?
`}</div>
      </>
    );
  } else if (sceneId === 8) {
    //master bedroom, motive
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div>{`The next thing you notice is that, other than the flowers, everything on the desk is rather odd. There is a stack of old ticket stubs - presumably from past visits to a movie theater, a rabbit’s foot on a keychain, ${guiltyChar.motive.motive_clue}, a pewter figurine of the goddess Aphrodite, an unopened tampon, and a tarnished metal bracelet, among other things. It was all laid out in two neat rows and sorted by size from largest to smallest. Where will you go next?`}</div>
      </>
    );
  } else if (sceneId === 9) {
    //bathroom
    //maybe this one is the red herring??
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div>{`There is a single-file line of perfume bottles atop a shelf hung directly next to the sink. There is also a hairbrush, {CLUE}, an old wash rag, a candle, and a pack of matches with a single match inside. Where will you go next?
`}</div>
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
