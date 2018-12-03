import React from 'react';
import { Card , Button , message} from 'antd';
import './ui.less'
export default class Messages extends React.Component{
    handleMessage = (type)=>{
       message[type]("恭喜发财")
    }
    render(){
        return (
            <div>
                <Card title="全局message">
                    <Button type="primary" onClick={()=>this.handleMessage("success")}>success</Button>
                    <Button type="primary" onClick={()=>this.handleMessage("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.handleMessage("warning")}>warning</Button>
                    <Button type="primary" onClick={()=>this.handleMessage("error")}>Error</Button>
                    <Button type="primary" onClick={()=>this.handleMessage("loading")}>Loading</Button>
                </Card> 
               
            </div>
        )
    }
}