import React, {Component} from 'react'
import MyPage from './MyPage'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../actions/formActions'

class App extends Component {
    render() {
        return (
            <div className="main-content">
                <MyPage formSchema={this.props.formSchema} actions={this.props.actions}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
