import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Form,
  FormGroup, InputGroup, InputGroupText,
  InputGroupAddon, Input, Label, Table,
} from 'reactstrap';

class FormViews extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
  }

  state = {
    colors: [
      '00',
      '00',
      '00',
    ]
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const { handleChange } = this.props;
    const { colors } = this.state;
    const { dataset: { index }, value } = event.target;
    const newColors = [...colors];
    newColors[index] = value;
    this.setState({ colors: newColors });
    handleChange(newColors);
  }

  render() {
    const { value, min } = this.props;
    const { colors } = this.state;
    if (value) {
      return (
        <Form className="mt-3">
          <FormGroup row>
            <Label sm={2}>Side A</Label>
            <Col sm={10}>
              <Input name="" data-index="0" type="text" min={min} value={colors[0]} onChange={this.handleInputChange} placeholder="Side A size" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Side B</Label>
            <Col sm={10}>
              <Input name="" data-index="1" type="text" value={colors[1]} onChange={this.handleInputChange} placeholder="Side B size" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Side C</Label>
            <Col sm={10}>
              <Input name="" data-index="2" type="text" value={colors[2]} onChange={this.handleInputChange} placeholder="Side C size" />
            </Col>
          </FormGroup>
        </Form>
      );
    }
    return (
      <div className="mt-3">
        <Table borderless>
          <thead>
            <tr>
              <th>Dot A</th>
              <th>Dot B</th>
              <th>Dot C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>X</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>X</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>X</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" />
                </InputGroup>
              </td>
            </tr>
            <tr>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Y</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Y</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Y</InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" min="0" />
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
