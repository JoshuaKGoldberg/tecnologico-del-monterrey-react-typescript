export interface MyComponentProps {
  children: React.ReactNode;
  onClick: () => void;
}

const myValue = "hi";

let myValueMutable = "hi";

// export function MyComponent(props) {
//     const { children, onClick } = props
// export const MyComponent = ({ children, onClick }: MyComponentProps) => {
export function MyComponent({ children, onClick }: MyComponentProps) {
  // ..
}
