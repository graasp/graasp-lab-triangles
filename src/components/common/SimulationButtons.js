import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import Big from 'big.js';
import Notificator from './Notificator';
import { shareFinalResults } from '../../actions';
import './Style.css';

class SimulationButtons extends Component {
  static propTypes = {
    themeColor: PropTypes.string.isRequired,
    dragMode: PropTypes.bool.isRequired,
    showHeader: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired,
    dispatchFinalResult: PropTypes.func.isRequired,
    triangles: PropTypes.shape({
      triOne: PropTypes.array.isRequired,
      triTwo: PropTypes.array.isRequired,
    }).isRequired,
  };

  notifySuccess = () => toast(<Notificator />, { position: toast.POSITION.BOTTOM_LEFT });

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
    const { dispatchFinalResult } = this.props;
    dispatchFinalResult({
      value1: value1.toString(),
      value2: value2.toString(),
      value3: value3.toString(),
    });
    this.notifySuccess();
  };

  render() {
    const {
      dragMode,
      showHeader,
      t,
      themeColor,
    } = this.props;
    return (
      <div className={`${!showHeader ? 'left-margin' : ''}`}>
        { dragMode
          ? <ToastContainer autoClose={false} /> : ''
        }
        <Button
          style={{ backgroundColor: themeColor, borderColor: themeColor }}
          className="compare-btn"
          onClick={this.handleSimulate}
        >
          {t('compare')}
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = { dispatchFinalResult: shareFinalResults };

const mapStateToProps = state => ({
  finalResults: state.simulation.finalResults,
  dragMode: state.simulation.dragMode,
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader,
});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(SimulationButtons);

export default withTranslation()(ConnectedComponent);
