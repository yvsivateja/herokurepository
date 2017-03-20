import React, {Component} from 'react'

class InputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            [this.props.screenField.name]: this.props.screenField.value
        };
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        this.props.handleStateChange(nextState);
        return true;
    }
    render() {
        return (<div className='form-group'>
                    {this.props.screenField.label !== ""
                        ? <label className="col-md-4 control-label" htmlFor={this.props.screenField.name}>
                                {this.props.screenField.label}</label>
                        : ''}
                    <div className="col-md-4">
                        <input type={this.props.screenField.dataType === 'BOOLEAN'
                            ? 'checkbox'
                            : this.props.screenField.dataType}
                            name={this.props.screenField.name}
                            id={this.props.screenField.name}
                            placeholder={this.props.screenField.helpText}
                            required={this.props.screenField.isRequired}
                            value={this.state[this.props.screenField.name]}
                            className={this.props.screenField.dataType !== 'BOOLEAN'
                            ? 'form-control input-md'
                            : this.props.screenField.dataType}
                            onChange={this.onChange.bind(this)}/>
                          {this.props.screenField.errorMessages?
                            this.props.screenField.errorMessages.map((errorMessage, index) =>{
                              return <small key={index} className="error-message"> {errorMessage.error_msg} </small>
                            }):null
                          }
                    </div>
                </div>
            )
    }
}

export default InputField
