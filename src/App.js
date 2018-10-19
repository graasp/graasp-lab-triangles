import React, { Component } from 'react';
import Qs from 'qs';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import TeacherView from './teacher/TeacherView';
import StudentView from './student/StudentView';
import './App.css';
import Logo from './main-logo.svg';
import LogoEtri from './etri-logo.png';

class App extends Component {
  static propTypes = {
    i18n: PropTypes.shape({}).isRequired,
    t: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const { mode = 'default' } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
    this.state = {
      mode,
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }

  render() {
    const { mode, loading } = this.state;
    const { i18n, t } = this.props;
    if (loading) {
      return (
        <div className="App-loader">
          <img src={Logo} className="App-loader-logo" alt="Logo" />
          <img src={LogoEtri} className="App-loader-logo" alt="Logo" />
        </div>);
    }
    switch (mode) {
      // show teacher view when in teacher mode
      case 'teacher':
        return <TeacherView />;

      // by default go with the student mode
      case 'student':
      default:
        return <StudentView t={t} changeLanguage={this.changeLanguage} i18n={i18n} />;
    }
  }
}

export default translate('translations')(App);
