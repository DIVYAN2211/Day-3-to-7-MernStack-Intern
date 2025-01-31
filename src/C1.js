import C2 from './C2';

function C1({ n, roll, gender, obj }) {
  return (
    <>
      <h2>Inside C1</h2>
      <C2 n={n} roll={roll} gender={gender} obj={obj} />
    </>
  );
}

export default C1;
