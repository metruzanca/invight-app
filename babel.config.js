module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@store": "./src/store",
            "@hooks": "./src/hooks",
            "@models": "./src/models",
          }
        }
      ]
    ],
  };
};
