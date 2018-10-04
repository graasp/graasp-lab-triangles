import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, InputGroup, InputGroupText,
  InputGroupAddon, Input, Table,
} from 'reactstrap';

class FormViews extends Component {
  static propTypes = {
    handlePChange: PropTypes.func.isRequired,
    node: PropTypes.object.isRequired,
  }

  state = {
    flashed: this.props.flashed,
    rotated: false,
    points: this.props.point,
  }

  handlePointChange = (event) => {
    event.preventDefault();
    if (event.target.value === '') {
      event.target.value = 0;
    }
    if (event.target.value > 300) {
      event.target.value = 300;
    }
    const { handlePChange } = this.props;
    const { points } = this.state;
    const { dataset: { index, axis }, value } = event.target;
    const newPoints = [...points];
    newPoints[index][axis] = Number.parseInt(value, 10);
    handlePChange(newPoints);
    this.setState({ flashed: false })
  }

  handleShiftRight = () => {
    const { handlePChange } = this.props;
    const { points } = this.state;
    const newPoints = [...points];
    for (let i = 0; i < newPoints.length; i++) {
      if (newPoints[i].x < 300) {
        newPoints[i].x += 20;
        handlePChange(newPoints);
      }
    }
  }

  handleShiftLeft = () => {
    const { handlePChange } = this.props;
    const { points } = this.state;
    const newPoints = [...points];
    for (let i = 0; i < newPoints.length; i++) {
      if (newPoints[i].x > 20 && newPoints[i].x < 300) {
        console.log('newPoints[i].x', newPoints[i].x);
        newPoints[i].x -= 20;
        handlePChange(newPoints);
      }
    }
  }

  handleRotate = (event) => {
    const elm = document.querySelectorAll('.konvajs-content');
    const { rotated } = this.state;
    const deg = rotated ? 0 : 180;
    for (let i = 0; i < elm.length; i++) {
      elm[i].setAttribute('id', [i])
      elm[i].style.webkitTransform = 'rotate('+deg+'deg)';
      elm[i].style.mozTransform    = 'rotate('+deg+'deg)';
      elm[i].style.msTransform     = 'rotate('+deg+'deg)';
      elm[i].style.oTransform      = 'rotate('+deg+'deg)';
      elm[i].style.transform       = 'rotate('+deg+'deg)';
    }
    this.setState({ rotated: !rotated });
  }

  render() {
    const { node } = this.props;
    const { rotated, points, flashed } = this.state;
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
        <Button color="outline-warning" size="sm" className="ml-3 mr-3" onClick={this.handleRotate}>Rotate</Button>
        <Button color="success" size="sm" onClick={rotated ? this.handleShiftLeft : this.handleShiftRight}>Shift-Right</Button>
      </div>
    );
  }
}


export default FormViews;
