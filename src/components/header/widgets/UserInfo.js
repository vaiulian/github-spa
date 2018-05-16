import React from 'react';
import PropTypes from 'prop-types';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import { Link } from 'react-router-dom';

/**
 * Function that renders the <UserInfo> compoment of the <ReactApp> inside the <Header> component.
 *
 * @export {Class} UserInfo
 * @class UserInfo
 * @extends {React.Component}
 */
export default class UserInfo extends React.Component {

    /**
     * Creates an instance of UserInfo.
     * @param {any} props -
     * @memberof UserInfo
     */
    constructor(props) {
        super(props);

        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);

        this.state = {
            open: false
        };
    }

    /**
     * Function that opens the Popover and sets the anchor element.
     *
     * @param {any} event -
     * @returns {void}
     * @memberof UserInfo
     */
    handleTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    }

    /**
    * Callback function that closes the Popover.
    *
    * @returns {void}
    * @memberof UserInfo
    */
    handleRequestClose() {
        this.setState({
            open: false
        });
    }

    /**
     * Render function of <UserInfo>
     *
     * @returns {ReactElement} UserInfo
     * @memberof UserInfo
     */
    render() {
        return (
            <div className="visionMemu-userinfo" onMouseEnter={this.handleTouchTap}>
                <p style={{ margin: 0 }} onClick={this.handleTouchTap}>
                    {this.props.currentUserState.name}&ensp;
                    {this.props.currentUserState.lastname}
                </p>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        <MenuItem onTouchTap={this.handleRequestClose}>
                            <Link className="visionMemu-dropItems" to="/profile">Profile</Link>
                        </MenuItem>
                        <MenuItem primaryText="Sign out" onTouchTap={this.props.logOutCurrentUserActionState}/>
                    </Menu>
                </Popover>
            </div>
        );
    }
}

UserInfo.propTypes = {
    currentUserState: PropTypes.object,
    logOutCurrentUserActionState: PropTypes.func
};

