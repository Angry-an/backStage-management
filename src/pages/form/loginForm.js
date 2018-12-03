import React from 'react';
import { Card , Button ,Form, Input} from 'antd';
const FormItem = Form.Item;

class LoginForm extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form; 
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            {
                                getFieldDecorator("userName",{
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
                        <FormItem>
                            <Input placeholder="请输入用户名"></Input>
                        </FormItem>

                         <FormItem>
                            <Input placeholder="请输入密码"></Input>
                        </FormItem>
                        <FormItem>
                           <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(LoginForm);