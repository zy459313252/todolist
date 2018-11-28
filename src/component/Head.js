import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action'

//1.先在action-types中定义一个行为标识
//2.行为标识定义完，在action对应每个模块中写一个方法用来行为派发，派发什么信息进去，就是通过传递的参数来规划的
//3.在组件中调取方法执行，并将行为标识和传递的信息都传递给reducer
//4.在reducer中通过行为标识，通过传递过来的信息，该怎么改状态怎么改状态
class Head extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        //筛选未完成的任务数量
        let {data} = this.props,
            len = data.filter(item => (parseFloat(item['state']) === 0)).length;
        return <div className={'panel-heading'}>
            <h3 className={'panel-title'}>
                任务列表 [ 当前未完成的任务数 <span>{len}</span> ]
            </h3>
            <input type="text"
                   className={'form-control'}
                   placeholder={'please enter the tasks to be complete'}
                   onKeyUp={this.keyUP}
            />

        </div>;
    }

    //向redux中追加一条新的任务
    keyUP = ev => {
        //enter
        if(ev.keyCode === 13){
            let value = ev.target.value.trim();//trim：去除空格
            if(value.length === 0) return;
            this.props.add({
                name: value,
                state: 0
            });
            ev.target.value = '';
        }
    };
}
export default connect(state=>({...state.todo}), action.todo)(Head);