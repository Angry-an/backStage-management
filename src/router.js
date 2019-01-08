import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import Admin from './admin'
import Login from './pages/login'
import Button from './pages/ui/button'
import Nomatch from './pages/nomatch/index'
import Home from './pages/home/index'
import Modals from './../src/pages/ui/modals'
import Loadings from './pages/ui/loading'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/message.js'
import Tabs from './pages/ui/tabs'
import LoginForm from './pages/form/loginForm'
import RegisterForm from './pages/form/registerForm'
import BasicTable from './pages/table/basicTbable'
import HightTable from './pages/table/hightTable'
import Order from './pages/order/index'
import Common from './common'
import OrderDetail from './pages/order/orderDetail'
export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>   
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/ui/buttons' component={Button}></Route>
                                <Route path='/admin/ui/modals' component={Modals}></Route>
                                <Route path='/admin/ui/loadings' component={Loadings}></Route>
                                <Route path='/admin/ui/notification' component={Notice}></Route>
                                <Route path='/admin/ui/messages' component={Messages}></Route>
                                <Route path='/admin/ui/tabs' component={Tabs}></Route>
                                <Route path='/admin/form/formLogin' component={LoginForm}></Route>
                                <Route path='/admin/form/register' component={RegisterForm}></Route>
                                <Route path='/admin/table/baseTables' component={BasicTable}></Route>
                                <Route path='/admin/table/highTables' component={HightTable}></Route>
                                <Route path='/admin/order' component={Order}></Route>                                                     
                                <Route component=  {Nomatch} />
                            </Switch>   
                        </Admin>
                    }>

                    </Route>
                    <Route path="/common" render={()=>
                        <Common>
                             <Switch>   
                                <Route path='/common/order/detail/:orderId' component={OrderDetail}></Route>                                              
                                <Route component=  {Nomatch} />
                            </Switch>   
                           
                        </Common>
                    }>                      
                    </Route>
                    {/* <Route path="/login" component = {Login}></Route> */}
                </App>
            </HashRouter>
        )
    }
}