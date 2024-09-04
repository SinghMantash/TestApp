import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Header from '../src/Components/Header/Header';
import {render, screen} from '@testing-library/react-native';
import {
  toBeEmptyElement,
  toHaveTextContent,
} from '@testing-library/jest-native';

expect.extend({toBeEmptyElement, toHaveTextContent});

it(' Header Snapshot Matching', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("Header's title Prop working ", async () => {
  const headerTitle = 'Testing';
  render(<Header title={headerTitle} />);
  const headerText = await screen.findByTestId('header-text');
  expect(headerText).toHaveTextContent(headerTitle);
});
