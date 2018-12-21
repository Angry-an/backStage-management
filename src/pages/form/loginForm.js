import React from 'react';
import { Card , Button ,Form, Input,message, Icon, Checkbox} from 'antd';
const FormItem = Form.Item;

class LoginForm extends React.Component{
    handleSubmit = ()=>{
        let userinfo = this.props.form.getFieldsValue();
        console.log(userinfo,'userinfo')
        this.props.form.validateFields((err,value)=>{
            if(!err){
                message.success(`恭喜 ${userinfo.username1} 登陆成功`)
            }
            console.log(value,'value')
        })
        

    }
    render(){
        const { getFieldDecorator } = this.props.form; 

        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            {
                                getFieldDecorator("username",{
                                    rules: [{ 
                                            required: true, 
                                            message: 'Please input your username!',
                                            
                                             }],
                                    initialValue:"钱帅帅"
                                })(
                                    <Input placeholder="请输入用户名"></Input>
                                )
                            }
                        </FormItem>

                         <FormItem>
                            {
                                getFieldDecorator("password",{
                                    initialValue:"123456",  
                                    rules: [{ 
                                        required: true, 
                                        message: 'Please input your password!'
                                        }]
                                })(
                                    <Input placeholder="请输入密码"></Input>
                                )
                            }
                            
                        </FormItem>
                        <FormItem>
                           <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                 <Card title="登录水平表单">
                    <Form style={{"width":"200px"}}>
                        <FormItem label="用户名">
                            {
                                getFieldDecorator('username1',{
                                    initialValue:"",
                                    rules:[{
                                        required:true,
                                        message:'请输入用户名'
                                    },{
                                        min:5,
                                        max:10,
                                        message:'长度不符合要求'
                                    },{
                                        
                                        pattrn:new RegExp('^\\w+$','g'),
                                        message:"用户名必须为字母"
                                    }]
                                })(
                                    <Input prefix = {<Icon type="user"></Icon>} placeholder="请输入用户名"></Input>
                                )
                            }    
                        </FormItem>

                         <FormItem label="密码">
                            {
                                getFieldDecorator('password1',{
                                    initialValue:"",
                                    rules:[{
                                        required:true,
                                        message:"请输入密码"
                                    },{
                                        min:5,
                                        max:10,
                                        message:'长度不符合要求'
                                    }]
                                })(
                                <Input prefix={<Icon type="lock"></Icon>} placeholder="请输入密码"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("remember",{   
                                    valuePropName:"checked",
                                    initialValue:true

                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{"float":"right"}}>忘记密码</a>
                        </FormItem>



                        <FormItem>
                            <Button type="primary" onClick = {this.handleSubmit}>登录</Button>   
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(LoginForm);