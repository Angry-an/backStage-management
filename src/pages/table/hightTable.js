import React from 'react';
import { Card , Table, Modal, message ,Pagination ,Badge, Button} from 'antd';
import axios from './../../axios/index'


export default class HightTable extends React.Component{
    params ={
        page : 1
    }
    state = {

    }
    request =()=>{
       
        axios.ajax({
            url:'/table/list',
            data:{
                paras:{
                    page:1
                }
            }
        }).then((res)=>{
            // console.log(res,'resres')
            this.setState({
                dataSource:res.result.list
            })
            
        })
    }
    componentDidMount(){
        this.request()
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll () {
      console.log(11111)
    }



    handleChang = (pagination,filters,sorter)=>{
      // console.log(sorter.order,'sorterorder')
      this.setState({
        sortOrder:sorter.order
      })
    }
    handleDel = (item)=>{
      let id = item.id;
      Modal.confirm({
        title:'确认',
        content:'你确定删除吗',
        onOK:()=>{
          message.success('删除成功');
          this.request();
        }
      })
    }
    render(){
     
        const columns = [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width:80
          }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            width:80,
           
           
          }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            width:80
            
          },{
              title:"性别",
              dataIndex:'sex',
              render(sex){
                 return sex == 1 ? '男':'女'
                },
              width:80

          }];
        const columns2 = [
          {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width:80,
                fixed:"left"
              }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width:80
              
              }, 
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age1',
                width:80
              
              }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age2',
                width:80
              
              }, {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width:80
                
              },{
                  title:"性别",
                  dataIndex:'sex',
                  render(sex){
                    return sex == 1 ? '男':'女'
                    },
                  width:80

              },{
                title: '姓名',
                dataIndex: 'name',
                key: 'name1',
                width:80
              }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age3',
                width:80
              
              }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age4',
                width:80
              
              }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age5',
                width:80
              
              }, {
                title: '住址',
                dataIndex: 'address',
                key: 'address2',
                width:80
                
              },{
                title: '姓名',
                dataIndex: 'name',
                key: 'name3',
                width:80
              }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age11',
                width:80
              
              }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age12',
                width:80
              
              }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age13',
                width:80
              
              }, {
                title: '住址',
                dataIndex: 'address',
                key: 'address21',
                width:80
                
              },
              {
                title: '姓名',
                dataIndex: 'name',
                key: 'name22',
                width:80
              }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'agea',
                width:80
              
              }, {
                title: '住址',
                dataIndex: 'address',
                key: 'address32',
                width:80,
                fixed:"right"
                
              }
            ];
        const columns3 = [{
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
              width:80
            }, {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
              width:80,
              sorter:(a,b)=>{return a.age-b.age},
              sortOrder:this.state.sortOrder
            }, {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
              width:80
              
            },{
                title:"性别",
                dataIndex:'sex',
                render(sex){
                   return sex == 1 ? '男':'女'
                  },
                width:80
  
            },{
              title:"状态",
              dataIndex:'state',
              render(state){
                  let config = {
                    '1':<Badge status = 'success' text='耶耶耶耶耶'/>,
                    '2':'努力',
                    '3':'奋斗',
                    '4':'西溪',
                    '5':'哈哈哈',
                  }
                  return config[state]
                },
              width:80

          },{
            title:"操作",
            dataIndex:'del',
            width:80,
            render:(text,item)=>{
              // console.log(text,item,'textItem')
              return <Button onClick={(item)=>{this.handleDel(item)}}>删除</Button>
            }
        }
        ];
        return (
            <div>
                 <Card title="头部固定">
                    <Table 
                        columns = {columns}
                        dataSource = {this.state.dataSource}
                        bordered
                        pagination={false}
                        scroll={{y:240}}
                        
                        />
                </Card>

                <Card title="左侧固定">
                    <Table 
                        columns = {columns2}
                        dataSource = {this.state.dataSource}
                        bordered
                        pagination={false}
                        scroll={{x:1440}}
                        
                        />
                </Card>


                <Card title="升降序">
                    <Table 
                        columns = {columns3}
                        dataSource = {this.state.dataSource}
                        bordered
                        pagination={false}
                        onChange = {this.handleChang}
                        
                        />
                </Card>

                
            </div>
        )
    }
}