interface ButtonSchema {
  id: string;
  onClick: () => void;
  text: string;
  variant: "button";
}

interface TextSchema {
  id: string;
  text: string;
  variant: "text";
}

type SchemaItem = ButtonSchema | TextSchema;

// const componentRegistry = {
//   button: MyButton,
//   text: MyText,
// };

function MyButton({ onClick, text }: ButtonSchema) {
  return <button onClick={onClick}>{text}</button>;
}

function MyText({ text }: TextSchema) {
  return <p>{text}</p>;
}

const schema: SchemaItem[] = [
  {
    id: "hi1",
    text: "hello world",
    variant: "text",
  },
  {
    id: "other",
    onClick: () => alert("hi"),
    text: "click me",
    variant: "button",
  },
];

function DynamicComponent() {
  return (
    <div>
      {schema.map((item) => (
        <ItemVisualizer key={item.id} item={item} />
      ))}
    </div>
  );
}

export interface ItemVisualizerProps {
  item: SchemaItem;
}

function ItemVisualizer({ item }: ItemVisualizerProps) {
  switch (item.variant) {
    case "button":
      return <MyButton {...item} />;
    case "text":
      return <MyText {...item} />;
  }
  //   const Component = componentRegistry[item.variant];

  //   return <Component {...item} />;
}
