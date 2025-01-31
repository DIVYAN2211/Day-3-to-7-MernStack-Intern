function C5({ n, roll, gender, obj }) {
    const { empname, city } = obj;
  
    return (
      <>
        <h2>i am from Child 5</h2>
        <p>Name: {n}</p>
        <p>Roll: {roll}</p>
        <p>Gender: {gender}</p>
        <p>Employee Name: {empname}</p>
        <p>City: {city}</p>
      </>
    );
  }
  
  export default C5;
  