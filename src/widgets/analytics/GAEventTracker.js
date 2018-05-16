/* eslint no-unused-vars: 0 */

/**
 * Simple Middleware
 *
 * @param {any} store - current Redux store
 * @returns {function} callback
 */
const incrementMiddleware = store => next => action => {
    if (action.type === 'INCREMENT') {
        alert('Increment button was clicked, current state ist');
    }
    next(action);
};


/**
 * Simple Middleware
 *
 * @param {Object} eventTracker -
 * @returns {function} callback
 */
function trackerMiddleware(eventTracker) {
    return store => next => action => {
        eventTracker.trackEvent(action.type);

        return next(action);
    };
}

export default incrementMiddleware;
