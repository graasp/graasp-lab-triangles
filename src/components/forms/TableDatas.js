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
  points: PropTypes.number.isRequired,
  handlePointChange: PropTypes.func.isRequired,
  axis: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TableDatas;
