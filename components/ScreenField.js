import React, {Component} from 'react'
import InputField from './fields/InputField'
import LabelField from './fields/LabelField'
import RadioField from './fields/RadioField'

class ScreenField extends Component {
    constructor() {
        super()
        this.bindNewState = this.bindNewState.bind(this)
    }
    bindNewState(name, newState) {
        this.props.handleStateChange(newState);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps;
    }
    render() {
        return (
            <span>
                <InputField screenField={this.props.screenField} handleStateChange={(newState) => this.bindNewState(this.props.screenField.name, newState)}/>
                <LabelField screenField={this.props.screenField} handleStateChange={(newState) => this.bindNewState(this.props.screenField.name, newState)}/>
                <RadioField screenField={this.props.screenField} handleStateChange={(newState) => this.bindNewState(this.props.screenField.name, newState)}/>
            </span>
        )
    }
}

export default ScreenField
