import React, {Component} from 'react'

class RadioField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            [this.props.screenField.name]: this.props.screenField.value
        };
    }
    shouldComponentUpdate(nextProps, nextState){
      this.props.handleStateChange(nextState);
      return true
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
          <div className='form-group'>
                    <label className='col-md-4 control-label'>
                        <span>{this.props.screenField.label}</span>
                    </label>
                    <div className="col-md-4">
                        {this.props.screenField.choices.map((choiceField, index) => {
                            return (
                                <label key={index} className='radio-inline'
                                  htmlFor={choiceField.name}>
                                    <input type="radio"
                                      name={this.props.screenField.name}
                                      checked={this.state[this.props.screenField.name] === choiceField.name}
                                      id={choiceField.name}
                                      onChange={this.onChange.bind(this)}
                                      value={choiceField.name}/>
                                    {choiceField.label}
                                </label>
                            )
                        })}
                    </div>
                </div>
            )
    }
}

export default RadioField
