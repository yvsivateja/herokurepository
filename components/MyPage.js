import React, {Component} from 'react'
import MyForm from './MyForm'

class MyPage extends Component {
    constructor(props, context) {
        super(props, context)
    }
    componentDidMount() {
       this.props.actions.loadInitialJSONSchema();
    }
    render() {
        return (this.props.formSchema && this.props.formSchema[0]
            ? <MyForm myform={this.props.formSchema[0]} actions={this.props.actions}/>
            : <p>
                Page not rendered!!!
            </p>)
    }
}

export default MyPage
