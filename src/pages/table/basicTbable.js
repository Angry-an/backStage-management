import React from 'react';
import { Card , Table, Modal, message ,Pagination} from 'antd';
import axios from './../../axios/index';
import { Button } from 'antd/lib/radio';
// import Utils from './../../utils/util'

export default class BasicTable extends React.Component{
    state={
        dataSource2:[],
        dataSource1:[]
    }
    params = {
        page:1
    }
    componentDidMount = ()=>{
        const data = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
            sex:1
          }, 
          {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
            sex:1

          }];
          
          
        this.setState({
            dataSource:data
        })
        this.request();
      }
    request =()=>{
       
        axios.ajax({
            url:'/table/list',
            data:{
                paras:{
                    page:this.params.page

                }
            }
        }).then((res)=>{

            this.setState({
                total:res.result.total,
                dataSource1:res.result.list,
                dataSource2:res.result.list,
                selectRowKeys:[],
                selectedRows:null,
               
            })
            
        })
    }
    
    onChangePagination = (e)=>{
        this.params.page = e;
        this.request()
    }

    showTotal = ()=>{
        return `共${this.state.total}条`
    }
    handleRowClick = (record,index)=>{
        let selectKeys = [index+1];
        Modal.info({
            title:'用户信息',
            content:`用户名：${record.name}`
        })
        this.setState({
            selectRowKeys:selectKeys,
            selectItem:record
        })
    }
    handleDel = ()=>{
        let selectRowsNum = this.state.selectedRows;
        let names = [];
        let ids = [];

        selectRowsNum.map((item)=>{
            names.push(item.name);
            ids.push(item.key)
            
        })
        Modal.info({
            title:'删除提示',
            content:`您要删除的是${names.join(',')}`,
            onOk: ()=>{
                message.success("删除成功");
                this.request();
            }
        })
    }
    render(){
        
        
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
           
          }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            
          },{
              title:"性别",
              dataIndex:'sex',
              render(sex){
                return sex == 1 ? '男':'女'
            }
          }];
          
        const selectRowKeys  = this.state.selectRowKeys;

        const rowSelection = {
              type:'radio',
              selectedRowKeys:selectRowKeys
          }
        const rowCheckSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
              }
              

          }
        return (
            <div>
                <Card title="基础表格">
                    <Table 
                        columns = {columns}
                        dataSource = {this.state.dataSource}
                        bordered
                        pagination={false}
                        
                        />
                </Card>

                 <Card title="动态获取数据表格" style={{"marginTop":"20px"}}>
                    <Table 
                        columns = {columns}
                        dataSource = {this.state.dataSource1}
                        bordered
                        pagination={false}
                        
                        />
                </Card>

                 <Card title="mack-单选" style={{"marginTop":"20px"}}>
                    <Table 
                        columns = {columns}
                        dataSource = {this.state.dataSource1}
                        bordered
                        pagination={false}
                        rowSelection ={rowSelection}
                        onRow={(record,index) => {
                            return {
                                onClick: () => {
                                    this.handleRowClick(record,index);
                                }    // 点击行
                                // onMouseEnter: () => {},  // 鼠标移入行
                            };
                        }}
                        />
                </Card>

                  <Card title="mack-多选" style={{"marginTop":"20px"}}>
                    <Button  onClick={this.handleDel}>删除</Button>
                    <Table 
                        columns = {columns}
                        dataSource = {this.state.dataSource2}
                        bordered
                        pagination={false}
                        rowSelection ={rowCheckSelection}
                       
                        />
                </Card>


                <Card title="mack-分页" style={{"marginTop":"20px"}}>
                    
                    <Table 
                        columns = {columns}
                        dataSource = {this.state.dataSource2}
                        bordered
                        pagination={false}
                      
                        />
                        <Pagination 
                            onChange={this.onChangePagination} 
                            total={50} 
                            showTotal={this.showTotal}
                            pageSize={5}
                            style={{"marginTop":"10px"}}

                            />
                </Card>

            </div>
        )
    }
}