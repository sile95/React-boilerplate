const path = require('path');
const { alias } = require('react-app-rewire-alias');

module.exports = {
    paths(paths, env) {
        paths.appIndexJs = path.resolve(__dirname, 'react/src/index.jsx');
        paths.appSrc = path.resolve(__dirname, 'react');
        return paths;
    },
    webpack(config, env) {
        alias({
            '@core': 'react',
        })(config);

        return config;
    },
};
