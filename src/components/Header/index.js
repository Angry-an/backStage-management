import React from 'react';
import { Row , Col} from 'antd';
import './index.less';
import until from './../../utils/util';
import axios from './../../axios/index'
export default class Header extends React.Component{
    state ={
        systemTime:until.analysisTime(new Date()),
        weather:'晴',
        dayPictureUrl:''
    }
    componentWillMount(){
        this.setState({
            userName:'钱帅帅'
        })
        setInterval(() => {
            this.setState({
                systemTime:until.analysisTime(new Date())
            })  
        }, 1000);
        this.getWeatherAPI();

    }
    getWeatherAPI(){
        let city = '杭州';
        axios.json({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status === 'success'){
                let weather = res.results[0].weather_data[0].weather;
                let weatherPic = res.results[0].weather_data[0].dayPictureUrl;
                this.setState({
                    weather:weather,
                    dayPictureUrl:weatherPic
                })
            }
        })
    }
    
    render(){
        const menuType = this.props.menuType;
        return(
            <div className="header">
            {
                menuType?'':
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#" style={{marginLeft:"6px"}}>退出</a>
                    </Col>
                </Row>
            }
                
                <Row className="weatherTime">
                    <Col span="4" className="navTit">首页</Col>
                    <Col span="20" className="time"><span>{this.state.systemTime}</span><img className="weatherImg" alt="" src={this.state.dayPictureUrl}/> <span></span><span>{this.state.weather}</span></Col>
                </Row>
            </div>
            
        )
    }
}