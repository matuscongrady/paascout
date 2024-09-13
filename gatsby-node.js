module.exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: '@emotion/babel-preset-css-prop',
    options: {
      sourceMap: false,
      autoLabel: 'never'
    }
  });
};

module.exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.provide({
        React: '@emotion/react'
      })
    ]
  });
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false
    });
  }
};
