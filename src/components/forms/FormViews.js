import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import TableDatas from './TableDatas';

class FormViews extends Component {
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
    const { node, t } = this.props;
    const { points } = this.state;
    return (
      <div className="mt-3">
        <Table borderless>
          <thead>
            <tr>
              <th>
                {t('point')}&nbsp;
                {node.A}
              </th>
              <th>
                {t('point')}&nbsp;
                {node.B}
              </th>
              <th>
                {t('point')}&nbsp;
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
