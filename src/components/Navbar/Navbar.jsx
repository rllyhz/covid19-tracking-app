import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import styles from './Navbar.module.css';

export default class Navbar extends React.Component {
  showAlert() {
    alert("Maaf, saat ini belum fitur login belum tersedia");
  }

  render() {
    return (
      <AppBar position="static" className={styles.container}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Typography variant="h6">
              COVID-19
            </Typography>
          </IconButton>
          <Button color="inherit" onClick={this.showAlert}>Login</Button>
        </Toolbar>
      </AppBar>
    )
  }
}