import React from "react";
import { Card, Button, Form, Select, Table, Modal, message ,Pagination , DatePicker} from 'antd'
import axios from './../../axios/index'
import './index.less'
const Option = Select.Option
const FormItem = Form.Item;

export default class Order extends React.Component{
    state = {}
    params = {
        page:1
    }
    componentDidMount(){
        this.request();
        
    }
    handlePagination = (e)=>{
        this.params = e
        this.request();
    }
    handleOrderDetail =()=>{

      if(this.state.selectRowKeys==''){
        Modal.error({
            title:'错误提示',
            content:'您还没有选中'
        })
      }else{
        Modal.success({
             title:'确认',
             content:`您确定选择的是${this.state.name}`,
             onOk : ()=>{
                 window.open(`/#/common/order/detail/${this.state.id}`,'_blank')
                 console.log(this.state.id,'this.state.id')
                // window.location.href = `/#/common/order/detail:${this.state.id}`
             }
         })
      }
    }
    handleRowClick = (record,index)=>{
        var item = record.user_name;
        var id = record.user_id;
        let selectKeys = [index+1];
        console.log(selectKeys,'selectKeys')
       

        this.setState({
            selectRowKeys:selectKeys,
            name:item,
            id:id
        })
        console.log(this.state.selectRowKeys,'this.state.selectRowKeys')
        // console.log(record.user_name,'record.user_id')

    }
    request = ()=>{
        axios.ajax({
            url:'/order/list',
            data:{
                paras:{
                    page:this.params.page
                }
            
            }
        })
        .then((res)=>{
           
            
            // const id = res.result.list_list[0].id;
            this.setState({
                dataSource:res.result.list_list,
                selectRowKeys:''
                
            })
        })
    }
    render(){
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn'
            },
            {
                title:'车辆编号',
                dataIndex:'bike_sn'
            },
            {
                title:"用户id",
                dataIndex:"user_id"
            },
            {
                title:"用户姓名",
                dataIndex:"user_name"
            },
            {
                title:"手机号码",
                dataIndex:"mobile"
            },
            {
                title:"里程",
                dataIndex:"distance"
            },
            {
                title:"行驶时长",
                dataIndex:"total_time"
            },
            {
                title:"状态",
                dataIndex:"status"
            },
            {
                title:"开始时间",
                dataIndex:"start_time"
            },
            {
                title:"结束时间",
                dataIndex:"end_time"
            },
            {
                title:"订单金额",
                dataIndex:"total_fee"
            },
            {
                title:"实付金额",
                dataIndex:"user_pay"
            }
        ]
        const selectRowKeys  = this.state.selectRowKeys;   
        const rowSelection = {
            type:'radio',
            selectedRowKeys:selectRowKeys
        }
        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card>
                    <Button type='primary' onClick={this.handleOrderDetail}>订单详情</Button>
                    <Button type='primary'>结束订单</Button>
                </Card>
                <div style={{"marginTop":"20px"}}>
                    <Table  
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        style={{"background":"#fff"}}
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
                    <Pagination 
                        className="pagination" 
                        defaultCurrent={1} 
                        total={85} 
                        onChange={this.handlePagination}

                        />
                </div>
                
            </div>
        )
    }
}

class FilterForm extends React.Component {
    render() {
      const { getFieldDecorator } = this.props.form
      return(
        <Form  layout="inline">
            <FormItem label='城市' >
                {
                    getFieldDecorator('city',{
                        initialValue: '1'
                        })(
                        <Select style={{width:80}}>
                            <Option value='1'>北京</Option>
                            <Option value='2'>南京</Option>
                        </Select>
                    )
                } 
            </FormItem>
            <FormItem label='订单时间'>
                {
                    getFieldDecorator('start_time')(
                        <DatePicker />
                    )
                }
                -
                {
                    getFieldDecorator('end_time')(
                        <DatePicker />
                    )
                }
            </FormItem>
            <FormItem label='订单状态' >
                {
                    getFieldDecorator('mode',{
                        initialValue: '1'
                    })(
                    <Select style={{width:80}}>
                        <Option value='1'>全部</Option>
                        <Option value='2'>进行中</Option>
                        <Option value='3'>结束行程</Option>
                    </Select>
                    )
                } 
            </FormItem>
            <Button type="primary" style={{marginTop:4}}>查询</Button>
            <Button>重置</Button>
            
        </Form>
      )
    }
  }
  FilterForm = Form.create({})(FilterForm)