import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import CommonTextInput from '../src/Components/CommonTextInput/CommonTextInput';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {
  toBeEmptyElement,
  toHaveTextContent,
} from '@testing-library/jest-native';

expect.extend({toBeEmptyElement, toHaveTextContent});

const onChangeText = jest.fn();
const validationError = 'Test Error';
const userInput = 'Test';

it('CommonTextInput Snapshot Matching', () => {
  const tree = renderer
    .create(
      <CommonTextInput
        placeholder=""
        value=""
        onChangeText={() => {}}
        validationError=""
        secureTextEntry={false}
        showHeading={false}
        editable={false}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('CommonTextInput editable Prop working ', async () => {
  render(
    <CommonTextInput
      testID="test-input"
      placeholder=""
      value=""
      onChangeText={onChangeText}
      validationError=""
      secureTextEntry={false}
      showHeading={false}
      editable={false}
    />,
  );
  fireEvent.changeText(screen.getByTestId('test-input'), userInput + '2');
  expect(onChangeText).not.toHaveBeenCalled();
});
it('CommonTextInput onChangeText Prop working ', async () => {
  render(
    <CommonTextInput
      testID="test-input"
      placeholder=""
      value=""
      onChangeText={onChangeText}
      validationError=""
      secureTextEntry={false}
      showHeading={false}
      editable={true}
    />,
  );
  fireEvent.changeText(screen.getByTestId('test-input'), userInput + '1');
  expect(onChangeText).toHaveBeenCalled();
});
it('CommonTextInput validationError Prop working ', async () => {
  render(
    <CommonTextInput
      testID="test-input"
      placeholder=""
      value=""
      onChangeText={onChangeText}
      validationError={validationError}
      secureTextEntry={false}
      showHeading={false}
      editable={true}
    />,
  );
  const err = await screen.findByTestId('test-input-error');
  expect(err).toHaveTextContent(validationError);
});
