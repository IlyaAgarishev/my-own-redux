import useSelector from "../../myOwnRedux/useSelector";

const HobbiesInfo = () => {
  const hobbies = useSelector(({ hobbies }) => hobbies);

  return (
    <span style={{ border: "2px solid red" }}>
      <div className="name" style={{ background: "red" }}>
        HobbiesInfo
      </div>
      Hobbies list:
      <ul>
        {Array.isArray(hobbies) &&
          hobbies.map((hobby: any, index: number) => (
            <li key={index}>{hobby}</li>
          ))}
      </ul>
    </span>
  );
};

export default HobbiesInfo;
