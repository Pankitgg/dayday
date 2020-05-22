import Xiangqing from "./javascript/components/xiangqing";

console.log("气候很好")


//{并无作用可删除👇
//导入，接收的成员名，必须这么写
//import React from 'react' //组件，虚拟dom，生命周期
//组件，虚拟dom放到页面上
//
// //react过程 : 1.导入包 2.创建虚拟dom对象（类型，属性，子节点）3.render方法渲染到容器
//
// const myh1=React.createElement('h1',null,'只是h1')
// //const mydiv=React.createElement('div',null,'111',myh1)
//
// //默认不能写html，使用babel转换转换标签
//
// //bable插件安装
//
// const mydiv = <div id='mydiv' title="divqqq"><button>111</button>kkkkk</div> //jsx语法写法等同react.createelement
//
// ReactDOM.render(mydiv,document.getElementById("app"))//
//
//
//
// //map,function,数组输入
// const strarrtest=['lali','jkas','moree','sadq']
//
// //react需要把key添加给foreach或map或for循环直接控制的元素
// function div2(x){return (<div key={x}><hr/>
//                     <div id='mydiv' title="渲染">
//                         <button >按钮</button>测试</div>
//                         <div>{x}</div>
//
//     <p className="nn"/>
//             </div>)}
//
// ReactDOM.render(strarrtest.map(x=>{return div2(x)}),document.getElementById("nn"))//map 中写return
// //ReactDOM.render(strarrtest.map(x=>div2(x)),document.getElementById("nnn"))//.map
//
// //为防止歧义class=>classname,for=>htmlfor
//
// //创建组件
// //1.function
// function Hello(props) {
//     return <div>hellozujian---{props.name}</div>//组件必须返回一个jsx渲染的dom元素,大写
// }
// const ppp={
//     name:'pig',
//     age:'22'
// }
// ReactDOM.render(
//     <div>
//         {Hello(ppp)}
//         <Hello name="dddd"></Hello>
//         <Hello {...ppp}/>//...展开运算符 es6
//     </div>
//     ,
//     document.getElementById("nnn")
// )
//
// //画图
// import dd from './javascript/antview.js'
// {dd()}
//
//
// //ajax
// import  {fetchEventchar} from './javascript/service/service.js'
// fetchEventchar("123123").then(console.log('ok'))

import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import ReactDOM from 'react-dom'

import React, {Component} from 'react';
import {BrowserRouter} from 'react-router'
import Char from "./javascript/components/char";
import ReactRedux from "./javascript/components/reactRedux";
import Person from "./javascript/components/person";
import './css/antd.css'
import Tututu from "./javascript/components/tututu";
import Timetool from "./javascript/components/timetool";

class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // return (<div><Person></Person>
        //         <div><Tututu></Tututu></div>
        return (<div>
                {/*<Lay*/}
                <Timetool/>
                <Provider store={store}>
                    <ReactRedux/>
                    <button>hhj</button>
                    <Xiangqing></Xiangqing>
                        <Char></Char></Provider>

            </div>
        );
    }
}

//创建action事件
const upupup = {
    type: 'increasr',
    text: '增加'
};
const downdown = {
    type: 'decrease',
    text: '减少'
};

const tiger = 10000
//创建reducer用于改变state
const reducer = (state = tiger, action) => {
    switch (action.type) {
        case 'increasr':
            return state += 666;
        case 'decrease':
            return state -= 666;
        default:
            return state;

    }
}

//创建store用于存储值

const store = createStore(reducer);


ReactDOM.render(<Index></Index>, document.getElementById("app"))//

