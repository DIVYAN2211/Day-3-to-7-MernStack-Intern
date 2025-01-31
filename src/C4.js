import C5 from './C5';

function C4({ n, roll, gender, obj }) {
  return (
    <>
      <h2>Inside C4</h2>
      <C5 n={n} roll={roll} gender={gender} obj={obj} />
    </>
  );
}

export default C4;
