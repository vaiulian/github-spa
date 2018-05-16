/* global jest */

import axios from 'axios';
import { gotCurrentLicenseAction, requestCurrentLicenseAction, getCurrentLicenseAction } from './../LicenseActions';

describe('License Actions', () => {
  it('requestCurrentLicenseAction should create REQUEST_CURRENT_LICENSE action', () => {
    expect(requestCurrentLicenseAction()).toEqual({ type: 'REQUEST_CURRENT_LICENSE' });
  });

  it('gotCurrentLicenseAction should create GOT_CURRENT_LICENSE action with some data', () => {
    expect(gotCurrentLicenseAction({ some: 'data' })).toEqual({ type: 'GOT_CURRENT_LICENSE', license: { some: 'data' } });
  });

  describe('Async', () => {
    it('getCurrentLicenseAction should create action GOT_CURRENT_LICENSE and some data', async () => {
      const expected = { type: 'GOT_CURRENT_LICENSE', license: { some: 'data' } };

      // mock the axios.get method, so it will just resolve the Promise.
      axios.get = jest.fn(() => Promise.resolve({ data: { some: 'data' } }));
      // mock the dispatch functions from Redux thunk.
      const dispatch = jest.fn();

      await getCurrentLicenseAction()(dispatch);
      expect(dispatch.mock.calls[1][0]).toEqual(expected);
    });

    it('getCurrentLicenseAction should create action GOT_CURRENT_USER and SOME_ERROR', async () => {
      const expected = { type: 'GOT_CURRENT_LICENSE', license: 'SOME_ERROR' };

      // mock the axios.get method, so it will just resolve the Promise.
      axios.get = jest.fn(() => new Promise((resolve, reject) => {
        setTimeout(() => {
          reject();
        }, 100);
      }));
      // mock the dispatch functions from Redux thunk.
      const dispatch = jest.fn();

      await getCurrentLicenseAction()(dispatch);
      expect(dispatch.mock.calls[1][0]).toEqual(expected);
    });
  });
});
