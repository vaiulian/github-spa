/* global jest */

import GAEvent from '../GAEvents';
import ReactGA from 'react-ga';

describe('GAEvent module', function() {

    beforeEach(function() {

        this.ReactGASpy = jest.spyOn(ReactGA, 'event');

    });

    it('createEvent function creates an event', function() {

        var event = GAEvent.createEvent('CAT', 'ACTION');
        var expectedEvent = { category: 'CAT', action: 'ACTION' };

        expect(event).toEqual(expectedEvent);

    });

    it('sendEvent function calls ReactGA.event', function() {

        var event = { category: 'CAT', action: 'SEND_ACTION' };
        GAEvent.sendEvent(event);

        expect(ReactGA.event).toHaveBeenCalledWith(event);

    });
});
