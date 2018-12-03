import React from "react";
import './index.less'
export default class Home extends React.Component{
    render(){
        return (
            <div className="home-wrap">
                <div>
                    <p style={{"textAlign":"center"}}>基于react后台管理系统</p>
                    <p style={{"textAlign":"center"}}>(react + adnt + redux + webpack + react-router + ES6/7/8 + echarts)</p>
                </div>
               
            </div>
        )
    }
}