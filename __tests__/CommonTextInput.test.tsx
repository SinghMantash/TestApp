import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import CommonTextInput from '../src/Components/CommonTextInput/CommonTextInput';

it('renders correctly', () => {
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
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
