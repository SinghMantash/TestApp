import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Login} from '../src/Screen';
import CommonButton from '../src/Components/CommonButton/CommonButton';
import { fireEvent, render, screen } from '@testing-library/react-native';
import {
  toBeEmptyElement,
  toHaveTextContent,
} from '@testing-library/jest-native';

expect.extend({toBeEmptyElement, toHaveTextContent});

const onPress = jest.fn()
const title = 'Testing';

it('CommonButton Snapshot Matching', () => {
  const tree = renderer.create(<CommonButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("CommonButton title Prop working ", async () => {
  render(<CommonButton text={title} />);
  const btnTitle = await screen.findByTestId('commonBtn');
  expect(btnTitle).toHaveTextContent(title);
});
it("CommonButton onPress Prop working ", async () => {
  render(<CommonButton onPress={onPress} text={title} />);
  fireEvent.press(screen.getByText(title));
  expect(onPress).toHaveBeenCalled();
});