import React from 'react';
import { Card , Spin , Icon , Alert} from 'antd';

export default class Loadings extends React.Component{
    render(){
        const icon = <Icon type ="plus"/>;
        const iconLoading = <Icon type ="loading"/>;

        return (
            <div>
                <Card title="splid用法">
                    <Spin />
                    <br />
                    <Spin indicator={icon} />
                </Card>
                <Card title="内容遮罩">
                   <Alert 
                       message = "React"
                       description ="欢迎使用react"
                       type = "info"
                   />
                   <Alert 
                       message = "React"
                       description ="欢迎使用react"
                       type = "warning"
                   />
                   <Spin tip="加载中...">
                        <Alert 
                            message = "React"
                            description ="欢迎使用react"
                            type = "warning"
                        />
                    </Spin>
                   
                   <Spin indicator={iconLoading} tip="加载中...">
                        <Alert 
                            message = "React"
                            description ="欢迎使用react"
                            type = "warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}