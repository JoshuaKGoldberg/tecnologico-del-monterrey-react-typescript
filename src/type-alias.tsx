// let idMaybe: string | null | undefined;
// let nameMaybe: string | null | undefined;
// let textMaybe: string | null | undefined;

// is the same as

type StringMaybe = string | null | undefined;

let idMaybe: StringMaybe;
let nameMaybe: StringMaybe;
let textMaybe: StringMaybe;

type FruitTypeAlias = {
  juicy: boolean;
  variant: "fruit";
};

type FruitTypeAlias = {
  juicy: boolean;
  variant: "fruit";
};

// etc.

let fruit: FruitTypeAlias;

function MyButton(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>hi</button>;
}
