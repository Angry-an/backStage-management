import React from 'react';
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,Icon,message, InputNumber} from 'antd'
import moment from 'moment'
const FormItem = Form.Item;
class RegisterForm extends React.Component{
    state={}
    getBase64 =(img, callback) =>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
          }));
        }
      }

      handlesubmit = ()=> {
        let userInfo = this.props.form.getFieldsValue();
        console.log(userInfo,'useinfo')
      }

      
    render(){
        
        const { getFieldDecorator } = this.props.form; 
        const RadioGroup = Radio.Group
        const Option = Select.Option
        const TextArea = Input.TextArea; 
        const formItemLayout = {
            labelCol :{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetItemout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        // var now=moment().format("YYYY年MM月DD日");
        // console.log(now,'now')
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator("user",{
                                    initialValue:"",
                                    rules:[{
                                        required:true
                                    }]
                                })(
                                    <Input placeholder="请输入用户名"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator("password",{
                                    initialValue:"",
                                    rules:[{
                                        required:true
                                    }]
                                })(
                                    <Input type="password" placeholder="请输密码"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator("sex",{
                                    initialValue:"",
                                    rules:[]
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio> 
                                        <Radio value="2">女</Radio> 
                                    </RadioGroup>
                                   
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator("age",{
                                    initialValue:"18",
                                    rules:[]
                                })(
                                   <InputNumber></InputNumber>   
                                )
                            }
                        </FormItem>
                        <FormItem label="目前状态" {...formItemLayout}>
                            {
                                getFieldDecorator("age",{
                                    initialValue:"鲶鱼",
                                    rules:[]
                                })(
                                  <Select>
                                      <Option value="1">天下第一</Option>
                                      <Option value="2">人生巅峰</Option>
                                      <Option value="3">吸取人生</Option>
                                  </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="兴趣爱好" {...formItemLayout}>
                            {
                                getFieldDecorator("habit",{
                                    initialValue:['1','4'],
                                    rules:[]
                                })(
                                  <Select mode="multiple">
                                      <Option value="1">篮球</Option>
                                      <Option value="2">唱歌</Option>
                                      <Option value="3">跳舞</Option>
                                      <Option value="4">健身</Option>
                                      <Option value="5">其他</Option>
                                      <Option value="6">游泳</Option>
                                  </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator("isMarry",{
                                    initialValue:true,
                                     valuePropName:"checked",
                                    rules:[]
                                })(
                                  <Switch></Switch>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator("birthday",{
                                    initialValue:moment('2018-10-27'),
                                    rules:[]
                                })(
                                 <DatePicker></DatePicker>
                                )
                            }
                        </FormItem>

                        <FormItem label="家庭住址" {...formItemLayout}>
                            {
                                getFieldDecorator("address",{
                                    initialValue:"浙江省杭州市。。。",
                                    rules:[]
                                })(
                                 <TextArea
                                   autosize={
                                       {
                                        minRows:4,
                                        maxRows:6
                                       }

                                   }
                                    />
                                )
                            }
                        </FormItem>

                         <FormItem label="早期时间" {...formItemLayout}>
                            {
                                getFieldDecorator("downbed")(
                                 <TimePicker></TimePicker>
                                )
                            }
                        </FormItem>
                        
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator("userImg")( 
                                 <Upload
                                    listType = 'picture-card'
                                    action = '//jsonplaceholder.typicode.com/posts/'
                                    // 是否显示上传列表
                                    showUploadList = {false}
                                    onChange = {this.handleChange}
                                 >
                                    {this.state.userImg ? <img alt='' src={this.state.userImg}></img>:<Icon type="plus"></Icon>}
                                 </Upload>
                                )
                            }
                        </FormItem>

                        <FormItem {...offsetItemout}>
                            {
                                getFieldDecorator("read")( 
                                <Checkbox>我已经阅读<a href="#">相关文件</a></Checkbox>
                                )
                            }
                        </FormItem>

                         <FormItem {...offsetItemout}>
                            {
                                getFieldDecorator("git")( 
                                    <Button
                                        type="primary"
                                        onClick = {this.handlesubmit}
                                    >提交</Button>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(RegisterForm)