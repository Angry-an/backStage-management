import React from 'react';
import { Card , Button , Modal} from 'antd';
import './ui.less'
export default class Modals extends React.Component{
    state ={
        showmodel1:false,
        showmodel2:false,
        showmodel3:false,
        showmodel4:false,
    }
    handleModal = (type)=>{
        this.setState({
            [type]:true
        })
    }
    handleConfirm = (type) =>{
        Modal.confirm({
            title :"确认？",
            content : "学会了确认窗了吗？",
            onOk(){
                alert('ok')
            },
            onCancel(){
                alert('cancel')
            }
        })
    }
    render(){
        return (
            <div>
                <Card title="自定义弹窗">
                    <Button type="primary" onClick={()=>this.handleModal("showmodel1")}>open</Button>
                    <Button type="primary" onClick={()=>this.handleModal("showmodel2")}>open</Button>
                    <Button type="primary" onClick={()=>this.handleModal("showmodel3")}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleModal("showmodel4")}>垂直居中</Button>  
                </Card>
                <br />
                <Card title="信息确认窗">
                    <Button type="primary" onClick={this.handleConfirm}>confirm</Button>
                </Card>



                <Modal title = "react"
                    visible={this.state.showmodel1}
                    onCancel ={()=>{
                        this.setState({
                            showmodel1:false
                        })
                    }}
                >
                react
                </Modal>
                <Modal title = "测试"
                    visible={this.state.showmodel2}
                    onCancel ={()=>{
                        this.setState({
                            showmodel2:false
                        })
                    }}
                
                >
                测试
                </Modal>


                <Modal title = "自定义"
                    visible={this.state.showmodel3}
                    onCancel ={()=>{
                        this.setState({
                            showmodel3:false
                        })
                    }}
                    okText = "下一步"
                    cancelText = "算了"
                
                >
                自定义
                </Modal>

                 <Modal title = "垂直居中"
                    visible={this.state.showmodel4}
                    onCancel ={()=>{
                        this.setState({
                            showmodel4:false
                        })
                    }}
                    centered="true"
                    
                
                >
                垂直居中
                </Modal>
            </div>
        )
    }
}