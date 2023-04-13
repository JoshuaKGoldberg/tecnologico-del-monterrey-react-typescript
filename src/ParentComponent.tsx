import { useState } from "react";
import { ChildComponent, ChildComponentProps } from "./ChildComponent";

export interface ParentComponentProps {
  childProps: ChildComponentProps;
}

// https://react-hook-form.com
// Formik
// HouseForm
export function ParentComponent() {
  //   const [value, setValue] = useState("");
  //   const [value1, setValue1] = useState("");
  //   const [value2, setValue2] = useState("");
  //   const [value3, setValue3] = useState("");
  //   const [value4, setValue4] = useState("");
  //   const [value5, setValue5] = useState("");
  const [values, setValues] = useState({
    member: "",
    member2: "",
    member3: "",
    member4: "",
    member5: "",
  });

  return (
    <form onSubmit={() => alert(value)}>
      <ChildComponent
        onChange={(newMember) => setValues({ ...values, member: newMember })}
        value={values.member}
      />
      <ChildComponent className="input-2" onChange={setValue2} value={value2} />
      <ChildComponent className="input-3" onChange={setValue3} value={value3} />
      <ChildComponent className="input-4" onChange={setValue4} value={value4} />
      <ChildComponent className="input-5" onChange={setValue5} value={value5} />
    </form>
  );
}
