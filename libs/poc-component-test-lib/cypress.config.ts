import { nxComponentTestingPreset } from '@nx/angular/plugins/component-testing';
import { defineConfig } from 'cypress';
import { CoverageWebpack } from './coverage.webpack';

const nxPreset = nxComponentTestingPreset(__filename);

export default defineConfig({
  component: {
    ...nxPreset,
    devServer: {
      ...nxPreset.devServer,
      webpackConfig: CoverageWebpack,
    },
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
