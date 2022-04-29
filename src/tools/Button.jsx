import "./buttonStyle.css";
const ButtonPrimary = ({ style,onclick=()=>{console.warn("click")} }) => {
  return (
    <button onClick={onclick} className="primary" style={style}>
      sadasasd
    </button>
  );
};
const ButtonSuccess = ({ disabled = false }) => {
  return <button  disabled={disabled}>Success</button>;
};
export { ButtonPrimary, ButtonSuccess };
