import React from "react";
import useSelector from "../../myOwnRedux/useSelector";

const HobbiesInfo = () => {
  const hobbies = useSelector(({ hobbies }) => hobbies) || [];

  return (
    <span>
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
