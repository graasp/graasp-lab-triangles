import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import TableDatas from './TableDatas';

export class FormViews extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
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
  };

  handlePointChange = (event) => {
    event.preventDefault();
    const { handlePChange, points } = this.props;
    const { dataset: { index, axis } } = event.target;
    let { value } = event.target;
    const newPoints = [...points];
    if (value === '') {
      value = 0;
    }
    newPoints[index][axis] = Number.parseInt(value, 10);
    handlePChange(newPoints);
  };

  render() {
    const { node, t, points } = this.props;
    return (
      <div className="mt-3">
        <Table borderless>
          <thead>
            <tr>
              <th>
                {t('point')}
                &nbsp;
                {node.A}
              </th>
              <th>
                {t('point')}
                &nbsp;
                {node.B}
              </th>
              <th>
                {t('point')}
                &nbsp;
                {node.C}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableDatas index="0" name="X" axis="x" points={points[0].x} handlePointChange={this.handlePointChange} />
              <TableDatas index="1" name="X" axis="x" points={points[1].x} handlePointChange={this.handlePointChange} />
              <TableDatas index="2" name="X" axis="x" points={points[2].x} handlePointChange={this.handlePointChange} />
            </tr>
            <tr>
              <TableDatas index="0" name="Y" axis="y" points={points[0].y} handlePointChange={this.handlePointChange} />
              <TableDatas index="1" name="Y" axis="y" points={points[1].y} handlePointChange={this.handlePointChange} />
              <TableDatas index="2" name="Y" axis="y" points={points[2].y} handlePointChange={this.handlePointChange} />
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}


export default FormViews;
