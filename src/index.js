import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

//导入样式
import 'bootstrap/dist/css/bootstrap.css';
import './static/less/todo.less';

//导入component
import Head from "./component/Head";
import Body from "./component/Body";
import Footer from "./component/Footer";

render(
    <Provider store={store}>
        <main className={'panel panel-default'}>
            <Head/>
            <Body/>
            <Footer/>
        </main>
    </Provider>, window.root);