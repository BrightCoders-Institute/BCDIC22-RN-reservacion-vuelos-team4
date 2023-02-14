import React from 'react';
import { render } from '@testing-library/react-native';
import Button from '../../components/Button';

let component;

describe('Button component', () => {
  beforeEach(() => {
    component = render(<Button />);
  });

  it('The Button is rendered in the application', () => {
    expect(component).toBeDefined();
  });
});
