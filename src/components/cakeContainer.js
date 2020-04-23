import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
function cakeContainer(props) {
    return (
        <div>
            <h2>Num of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}
const mapStateProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }

}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(
    mapStateProps,
    mapDispatchToProps
)(cakeContainer);
