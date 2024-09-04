jest.mock('@react-navigation/stack', () => ({
    useHeaderHeight: () => 0,
  }));