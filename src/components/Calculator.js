import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick(event) {
    this.setState((state) => calculate(state, event.target.innerText));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calculator">
        <header>
          <p className="result">{next || total || 0}</p>
        </header>
        <section className="buttons">
          <table>
            <tbody>
              <tr>
                <td onClick={this.handleClick} role="presentation">
                  AC
                </td>
                <td onClick={this.handleClick} role="presentation">
                  +/-
                </td>
                <td onClick={this.handleClick} role="presentation">
                  %
                </td>
                <td
                  className="signs"
                  onClick={this.handleClick}
                  role="presentation"
                >
                  ÷
                </td>
              </tr>
              <tr>
                <td onClick={this.handleClick} role="presentation">
                  7
                </td>
                <td onClick={this.handleClick} role="presentation">
                  8
                </td>
                <td onClick={this.handleClick} role="presentation">
                  9
                </td>
                <td
                  className="signs"
                  onClick={this.handleClick}
                  role="presentation"
                >
                  x
                </td>
              </tr>
              <tr>
                <td onClick={this.handleClick} role="presentation">
                  4
                </td>
                <td onClick={this.handleClick} role="presentation">
                  5
                </td>
                <td onClick={this.handleClick} role="presentation">
                  6
                </td>
                <td
                  className="signs"
                  onClick={this.handleClick}
                  role="presentation"
                >
                  -
                </td>
              </tr>
              <tr>
                <td onClick={this.handleClick} role="presentation">
                  1
                </td>
                <td onClick={this.handleClick} role="presentation">
                  2
                </td>
                <td onClick={this.handleClick} role="presentation">
                  3
                </td>
                <td
                  className="signs"
                  onClick={this.handleClick}
                  role="presentation"
                >
                  +
                </td>
              </tr>
              <tr>
                <td
                  className="double-sized"
                  onClick={this.handleClick}
                  role="presentation"
                >
                  0
                </td>
                <td onClick={this.handleClick} role="presentation">
                  .
                </td>
                <td
                  className="signs"
                  onClick={this.handleClick}
                  role="presentation"
                >
                  =
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default Calculator;
