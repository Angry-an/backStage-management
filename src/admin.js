import React from 'react';
import { Row,Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import Navleft from './components/navLeft'
import './test.less'
import './style/common.less'

export default class Admin extends React.Component{
    render(){
        return (
           <Row className="container">
               <Col span='3' className='nav-left'>
                    <Navleft />
               </Col>
               <Col span='21' className='main'>
                    <Header></Header>
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
               </Col>
           </Row>
        )
    }
    
}