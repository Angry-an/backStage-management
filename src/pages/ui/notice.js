import React from 'react';
import { Card , Button , notification} from 'antd';
import './ui.less'
export default class Notice extends React.Component{
    handleTell = (type,direction)=>{
        if(direction){
            notification.config({
                placement:direction
            })
        }
        notification[type]({
            message:"发工资了老弟",
            description:'你猜猜有多厚'
        })
    }
    render(){
        return (
            <div>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={()=>this.handleTell("success")}>success</Button>
                    <Button type="primary" onClick={()=>this.handleTell("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.handleTell("warning")}>warning</Button>
                    <Button type="primary" onClick={()=>this.handleTell("error")}>Error</Button>
                </Card> 
                <Card title="通知提醒框(控制方向)">
                    <Button type="primary" onClick={()=>this.handleTell("success","topLeft")}>success</Button>
                    <Button type="primary" onClick={()=>this.handleTell("info","topRight")}>info</Button>
                    <Button type="primary" onClick={()=>this.handleTell("warning","bottomLeft")}>warning</Button>
                    <Button type="primary" onClick={()=>this.handleTell("error","bottomRight")}>Error</Button>
                </Card>
            </div>
        )
    }
}