import Connect from "../../myOwnRedux/connect";

interface IProps {
  name: string | null;
  age: number | null;
  weight: number | null;
}

const BioForm: React.FC<IProps> = ({ name, age, weight }) => {
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

export default Connect(BioForm, ({ name, age, weight }) => ({
  name,
  age,
  weight,
}));
