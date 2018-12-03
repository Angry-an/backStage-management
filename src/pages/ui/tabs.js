import React from 'react';
import { Card , message , Tabs , Icon} from 'antd';
import './ui.less'
export default class Tab extends React.Component{
    constructor(props){
        super(props)
        this.newTabIndex = 0;
        
    }
    handleCallback = (key)=>{
        message.info("hi 您来了" + key)
    }

    componentWillMount(){
        const arr = [
            {
                tab :'tab 1',
                key :'1',  
                title:'你确定'
            },
            {
                tab :'tab 2',
                key :'2',  
                title:'你存在'
            },
            {
                tab :'tab 3',
                key :'3',  
                title:'深深地'
            },
            {
                tab :'tab 4',
                key :'4',  
                title:'脑海里'
            }
        ]
        this.setState({
            panes:arr,
            activeKey:arr[0].key
        })
           
        
    }
   
    onChange = (activeKey) => {
        this.setState({ 
            activeKey
         });
    }
    onEdit = (targetKey,action)=>{
       this[action](targetKey)
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab ${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', tab:activeKey , key: activeKey });
        this.setState({ panes, activeKey });
      }
    
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    render (){
        const Tabpane = Tabs.TabPane;
        return (
            <div>
                <Card title="tab">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <Tabpane tab= "tab1" key="1">你确定</Tabpane>
                        <Tabpane tab= "tab2" key="2">你存在</Tabpane>
                        <Tabpane tab= "tab3" key="3">深深的</Tabpane>
                        <Tabpane tab= "tab4" key="4">脑海里</Tabpane>
                    </Tabs>
                </Card>
                <br />
                <Card title="带icon tab">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <Tabpane tab= {<Icon type="plus"/>} key="1">你确定</Tabpane>
                        <Tabpane tab= {<span><Icon type="plus"/>tab 2</span>  } key="2">你存在</Tabpane>
                        <Tabpane tab= "tab3" key="3">深深的</Tabpane>
                        <Tabpane tab= "tab4" key="4">脑海里</Tabpane>
                    </Tabs>
                </Card>
                <br />
                 <Card title="带icon tab(动态渲染)">
                    <Tabs 
                        // defaultActiveKey="1" 
                        type = "editable-card"
                        activeKey = {this.state.activeKey}
                        onChange={this.onChange}
                        onEdit={this.onEdit}
                        >
                        {
                            this.state.panes.map((pane)=>{
                                return <Tabpane tab= {pane.tab} key={pane.key}>{pane.title}</Tabpane>
                            })
                        }
                    </Tabs>
                </Card>
            
            </div>
        )
    }
}