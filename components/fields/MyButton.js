import React, {Component} from 'react'

class MyButton extends Component {
    render() {
        return (this.props.myform.availableActions.length>0
            ? (
                <div className="form-group">
                    <label className="col-md-4 control-label"
                      htmlFor={this.props.myform.availableActions[0].label}></label>
                    <div className="col-md-4">
                        <button type='submit' id={this.props.myform.availableActions[0].label}
                          className="btn btn-primary">
                            {this.props.myform.availableActions[0].label}
                        </button>
                    </div>
                </div>
            )
            : null)
    }
}

export default MyButton
