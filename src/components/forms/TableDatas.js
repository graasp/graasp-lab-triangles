import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup, InputGroupText,
  InputGroupAddon, Input,
} from 'reactstrap';

const TableDatas = ({
  axis, handlePointChange, index,
  name, points,
}) => (
  <td>
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>{name}</InputGroupText>
      </InputGroupAddon>
      <Input type="number" min="0" max="300" data-index={index} data-axis={axis} value={points} onChange={handlePointChange} />
    </InputGroup>
  </td>
);

TableDatas.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
  handlePointChange: PropTypes.func.isRequired,
  axis: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default TableDatas;
