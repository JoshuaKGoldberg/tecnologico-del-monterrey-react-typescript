interface Window {
  someNewGlobalThing: boolean;
}

window.someNewGlobalThing = true;

interface FruitInterface {
  juicy: boolean;
  //   variant: "fruit"
}

interface FruitInterface {
  //   juicy: boolean;
  variant: "fruit";
}

// etc.

let fruit2: FruitInterface;

function MyButton(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>hi</button>;
}
