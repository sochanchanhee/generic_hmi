import { connect } from 'react-redux'
import AppName from '../AppName'
import '../polyfill_find'

const mapStateToProps = (state) => {
    var activeApp = state.activeApp
    var app = state.appList.find((app) => {
        return app.appID === activeApp
    })
    console.log(activeApp);
    var name = (activeApp && app) ? app.appName : "Apps"
    return {name: name}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const Name = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppName)

export default Name