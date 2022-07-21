import { useSelector } from "../../myOwnRedux";

const BioForm: React.FC = () => {
  const { name, age, weight } = useSelector(({ name, age, weight }) => ({
    name,
    age,
    weight,
  }));

  console.log(
    `%cBioInfo re-rendered`,
    `background: blue; color: white; padding: 2px 4px;`
  );

  return (
    <span style={{ border: "2px solid blue" }}>
      <div className="name" style={{ background: "blue" }}>
        BioInfo
      </div>
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
