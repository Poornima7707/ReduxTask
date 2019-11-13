import React, { Component } from "react";
import styles from "../User.module.css";
import Usercomp from "../Usercomp";

export default class User extends Component {
  componentDidMount() {
    this.props && this.props.getCard();
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.userData &&
          this.props.userData.userData &&
          this.props.userData.userData.map(usrr => {
            return (
              <div>
                <Usercomp src={usrr.avatar_url} />
                <div className={styles.text}>{usrr.login}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
