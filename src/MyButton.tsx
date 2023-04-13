export interface MyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  //   onClick: () => void;
  theme: "dark" | "light";
  onClick: React.HTMLAttributes<HTMLButtonElement>["onClick"];
}

const myValue = "hi";

let myValueMutable: string = "hi";

// export function MyButton(props) {
//     const { children, onClick } = props
// export const MyButton = ({ children, onClick }: MyButtonProps) => {
// export function MyButton(props: React.HTMLAttributes<HTMLButtonElement>) {
export function MyButton({ className, theme, ...rest }: MyButtonProps) {
  return (
    <button
      {...rest}
      className={className + " my-button-class " + "my-button-" + theme}
    />
  );
}

const something = (
  <MyButton
    type="button"
    onClick={() => alert("hi")}
    className="hi"
    theme="dark"
  />
);
