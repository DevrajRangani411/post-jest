import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SharedButton extends Component {

    submitEvent(res){
        if(this.props.emitEvent){
            this.props.emitEvent(res);
        }
    }

    render(){
        const { buttonText, buttonStyle } = this.props;

        return(
            <button className={`btn ${buttonStyle}`} onClick={() => this.submitEvent()} data-test="buttonComponent">
                {buttonText}
            </button>
        );
    }
}

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    buttonStyle:PropTypes.string,
    emitEvent: PropTypes.func
};

export default SharedButton;