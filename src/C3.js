import C4 from './C4';

function C3({ n, roll, gender, obj }) {
  return (
    <>
      <h2>Inside C3</h2>
      <C4 n={n} roll={roll} gender={gender} obj={obj} />
    </>
  );
}

export default C3;
