import {render} from '@testing-library/react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import store from './src/redux/store';
const AllTheProviders = ({children}) => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      {children}
       </SafeAreaProvider>
     </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react-native'

// override render method
export {customRender as render}