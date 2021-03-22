import { useRef, useState } from 'react';
import Modal from './modal';
import Backdrop from './backdrop';
import '../App.css';

export const Form = ({ message, setMessage, total, setTotal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [calc] = useState('');

  const billInputRef = useRef();
  const dinersInputRef = useRef();
  const serviceInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    setModalIsOpen(true);

    const billAmount = billInputRef.current.value;
    const numDiners = dinersInputRef.current.value;
    const percTip = serviceInputRef.current.value / 100;

    const eachBill = +parseFloat(billAmount / numDiners).toFixed(2);
    const tip = +parseFloat((billAmount / numDiners) * percTip).toFixed(2);
    const totalTip = +parseFloat(tip * numDiners).toFixed(2);
    const total = +parseFloat(eachBill + tip).toFixed(2);

    const calc = {
      bill: billAmount,
      diners: numDiners,
      service: percTip,
      beforeTip: eachBill,
      totalEach: total,
      tipEach: tip,
      totalTip: totalTip,
    };
    console.log(calc);
    setMessage(calc.tipEach);
    setTotal(calc.totalEach);
  }

  function closeModalHandler(event) {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="card">
        <form className="form" onSubmit={submitHandler} calc={calc}>
          <div>
            <h2>Bill Amount</h2>

            <input
              type="number"
              required
              placeholder="Enter the total bill - £GBP"
              className="actions"
              ref={billInputRef}
            />
          </div>
          <div>
            <h2>Number of Diners</h2>
            <select name="diners" className="actions" ref={dinersInputRef}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div>
            <h2>Service</h2>
            <select name="service" className="actions" ref={serviceInputRef}>
              <option value="0">0% - service included</option>
              <option value="5">5% - OK service</option>
              <option value="10">10% - good service</option>
              <option value="12.5">12.5% - very good service</option>
              <option value="20">20% - Amazing!</option>
            </select>
          </div>
          <div>
            <button className="btn">Calculate</button>
          </div>
          <div>
            {/* <h1 modalIsOpen={modalIsOpen}>{message}</h1> */}
            <h5>
              Based on the information provided above, your individual tip
              amounts to be added to the bill are: £{message}
            </h5>
            <h5>Your total bill will therefore be: £{total}</h5>
          </div>
        </form>
        {modalIsOpen && <Modal onClick={closeModalHandler} />}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    </>
  );
};

export default Form;
