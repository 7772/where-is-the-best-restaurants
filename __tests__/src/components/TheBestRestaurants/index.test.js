import React from 'react';
import renderer from 'react-test-renderer';

console.error = jest.fn();

describe('TheBestRestaurants', () => {
  let TheBestRestaurants;

  beforeEach(() => {
    TheBestRestaurants = require('../../../../src/components/TheBestRestaurants').default;
  });

  it('렌더링 시킬 수 있다.', () => {
    // Given

    // When
    const json = renderer.create(<TheBestRestaurants />).toJSON();

    // Then
    expect(json).toMatchSnapshot();
  });

});

