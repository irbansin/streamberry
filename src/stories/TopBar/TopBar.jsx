import React from "react";
import PropTypes from "prop-types";

import { Button } from "../Button/Button";
import "./TopBar.scss";

export const TopBar = ({
  title,
  imgAddress,
  imgAltText,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  loginEnabled,
  z,
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
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
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

TopBar.defaultProps = {
  title: null,
  user: null,
  imgAddress:
    "https://i2.wp.com/www.lightvesselautomatic.com/wp-content/uploads/2016/03/html5-logo.png?w=500&ssl=1",
  imgAltText: null,
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
  loginEnabled: false,
};
