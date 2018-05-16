import reducer, { initialState } from './../LicenseReducer';
import { gotCurrentLicenseAction } from './../LicenseActions';


describe('LicenseReducer', () => {
  it('should return the initial state', () => {
    /* eslint-disable no-undefined */
    expect(reducer(undefined, {})).toEqual(initialState);
    /* eslint-enable */
  });

  it('should handle GOT_CURRENT_LICENSE', () => {
    const actualState = reducer({
      isFullyLoaded: false,
      currentLicense: {},
    }, gotCurrentLicenseAction({ some: 'data' }));

    const expectedState = {
      isFullyLoaded: true,
      currentLicense: { some: 'data' },
    };

    // should have the same value
    expect(actualState).toEqual(expectedState);
    // but different references
    expect(actualState).not.toBe(expectedState);
  });
});
