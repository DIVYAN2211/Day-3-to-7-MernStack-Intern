import Display from './Display';

function Datas() {
  const person = {
    empname: "AAAA",
    city: "Chennai"
  };    
  
  let name = "Divya";
  let roll = "23AD037";
  let gender = "Female";
  const ans = `My Name is ${name}`;
  
  return (
    <>
      <h1>My Name is {name}</h1>
      <h1>{ans}</h1>
      <Display n={name} roll={roll} gender={gender} obj={person} /> 
    </>
  );
}

export default Datas;
