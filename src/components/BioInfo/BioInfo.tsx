import Connect from "../../myOwnRedux/connect";
import useSelector from "../../myOwnRedux/useSelector";

const BioForm: React.FC = () => {
  const { name, age, weight } = useSelector(({ name, age, weight }) => ({
    name,
    age,
    weight,
  }));

  return (
    <span>
      <div>
        <label>
          Name: <strong>{name}</strong>
        </label>
      </div>
      <div>
        <label>
          Age: <strong>{age}</strong>
        </label>
      </div>
      <div>
        <label>
          Weight:{" "}
          <strong>
            {weight} {weight && "kg"}
          </strong>
        </label>
      </div>
    </span>
  );
};

export default BioForm;
