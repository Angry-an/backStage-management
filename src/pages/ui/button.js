import React from 'react';
import { Card , Button ,Icon, Radio} from 'antd';
import './ui.less'
export default class Buttons extends React.Component{
    state ={
        loading:false,
        size:"default"
    }
    handleLoad = ()=>{
        
        this.setState({
            loading:true
        })
    }
    handleBtn = (e)=>{
        this.setState({
            size:e.target.value
        })
    }
    render(){
        return(
            <div>
                <Card title="基础按钮">
                    <Button type="primary">Immoc</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>

                </Card>
                <br />
              
                <Card title="图形按钮">
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" icon="search">Search</Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                </Card>
                <br />
                <Card title="Loading按钮">
                    <Button type="primary" loading={this.state.loading} onClick={this.handleLoad}>Click me!</Button>
                    <Button type="primary" loading>Loading</Button>
                    <Button type="primary" size="small" loading>Loading</Button>
                </Card>
                <br />
                <Card title="按钮组">
                    <Button.Group size="large">
                        <Button type="primary" icon="left">
                        Backward
                        </Button>
                        <Button type="primary" >
                            Forward <Icon type="right"/>
                        </Button>
                    </Button.Group>
                </Card>
                <Card title="大小按钮">
                    <Radio.Group size="large" value={this.state.size} onChange={this.handleBtn}>
                       <Radio value="small">小</Radio>
                       <Radio value="default">中</Radio>
                       <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Icoom</Button>
                    <Button type="primary" size={this.state.size}>Icoom</Button>
                    <Button type="primary" size={this.state.size}>Icoom</Button>
                    
                </Card>


            </div>
        )
    }
}