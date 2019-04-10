const babelConfig = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const plugins = [];
  const presets = ['@shaizei/babel-preset'];

  return {
    plugins,
    presets,
  };
};

module.exports = babelConfig;
