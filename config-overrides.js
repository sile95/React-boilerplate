const path = require('path');
const { addBabelPresets, override, addBabelPlugins, addWebpackAlias } = require('customize-cra');

module.exports = {
    paths(paths) {
        paths.appIndexJs = path.resolve(__dirname, 'react/src/index.jsx');
        paths.appSrc = path.resolve(__dirname, 'react');
        return paths;
    },
    webpack: override(
        addWebpackAlias({
            '@core': path.resolve(__dirname, 'react'),
        }),

        ...addBabelPresets('@babel/preset-env', '@babel/preset-react'),
        ...addBabelPlugins(
            '@babel/plugin-syntax-optional-chaining',
            '@babel/plugin-proposal-object-rest-spread'
        )
    ),
};
