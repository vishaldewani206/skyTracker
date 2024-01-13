import loading from '../images/loader.gif';
function Spinner() {
  return <img src={loading} style={{ width: '5rem', margin: '2rem' }} alt="loader"/>;
}
export default Spinner;
