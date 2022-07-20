import { useState } from "react";
import Store from "../../myOwnRedux/store";

const HobbiesForm = () => {
  const [value, setValue] = useState("");

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addHobby = () => {
    Store.dispatch({ type: "ADD_HOBBY", payload: value });
  };

  return (
    <span>
      <input type="text" placeholder="Hobby" onChange={onValueChange} />
      <button onClick={addHobby}>Add</button>
    </span>
  );
};

export default HobbiesForm;
