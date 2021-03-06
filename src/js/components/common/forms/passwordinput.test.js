import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './passwordinput';

describe('PasswordInput Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PasswordInput attachToForm={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
