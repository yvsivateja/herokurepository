import React, {Component} from 'react'

class HiddenField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            [this.props.screenField.name]: this.props.screenField.value
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            [nextProps.screenField.name]: nextProps.screenField.value
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        this.props.handleStateChange(nextState);
        return false;
    }
    componentDidMount() { // to load hidden fields
        this.props.handleStateChange(this.state);
    }
    render() {
        return (
          <input type={this.props.screenField.dataType} name={this.props.screenField.name}
            value={this.props.screenField.value} readOnly/>
        )
    }
}

export default HiddenField
