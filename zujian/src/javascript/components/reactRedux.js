import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

class ReactRedux extends Component {
    render() {
        const {PayUp, PayDown} = this.props;
        return (
            <div className={'demo'}>
                <div className={'demo'}>
                    <h2> number----{this.props.tiger}</h2>
                    <button onClick={PayDown}>-----</button>
                    <button onClick={PayUp}>+++++</button>
                </div>
            </div>
        );
    }
}

// jdp()
// {
//     return 11
// }


//
// const tiger=10000
//
// //action
// const upupup={
//     type:'increasr'
// };
// const downdown={
//     type:'decrease'
// };
//
//
// //reducer
// const reducer=(state=tiger,action)=>{
//     switch (action.type) {
//         case 'increasr':
//             return state += 666;
//         case 'decrease':
//             return state -=666;
//         default:
//             return state;
//
//     }
// }
//
// //创建store
// const store=createStore(reducer);

//需要渲染什么数据
function mapStateToProps(state) {
    return {
        tiger: state
    }
}

//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        PayUp: () => dispatch({type: 'increasr'}),
        PayDown: () => dispatch({type: 'decrease'})
    }
}

ReactRedux = connect(mapStateToProps, mapDispatchToProps)(ReactRedux)

export default ReactRedux;