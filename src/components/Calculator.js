import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({});

  const handleClick = (event) => {
    setState(() => calculate(state, event.target.innerText));
  };

  return (
    <div className="calculator-wrapper">
      <h2>Lets do some Math</h2>
      <div className="calculator">
        <header>
          <p className="result">{state.next || state.total || 0}</p>
        </header>
        <section className="buttons">
          <table>
            <tbody>
              <tr>
                <td onClick={handleClick} role="presentation">
                  AC
                </td>
                <td onClick={handleClick} role="presentation">
                  +/-
                </td>
                <td onClick={handleClick} role="presentation">
                  %
                </td>
                <td className="signs" onClick={handleClick} role="presentation">
                  ÷
                </td>
              </tr>
              <tr>
                <td onClick={handleClick} role="presentation">
                  7
                </td>
                <td onClick={handleClick} role="presentation">
                  8
                </td>
                <td onClick={handleClick} role="presentation">
                  9
                </td>
                <td className="signs" onClick={handleClick} role="presentation">
                  x
                </td>
              </tr>
              <tr>
                <td onClick={handleClick} role="presentation">
                  4
                </td>
                <td onClick={handleClick} role="presentation">
                  5
                </td>
                <td onClick={handleClick} role="presentation">
                  6
                </td>
                <td className="signs" onClick={handleClick} role="presentation">
                  -
                </td>
              </tr>
              <tr>
                <td onClick={handleClick} role="presentation">
                  1
                </td>
                <td onClick={handleClick} role="presentation">
                  2
                </td>
                <td onClick={handleClick} role="presentation">
                  3
                </td>
                <td className="signs" onClick={handleClick} role="presentation">
                  +
                </td>
              </tr>
              <tr>
                <td
                  className="double-sized"
                  onClick={handleClick}
                  role="presentation"
                >
                  0
                </td>
                <td onClick={handleClick} role="presentation">
                  .
                </td>
                <td className="signs" onClick={handleClick} role="presentation">
                  =
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Calculator;
