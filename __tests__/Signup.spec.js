import React from 'react'
import {render} from '@testing-library/react-native'
import Signup from '../src/screens/signup'

describe("Signup", () => {
  it("renders the correct message", () => {
    const { queryByText } = render(<Signup />);
    expect(queryByText('pawsitively')).not.toBeNull();
  });
});