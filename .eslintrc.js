module.exports = {
    globals: {
        __PATH_PREFIX__: true
    },
    extends: [`react-app`, 'plugin:react/recommended'],
    rules: {
        'react/prop-types': 'warn'
    }
};
