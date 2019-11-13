import React, { Component } from "react";
import styles from "./User.module.css";

export default class Usercomp extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.base}>
          <img src={this.props.src} alt=" " height="400px;" width="200px" />
          <div className={styles.content}></div>
        </div>
      </div>
    );
  }
}
