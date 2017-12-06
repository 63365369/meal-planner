import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe , removeFromCalendar} from '../actions'

class App extends Component {
    doThing = ()=>{
        this.props.selectRecipe({})
    }
    render() {
        console.log('Props',this.props)
        return (
            <div>
                hello world
            </div>
        )
    }
}

function mapStateToProps({food,calendar}) {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    return {
        calendar: dayOrder.map((day) => ({
            day,
            meals: Object.assign({}, food[calendar[day]])
        })),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectRecipe: (data) => dispatch(addRecipe(data)),
        remove: (data) => dispatch(removeFromCalendar(data))
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(App)