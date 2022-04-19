import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <header>
          <p className="result">0</p>
        </header>
        <section className="buttons">
          <table>
            <tbody>
              <tr>
                <td>AC</td>
                <td>+/-</td>
                <td>%</td>
                <td className="signs">/</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td className="signs">X</td>
              </tr>
              <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td className="signs">-</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td className="signs">+</td>
              </tr>
              <tr>
                <td className="double-sized">0</td>
                <td>.</td>
                <td className="signs">=</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default Calculator;
