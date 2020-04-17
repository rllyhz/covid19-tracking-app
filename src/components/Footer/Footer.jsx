import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import styles from './Footer.module.css';

export default class Footer extends React.Component {
  render() {
    return (
      <AppBar position="static" className={styles.container}>
        <Toolbar>
          <text className={styles.text}>
            &copy; Copyright 2020 - All Rights reserved.
          </text>
        </Toolbar>
      </AppBar>
    );
  }
}