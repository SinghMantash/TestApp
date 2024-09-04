module.exports = {
  preset: 'react-native',
  verbose: true,
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|react-redux|@react-native-async-storage)',
  ],
  setupFiles: ['./jestSetupFile.js'],
};
