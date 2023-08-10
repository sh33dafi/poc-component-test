import * as path from "path";

export const CoverageWebpack = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: '@jsdevtools/coverage-istanbul-loader',
        options: {esModules: true},
        enforce: 'post',
        include: [
          path.join(__dirname, '../..', 'apps'),
          path.join(__dirname, '../..', 'libs')
        ],
        exclude: [
          /cypress/,
          /\.(cy|spec)\.ts$/,
          /node_modules/
        ]
      }
    ]
  }
};