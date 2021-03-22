function Modal(props) {
  return (
    <div className="modal">
      {/* <h1 calc={calc}>{message}{setCalc}</h1> */}
      <h3>Calculating the tip amount... Close to view</h3>
      <button className="btn--alt" onClick={props.onClick}>
        Close
      </button>
      {/* <button>See the breakdown</button> */}
    </div>
  );
}

export default Modal;
