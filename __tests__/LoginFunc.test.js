import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';
import {screen, fireEvent, render} from '@testing-library/react-native';
// Note: test renderer must be required after react-native.
import {Login} from '../src/Screen';
// import {render} from '../test-utils';
import strings from '../src/constants/lang';
import '@testing-library/jest-native/extend-expect';
import {
  toBeEmptyElement,
  toHaveTextContent,
} from '@testing-library/jest-native';

expect.extend({toBeEmptyElement, toHaveTextContent});

it('userId Validation failed', async () => {
  const userInput = '';

  render(<Login />);

  fireEvent.changeText(screen.getByTestId('email-input'), userInput);
  fireEvent.press(screen.getByText(strings.LOGIN));

  // Using `findBy` query to wait for asynchronous operation to finish
  const errMsg = await screen.findByTestId('email-input-error');

  // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
  expect(errMsg).toHaveTextContent(strings.PLEASE_ENTER_A_VALID_EMAIL);
});
it('userId Validation passed', async () => {
  const userInput = 'asdfasd';

  render(<Login />);

  fireEvent.changeText(screen.getByTestId('email-input'), userInput);
  fireEvent.press(screen.getByText(strings.LOGIN));

  // Using `findBy` query to wait for asynchronous operation to finish
  const errMsg = await screen.findByTestId('email-input-error');

  // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
  expect(errMsg).toHaveTextContent('');
});
it('password Validation passed', async () => {
  const userInput = 'password';
  render(<Login />);
  fireEvent.changeText(screen.getByTestId('password-input'), userInput);
  fireEvent.press(screen.getByText(strings.LOGIN));
  const errMsg = await screen.findByTestId('password-input-error');
  expect(errMsg).toHaveTextContent('');
});
it('password Validation failed', async () => {
  const userInput = '';
  render(<Login />);
  fireEvent.changeText(screen.getByTestId('password-input'), userInput);
  fireEvent.press(screen.getByText(strings.LOGIN));
  const errMsg = await screen.findByTestId('password-input-error');
  expect(errMsg).toHaveTextContent(strings.PLEASE_ENTER_A_VALID_PASSWORD);
});
