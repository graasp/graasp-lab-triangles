import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Main from '../layout/main/Main';
import SideMenu from '../layout/sidemenu/SideMenu';
import Styles from '../layout/sidemenu/Styles';

const styles = Styles;

const MainView = ({ classes }) => (
  <div className={classes.root}>
    <Main />
    <SideMenu />
  </div>
);

MainView.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles, { withTheme: true })(MainView);
