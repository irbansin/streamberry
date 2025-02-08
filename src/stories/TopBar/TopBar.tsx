import React from "react";
import PropTypes from "prop-types";

import { Button } from "../Button/Button";
import "./TopBar.scss";

export const TopBar = ({
  title = "Title",
  user = null,
  imgAddress = "https://i2.wp.com/www.lightvesselautomatic.com/wp-content/uploads/2016/03/html5-logo.png?w=500&ssl=1",
  imgAltText = "image",
  onLogin = () => {},
  onLogout = () => {},
  onCreateAccount = () => {},
  loginEnabled = false,
}) => (
  <div className="storybook-topbar">
    <div className="topbar-logo">
      <img src={imgAddress} alt={imgAltText} />
      <h1>{title || "Cryllgen Labs"}</h1>
    </div>
    {loginEnabled ? (
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button
              size="small"
              click={onLogout}
              label="Log out"
              buttonStyle="primary"
            />
          </>
        ) : (
          <>
            <Button size="small" click={onLogin} label="Log in" />
            <Button
              buttonStyle="primary"
              size="small"
              click={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    ) : null}
  </div>
);

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  imgAddress: PropTypes.string,
  imgAltText: PropTypes.string,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  onCreateAccount: PropTypes.func,
  loginEnabled: PropTypes.bool,
};
