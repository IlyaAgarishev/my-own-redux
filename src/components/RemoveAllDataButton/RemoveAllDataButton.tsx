import { useDispatch } from "../../myOwnRedux";

const RemoveAllDataButton = () => {
  const dispatch = useDispatch();

  const removeAllData = () => {
    dispatch({ type: "CLEAN_ALL" });
  };

  return <button onClick={removeAllData}>Set store to initial data</button>;
};

export default RemoveAllDataButton;
