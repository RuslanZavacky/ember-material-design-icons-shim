/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-material-design-icons-shim',
  included(appOrAddon) {
    this._super.included(appOrAddon);

    this.import('vendor/iconfont/MaterialIcons-Regular.eot', { destDir: 'assets' });
    this.import('vendor/iconfont/MaterialIcons-Regular.ijmap', { destDir: 'assets' });
    this.import('vendor/iconfont/MaterialIcons-Regular.svg', { destDir: 'assets' });
    this.import('vendor/iconfont/MaterialIcons-Regular.ttf', { destDir: 'assets' });
    this.import('vendor/iconfont/MaterialIcons-Regular.woff', { destDir: 'assets' });
    this.import('vendor/iconfont/MaterialIcons-Regular.woff2', { destDir: 'assets' });
    this.import('vendor/iconfont/material-icons.css');
  }
};
