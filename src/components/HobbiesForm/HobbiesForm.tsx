import { KeyboardEvent, useState } from "react";
import Store from "../../myOwnRedux/store";

const HobbiesForm = () => {
  const [value, setValue] = useState("");

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addHobby = () => {
    Store.dispatch({ type: "ADD_HOBBY", payload: value });
    setValue("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      addHobby();
    }
  };

  return (
    <span>
      <input
        type="text"
        placeholder="Hobby"
        value={value}
        onChange={onValueChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={addHobby} type="button">
        Add
      </button>
    </span>
  );
};

export default HobbiesForm;
