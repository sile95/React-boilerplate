import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ className, children }) => {
    return <div className={`main ${className || ''}`}>{children}</div>;
};

Layout.defaultProps = {
    className: null,
    children: null,
};

Layout.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default Layout;
