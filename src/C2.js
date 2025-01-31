import C3 from './C3';

function C2({ n, roll, gender, obj }) {
  return (
    <>
      <h2>Inside C2</h2>
      <C3 n={n} roll={roll} gender={gender} obj={obj} />
    </>
  );
}                           

export default C2;