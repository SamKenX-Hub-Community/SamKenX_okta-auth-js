/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

//Jest doc: https://jestjs.io/docs/ecmascript-modules

const OktaAuth = process.env.BUNDLE_ENV === 'browser' ? 
  `<rootDir>/build/bundles-for-validation/esm/esm.browser.mjs` : 
  `<rootDir>/build/esm/esm.node.mjs`;
const testEnvironment = process.env.BUNDLE_ENV === 'browser' ? 'jsdom' : 'node';

export default {
  roots: [
    'test/validate-bundles'
  ],
  testEnvironment,
  testMatch: [
    '**/test/validate-bundles/**/*.{js,ts}'
  ],
  transform: {},
  restoreMocks: true,
  moduleNameMapper: {
    '^@okta/okta-auth-js$': OktaAuth,
    '^broadcast-channel$': '<rootDir>/node_modules/broadcast-channel/dist/es5node/index.js'
  },
  extensionsToTreatAsEsm: ['.ts'],
  testPathIgnorePatterns: [],
  reporters: [
    'default',
    'jest-junit'
  ]
};
