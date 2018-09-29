module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ['@babel/env', {
                targets: { node: 8 },
                modules: 'commonjs'
            }]
        ]
    };
};
