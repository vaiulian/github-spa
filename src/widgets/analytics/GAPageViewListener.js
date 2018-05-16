import { Component } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

/**
 * High Order Component that wraps different components and sends pageViews to
 * GAnalytics using the ReactGA module.
 *
 * Use like <HOC><Component/></HOC>
 *
 * @export
 * @class GAPageViewListener
 * @extends {Component}
 */
export default class GAPageViewListener extends Component {
    static contextTypes = {
        router: PropTypes.object,
        children: PropTypes.element
    };

    /**
     * Lifecycle method.
     * Calls sendPageView the first time the component mounts into DOOM.
     * Listens on router.history and triggers sendPageView on every change.
     *
     * @memberof GAPageViewListener
     * @returns {void}
     */
    componentDidMount() {
        this.sendPageView(this.context.router.history.location);
        this.context.router.history.listen(this.sendPageView);
    }

    /**
     * Function that uses ReactGa module to send page views to GAnalytics.
     *
     * @param {String} location - current url location.
     * @memberof GAPageViewListener
     * @returns {void}
     */
    sendPageView(location) {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    }

    /**
     * Render function of GAPageViewListener
     *
     * @returns {ReactElement} markup
     * @memberof GAPageViewListener
     */
    render() {
        return this.props.children;
    }
}

GAPageViewListener.propTypes = {
    router: PropTypes.object,
    children: PropTypes.object
};
