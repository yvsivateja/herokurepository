import React, {Component} from 'react'

class LabelField extends Component {
    render() {
        return (
          <div className='form-group'>
                    <label className='col-md-8 control-label'>{this.props.screenField.label}</label>
                </div>
            )
    }
}

export default LabelField
