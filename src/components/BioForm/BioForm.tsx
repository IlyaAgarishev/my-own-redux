import { useDispatch } from "../../myOwnRedux";

const BioForm = () => {
  const dispatch = useDispatch();

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_NAME", payload: e.target.value });
  };

  const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_AGE", payload: e.target.value });
  };

  const onWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_WEIGHT", payload: e.target.value });
  };

  return (
    <span>
      <input type="text" placeholder="Name" onChange={onNameChange} />
      <input type="number" placeholder="Age" onChange={onAgeChange} />
      <input type="number" placeholder="Weight" onChange={onWeightChange} />
    </span>
  );
};

export default BioForm;
