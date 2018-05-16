import ReactGA from 'react-ga';

/**
 * Module that provides Google Analytics functionality.
 * @class
 */
export function GAEvents() {

    /**
	 * Create an event based on name and its category
	 *
	 * @param {String} category - category of the event
	 * @param {String} action - action describing the event
	 * @returns {Object} - the created event object
	 */
    this.createEvent = function(category, action) {
        return { category, action };
    };

    /**
	 * Send event to GA
	 *
	 * @param {Object} event - the event to send. This event is created by createEvent function.
	 * @return {void}
	 */
    this.sendEvent = function(event) {
        ReactGA.event(event);
    };

    // ------------------------------------------------------------------------------------
    // Events for Navigation
    // ------------------------------------------------------------------------------------
    this.CATEGORY_NAVIGATION = 'NAVIGATION';
    this.OPEN_MENU = this.createEvent(this.CATEGORY_NAVIGATION, 'Open Menu');
    this.CLOSE_MENU = this.createEvent(this.CATEGORY_NAVIGATION, 'Close Menu');

    // ------------------------------------------------------------------------------------
    // Events for Server API
    // ------------------------------------------------------------------------------------
    this.CATEGORY_API = 'API';
    this.REQUEST_CURRENT_USER = this.createEvent(this.CATEGORY_API, 'Request current logged in user');
    this.GOT_CURRENT_USER = this.createEvent(this.CATEGORY_API, 'Got current logged in user');

    // ------------------------------------------------------------------------------------
    // Events for User Actions
    // ------------------------------------------------------------------------------------
    this.CATEGORY_ACTIONS = 'ACTIONS';
    this.LOG_OUT_USER = this.createEvent(this.CATEGORY_ACTIONS, 'Logout current user');

}

const GAEvent = new GAEvents();

export default GAEvent;
