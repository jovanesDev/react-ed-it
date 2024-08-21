/* eslint-disable react/prop-types */
const CustomBtn = (props) => {
  const { btnText, clickFn,disabled } = props;
  return <button disabled={disabled} onClick={clickFn}>{btnText || "Sin Texto"}</button>;
};

export default CustomBtn;
