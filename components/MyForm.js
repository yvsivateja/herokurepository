import React, {Component} from 'react'
import InputField from './fields/InputField'
import LabelField from './fields/LabelField'
import RadioField from './fields/RadioField'
import HiddenField from './fields/HiddenField'
import MyButton from './fields/MyButton'

class MyForm extends Component {
    constructor(props, context) {
        super(props, context)
    }
    bindNewState(newState) {
        this.setState(newState)
    }
    formSubmitHandler(event) {
        event.preventDefault();
        this.props.actions.reloadJSONSchema(this.state);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps;
    }
    render() {
        return (
            <form className="form-horizontal" onSubmit={this.formSubmitHandler.bind(this)}>
                <fieldset>
                    <legend>{this.props.myform.flowLabel}</legend>
                    {this.props.myform.screenFields.map((screenField, index) => {
                        return (
                            <span key={index}>
                                {screenField.fieldType === 'INPUT' && screenField.dataType !== 'HIDDEN'
                                    ? <InputField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                                    : null}
                                {screenField.fieldType === 'INPUT' && screenField.dataType === 'HIDDEN'
                                    ? <HiddenField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                                    : null}
                                {screenField.fieldType === 'DISPLAY_TEXT'
                                    ? <LabelField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                                    : null}
                                {screenField.fieldType === 'RADIO_BUTTONS'
                                    ? <RadioField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                                    : null}
                            </span>
                        )
                    })}
                    {this.props.myform.availableActions
                        ? <MyButton myform={this.props.myform}/>
                        : null}
                </fieldset>
            </form>
        )
    }
}

export default MyForm
