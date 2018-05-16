import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from 'react-loader';

/**
 * Function that renders the <VisionLoader> compoment of the <ReactApp> component.
 *
 * @export {function} VisionLoader
 * @param {Object} props - passed down to the component by its parent.
 * @returns {ReactElement} markup
 */
export function VisionLoader(props) {
    return (
        <Loader
            loaded={props.isFullyLoadedState  && props.isInitLanguageDone}
            color="#fff"
            lines={10}
            length={20}
            width={7}
        >
            {props.children}
        </Loader>
    );
}

VisionLoader.propTypes = {
    isFullyLoadedState: PropTypes.bool,
    isInitLanguageDone: PropTypes.bool,
    children: PropTypes.element
};

/**
 * Container part of the <VisionLoader> component
 *
 * Function that tells how to transform the current Redux store
 * state into props for the presentational component
 *
 * @param {Object} state - current state of the Application
 * @returns {Object} containing the props to be used in the presentational component
 */
export const mapStateToProps = (state) => {
    return {
        isFullyLoadedState: state.App.isFullyLoaded
    };
};

export default connect(
    mapStateToProps,
    null
)(VisionLoader);
