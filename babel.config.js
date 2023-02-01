const presets = [
    [
        '@babel/preset-env',
        {
            debug: true,
            targets: "ie 11",
            useBuiltIns: "usage",
            corejs: {
                version: '3.27.2',
                proposals: true
            }
        }
    ]
];

module.exports = {presets};