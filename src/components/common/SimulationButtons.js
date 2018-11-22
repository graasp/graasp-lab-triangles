import React, { Component } from 'react';
import { Alert, Button, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Big from 'big.js';

class SimulationButtons extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    flashed: PropTypes.bool.isRequired,
    triangles: PropTypes.shape({
      triOne: PropTypes.array.isRequired,
      triTwo: PropTypes.array.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    const { flashed } = props;
    this.state = {
      flashed,
      visible: true,
      success: {
        value1: '',
        value2: '',
        value3: '',
      },
    };
  }

  handleSimulate = () => {
    const { triangles: { triOne, triTwo } } = this.props;

    // Getting Triangle ABC coordinates
    const xa = triOne[0].x;
    const xb = triOne[1].x;
    const xc = triOne[2].x;
    const ya = triOne[0].y;
    const yb = triOne[1].y;
    const yc = triOne[2].y;

    // Calculating triangle ABC distances
    // Calculating xAB and yAB
    const r = new Big(xb).minus(xa);
    const s = new Big(yb).minus(ya);
    const dAB = r.pow(2).plus(s.pow(2)).sqrt();

    // Calculating xAC and yAC
    const t = new Big(xc).minus(xa);
    const u = new Big(yc).minus(ya);
    const dAC = t.pow(2).plus(u.pow(2)).sqrt();

    // Calculating xBC and yBC
    const v = new Big(xc).minus(xb);
    const w = new Big(yc).minus(yb);
    const dBC = v.pow(2).plus(w.pow(2)).sqrt();

    // Getting Triangle A`B`C` coordinates
    const xaprim = triTwo[0].x;
    const xbprim = triTwo[1].x;
    const xcprim = triTwo[2].x;
    const yaprim = triTwo[0].y;
    const ybprim = triTwo[1].y;
    const ycprim = triTwo[2].y;

    // Calculating triangle A`B`C` distances
    // Calculating xA`B` and yA`B`
    const x = new Big(xbprim).minus(xaprim);
    const y = new Big(ybprim).minus(yaprim);
    const dABprim = x.pow(2).plus(y.pow(2)).sqrt();

    // Calculating xAC and yAC
    const i = new Big(xcprim).minus(xaprim);
    const j = new Big(ycprim).minus(yaprim);
    const dACprim = i.pow(2).plus(j.pow(2)).sqrt();

    // Calculating xBC and yBC
    const k = new Big(xcprim).minus(xbprim);
    const l = new Big(ycprim).minus(ybprim);
    const dBCprim = k.pow(2).plus(l.pow(2)).sqrt();
    // Calculation side compareason
    const value1 = dAB.div(dABprim);
    const value2 = dAC.div(dACprim);
    const value3 = dBC.div(dBCprim);
    this.setState({
      success: {
        value1: value1.toString(),
        value2: value2.toString(),
        value3: value3.toString(),
      },
      flashed: true,
    });
  };

  handleMessage = (value1, value2, value3) => {
    const { visible } = this.state;
    const { t } = this.props;
    if (value1 === value2 && value2 === value3) {
      return (
        <Alert color="success" isOpen={visible}>
          {t('triangles')}
          &nbsp;
          <strong>ABC</strong>
          &nbsp;
          {t('and')}
          &nbsp;
          <strong>DEF</strong>
          &nbsp;
          {t('are')}
          &nbsp;
          <strong>{t('similar')}</strong>
        </Alert>
      );
    }
    return (
      <Alert color="danger" isOpen={visible}>
        {t('triangles')}
        &nbsp;
        <strong>ABC</strong>
        &nbsp;
        {t('and')}
        &nbsp;
        <strong>DEF</strong>
        &nbsp;
        {t('arenot')}
        {' '}
        &nbsp;
        <strong>{t('similar')}</strong>
      </Alert>
    );
  };

  render() {
    const { success, flashed } = this.state;
    const { t } = this.props;
    const { value1, value2, value3 } = success;
    return (
      <div className="pt-3">
        <Row>
          <div className="mx-auto">
            {flashed ? this.handleMessage(value1, value2, value3) : ''}
          </div>
        </Row>
        <div className="ml-3 mt-3">
          <Button className="primary-blued p-3 mr-4 compare-btn" onClick={this.handleSimulate}>{t('compare')}</Button>
        </div>
      </div>
    );
  }
}

export default SimulationButtons;
