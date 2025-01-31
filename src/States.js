import { useState } from "react";

export default function States() {
  // Single state object to manage all properties
  const [data, setData] = useState({
    name: "Demo",
    roll: "101",
    gender: "Male",
    clr: "Pink"
  });

  return (
    <>
      <h1>
        My Name is {data.name} <br />
        My Roll is {data.roll} <br />
        My Gender is {data.gender} <br />
        I love {data.clr} color
      </h1>
      
      {/* Button to update all fields */}
      <button
        onClick={() => {
          setData({
            ...data,
            name: "Divya",
            roll: "202",
            gender: "Female",
            clr: "Purple"
          });
        }}
      >
        Update All
      </button>

      {/* Buttons to update each field individually */}
      <button onClick={() => setData({ ...data, name: "Shini Monkey" })}>
        Update Name
      </button>
      <button onClick={() => setData({ ...data, roll: "23AD050" })}>
        Update Roll
      </button>
      <button onClick={() => setData({ ...data, gender: "Don" })}>
        Update Gender
      </button>
      <button onClick={() => setData({ ...data, clr: "Blue" })}>
        Update Color
      </button>
    </>
  );
}
