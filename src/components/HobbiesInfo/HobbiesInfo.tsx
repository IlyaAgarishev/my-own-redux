import React from "react";
import Connect from "../../myOwnRedux/connect";

interface IProps {
  hobbies: string[];
}

const HobbiesInfo: React.FC<IProps> = ({ hobbies = [] }) => {
  return (
    <span>
      Hobbies list:
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </span>
  );
};

export default Connect(HobbiesInfo, ({ hobbies }) => ({
  hobbies,
}));
