import React from "react";
import PropTypes from 'prop-types';
import Navbar from "../components/Navbar.component";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    {/* todo: create footer */}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
