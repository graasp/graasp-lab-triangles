import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Form,
  FormGroup, Input, Label,
} from 'reactstrap';

class FormViews extends Component {
  static propTypes = {
    value: PropTypes.bool.isRequired,
    min: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
  }

  state = {
    colors: [
      '00',
      '00',
      '00',
    ],
    min: 0,
  }

  render() {
    const { value, min, handleChange } = this.props;
    if (value) {
      return (
        <Form>
          <FormGroup row>
            <Label sm={2}>Side A</Label>
            <Col sm={10}>
              <Input name="" type="number" value={this.state.colors[0]} onChange={handleChange} placeholder="Side A size" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Side B</Label>
            <Col sm={10}>
              <Input name="" type="number" value={this.state.colors[1]} onChange={handleChange} placeholder="Side B size" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Side C</Label>
            <Col sm={10}>
              <Input name="" type="number" value={this.state.colors[2]} onChange={handleChange} placeholder="Side C size" />
            </Col>
          </FormGroup>
        </Form>
      );
    }
    return (
      <div>
        <h2>This is the Second view</h2>
      </div>
    );
  }
}


export default FormViews;
