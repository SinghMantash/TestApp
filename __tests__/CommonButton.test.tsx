import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Login} from '../src/Screen';
import CommonButton from '../src/Components/CommonButton/CommonButton';

it('renders correctly', () => {
  const tree = renderer.create(<CommonButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
