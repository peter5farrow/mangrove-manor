import { useGuiltyChar } from "../contexts/GuiltyCharContext";

//holds the part of the scene prompt that changes based on the guilty character

export default function PromptTextBox({ prompt, sceneId }) {
  const { guiltyChar, userName } = useGuiltyChar();
  if (sceneId === 1) {
    //intro
    return (
      <>
        <div id="prompt-text-box">{`${userName}, there has been a murder! Ms. Mangrove was found dead in her room early this morning, and you have been asked to help find out who is guilty. It won't be easy, but here are some tips to help you on your journey:`}</div>
        <div id="prompt-template">{prompt}</div>
      </>
    );
  } else if (sceneId === 3) {
    //living room, food
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div id="promt-template">{`Across the room from her stands a man with bleached blonde hair. He is much younger than the woman, and he leans with his back against the wall, his arms folded across his chest and his eyes fixed on ${guiltyChar.food.food_clue} on the carpet. Where will you go next?`}</div>
      </>
    );
  } else if (sceneId === 4) {
    //kitchen, job
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div id="promt-template">{`The back of the marble countertops are lined with every manner of cooking tool: a toaster oven, a coffee maker, four cast iron skillets of different sizes, knives, wooden spoons, ${guiltyChar.job.job_clue}, an old copper tea kettle, and much more. Where will you go next?`}</div>
      </>
    );
  } else if (sceneId === 5) {
    //dining room, country
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div id="promt-template">{`The walls are covered with dozens of old photographs, and there is a cabinet containing some china, a few glass figurines, and a postcard from ${guiltyChar.birthplace}. Where will you go next?`}</div>
      </>
    );
  } else if (sceneId === 6) {
    //laundry room, food
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div id="promt-template">{`As you look around, you notice some mud stains on the floor, as well as ${guiltyChar.food.food_clue}, a ball of lint, and a few small pieces of duct tape. A fly lands on your coat sleeve. Where will you go next?`}</div>
      </>
    );
  } else if (sceneId === 7) {
    //spare bedroom, hair
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div id="promt-template">{`The spare room feels incredibly cozy. Light pierces through the window as the sun is just beginning to set, bathing the room in a yellow-orange glow. The bed has crisp white sheets (save for a single ${guiltyChar.hair_color} hair) and is topped with a stack of what must be the world’s fluffiest pillows. There is a bookshelf on the north wall filled with old books, most of them covered with a thin veneer of dust. Where will you go next?
`}</div>
      </>
    );
  } else if (sceneId === 8) {
    //master bedroom, country
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div id="promt-template">{`The next thing you notice is that, other than the flowers, everything on the desk is rather odd. There is a stack of old ticket stubs - presumably from past visits to a movie theater, a keychain with a picture of ${guiltyChar.country.country_clue} on it, a small pack of tissues, and a tarnished metal bracelet, among other things. It was all laid out in two neat rows and sorted by size from largest to smallest. Where will you go next?`}</div>
      </>
    );
  } else if (sceneId === 9) {
    //bathroom, red herring?
    return (
      <>
        <div id="prompt-text-box">{prompt}</div>
        <div id="promt-template">{`There is a line of perfume bottles atop a shelf hung directly next to the sink. There is also a hairbrush, a washcloth, a candle, and a pack of matches with a single match inside. Where will you go next?
`}</div>
      </>
    );
  } else if (sceneId === 778) {
    //success
    return (
      <>
        <div id="ending-text">{`Congratulations ${userName}, you did it!
`}</div>
        <div id="promt-template">{`Nice detective work. Thanks to your keen eye, the mystery of Ms. Mangrove’s death will not be in vain.
`}</div>
      </>
    );
  } else if (sceneId === 779) {
    //failure
    return (
      <>
        <div id="ending-text">{`Sorry ${userName}, wrong answer…
`}</div>
        <div id="promt-template">{`Unfortunately the perpetrator got away this time. Better luck with the next case!

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
