import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action'

class Footer extends React.Component{
    constructor(props) {
        super(props);
        //自己构建展示按钮的数据
        this.showData = [
            {text:'全部', flag:'all'},
            {text:'已完成', flag:'complete'},
            {text:'未完成', flag:'uncomplete'}
        ]
    }

    render() {
        let {flag} = this.props;
        return <div className={'panel-footer'}>
           <ul className={'nav nav-pills'} onClick={this.updateFilter}>
               {
                   this.showData.map((item, index) => {
                       let {text, flag:itemFlag} = item;
                       return <li key={index} className={itemFlag === flag ? 'presentation active' : 'presentation'}>
                           <a href="javascript:;" flag={itemFlag}>{text}</a>
                       </li>;
                   })
               }
           </ul>
        </div>;
    }

    //事件委托
    updateFilter = ev => {
        let target = ev.target,
            tarTag = target.tagName;
        //合并事件源"事件源是LI，也让其变为里面的A
        if(tarTag === 'LI') {
            target = target.firstElementChild;
            tarTag = target.tagName;
        }
        if(tarTag === 'A') {
            let text = target.getAttribute('flag');
            switch (target.innerHTML) {
                case '已完成' :
                    text = 'complete';
                    break;
                case '未完成' :
                    text = 'uncomplete';
                    break;
            }
            if(this.props.flag  === text) return;
            this.props.filter(text);
        }
    }
}
export default connect(state=>({...state.todo}), action.todo)(Footer);