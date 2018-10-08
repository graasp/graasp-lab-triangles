import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, InputGroup, InputGroupText,
  InputGroupAddon, Input, Table,
} from 'reactstrap';

class FormViews extends Component {
  static propTypes = {
    handlePChange: PropTypes.func.isRequired,
    node: PropTypes.shape({
      A: PropTypes.string.isRequired,
      B: PropTypes.string.isRequired,
      C: PropTypes.string.isRequired,
    }).isRequired,
  }

  state = {
    rotated: false,
    points: this.props.point,
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

  handleShiftRight = () => {
    const { handlePChange } = this.props;
    const { points } = this.state;
    const newPoints = [...points];

    const reachedLimit = newPoints.some(point => point.x === 300);
    if (!reachedLimit) {
      newPoints.forEach((point) => { point.x += 20; }); // eslint-disable-line no-param-reassign
      handlePChange(newPoints);
    }
  }

  handleShiftLeft = () => {
    const { handlePChange } = this.props;
    const { points } = this.state;
    const newPoints = [...points];
    const reachedLimit = newPoints.some(point => point.x < 20);
    if (!reachedLimit) {
      newPoints.forEach((point) => { point.x -= 20; }); // eslint-disable-line no-param-reassign
      handlePChange(newPoints);
    }
  }

  handleRotate = (event) => {
    const { handlePChange } = this.props;
    const { points } = this.state;
    const newPoints = [...points];
    const Ox = (newPoints[0].x + newPoints[1].x + newPoints[2].x) / 3;
    const Oy = (newPoints[0].y + newPoints[1].y + newPoints[2].y) / 3;
    const radians = event.target.dataset.rotate === 'right' ? (Math.PI / 180) * 90 : (Math.PI / 180) * (-90);
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);

    newPoints.forEach((point) => {
      const nx = (cos * (point.x - Ox)) + (sin * (point.y - Oy)) + Ox;
      const ny = (cos * (point.y - Oy)) - (sin * (point.x - Ox)) + Oy;
      point.x = Math.round(nx); // eslint-disable-line no-param-reassign
      point.y = Math.round(ny); // eslint-disable-line no-param-reassign
    });
    handlePChange(newPoints);
  }

  render() {
    const { node } = this.props;
    const { rotated, points } = this.state;
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
        <Button color="success" size="sm" onClick={rotated ? this.handleShiftRight : this.handleShiftLeft}>Shift-Left</Button>
        <Button color="outline-warning" size="sm" className="ml-3 mr-3" onClick={this.handleRotate} data-rotate="left">Rotate Left</Button>
        <Button color="outline-warning" size="sm" className="ml-3 mr-3" onClick={this.handleRotate} data-rotate="right">Rotate Right</Button>
        <Button color="success" size="sm" onClick={rotated ? this.handleShiftLeft : this.handleShiftRight}>Shift-Right</Button>
      </div>
    );
  }
}


export default FormViews;
