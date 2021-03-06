'use strict';

// unreleased flags gating an active feature
exports.prerelease = {
  proxy: true,
  custom_instrumentation: false
};

// flags that are no longer used for released features
exports.released = [
  'released',
  'express4',
  'insights',
];

// flags that are no longer used for unreleased features
exports.unreleased = [
  'unreleased'
];
