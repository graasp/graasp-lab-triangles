import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup, InputGroupText,
  InputGroupAddon, Input, Table,
} from 'reactstrap';

class FormViews extends Component {
  static propTypes = {
    handlePChange: PropTypes.func.isRequired,
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })).isRequired,
    node: PropTypes.shape({
      A: PropTypes.string.isRequired,
      B: PropTypes.string.isRequired,
      C: PropTypes.string.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    const { points } = props;
    this.state = {
      points,
    };
  }

  handlePointChange = (event) => {
    event.preventDefault();
    if (event.target.value === '') {
      event.target.value = 0; // eslint-disable-line no-param-reassign
    }
    if (event.target.value > 300) {
      event.target.value = 300; // eslint-disable-line no-param-reassign
    }
    const { handlePChange } = this.props;
    const { points } = this.state;
    const { dataset: { index, axis }, value } = event.target;
    const newPoints = [...points];
    newPoints[index][axis] = Number.parseInt(value, 10);
    handlePChange(newPoints);
  }

  render() {
    const { node } = this.props;
    const { points } = this.state;
    return (
      <div className="mt-3">
        <Table borderless>
          <thead>
            <tr>
              <th>
                Point&nbsp;
                {node.A}
              </th>
              <th>
                Point&nbsp;
                {node.B}
              </th>
              <th>
                Point&nbsp;
                {node.C}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>X</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" max="250" data-index="0" data-axis="x" value={points[0].x} onChange={this.handlePointChange} />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>X</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" max="300" data-index="1" data-axis="x" value={points[1].x} onChange={this.handlePointChange} />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>X</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" max="300" data-index="2" data-axis="x" value={points[2].x} onChange={this.handlePointChange} />
                </InputGroup>
              </td>
            </tr>
            <tr>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Y</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" max="300" data-index="0" data-axis="y" value={points[0].y} onChange={this.handlePointChange} />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Y</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" max="300" data-index="1" data-axis="y" value={points[1].y} onChange={this.handlePointChange} />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Y</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" max="300" data-index="2" data-axis="y" value={points[2].y} onChange={this.handlePointChange} />
                </InputGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}


export default FormViews;
