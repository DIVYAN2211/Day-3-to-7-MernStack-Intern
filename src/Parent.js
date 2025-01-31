import C1 from './C1';

function Parent() {
  const person = {
    empname: "AAAA",
    city: "Chennai",
  };

  const name = "Divya";
  const roll = "23AD037";
  const gender = "Female";

  return (
    <>
      <h1>Parent Class</h1>
      <C1 n={name} roll={roll} gender={gender} obj={person} />
    </>
  );
}

export default Parent;                      