import { useSelector } from "../../myOwnRedux";

const HobbiesInfo = () => {
  const hobbies = useSelector(({ hobbies }) => hobbies);

  console.log(
    `%cHobbiesInfo re-rendered`,
    `background: red; color: white; padding: 2px 4px;`
  );

  return (
    <span style={{ border: "2px solid red" }}>
      <div className="name" style={{ background: "red" }}>
        HobbiesInfo
      </div>
      Hobbies list:
      <ul>
        {Array.isArray(hobbies) &&
          hobbies.map((hobby: string, index: number) => (
            <li key={index}>{hobby}</li>
          ))}
      </ul>
    </span>
  );
};

export default HobbiesInfo;
