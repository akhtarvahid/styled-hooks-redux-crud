import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

test('should render App Component', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
