module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@lib": "./src/lib",
            "@models": "./src/models",
            "@screens": "./src/screens",
            "@store": "./src/store",
          }
        }
      ]
    ],
  };
};
