const babelConfig = api => {
  api.cache.using(() => process.env.NODE_ENV);

  const plugins = [];
  const presets = [
    [
      '@shaizei/babel-preset',
      {
        typescript: true,
      },
    ],
  ];

  return {
    plugins,
    presets,
  };
};

module.exports = babelConfig;
