import React from "react";
import { Card } from 'antd'
import axios from './../../axios/index'
import './index.less'
// const FormItem = Form.Item;

export default class Order extends React.Component{
    state = {}
    componentDidMount(){
        // console.log(this.props,'this.props.match.params')
        //获取父组件标签
        let orderId = this.props.match.params.orderId;
        // console.log(orderId,'orderId')
        if(orderId){
            this.getOrderDetail(orderId)
        }
       
       
    }
    getOrderDetail = (orderId)=>{
        axios.ajax({
            url:'/order/detail',
            data:{
                params:{
                    orderId:orderId
                }
            }
        }).then((res)=>{
            if(res.code == 0){
                console.log(res.result,'res')
                this.setState({
                    info:res.result
                })
                this.renderMap(res.result);
            }
        })
    }
    // 初始化地图
    renderMap = (result)=>{
        // 创建地图实例 
        this.map = new window.BMap.Map("orderDetail",{enableClickMap:false});
        // 创建点坐标  
        this.map.centerAndZoom('北京', 11);
        //添加地图控件    
        this.addMapControl();
        // 绘制行驶路线
        this.drawBikeRoute(result);

    }
    //添加地图控件
    addMapControl = ()=>{
        let map = this.map;
        map.addControl(new window.BMap.NavigationControl()); 
        map.addControl(new window.BMap.ScaleControl()); 
        map.addControl(new window.BMap.OverviewMapControl());    
        map.addControl(new window.BMap.MapTypeControl());    
        map.setCurrentCity("北京");
    }
    //绘制路线图
    drawBikeRoute = (result)=>{
        let startLoc;
        let endLoc ;
        let positionList = result.position_list;

        // console.log(endLoc,endLoc,'drawBikeRouteresult');
        if(positionList.length > 0){
            let arrFirst = positionList[0];
            let arrLast = positionList[positionList.length-1];
            console.log(arrFirst,arrLast,'arrFirstarrLast')
            // 起始路标绘制
            startLoc = new window.BMap.Point(arrFirst.lon,arrFirst.lat);
            let startIcon = new window.BMap.Icon('/assets/startIcon.png',new window.BMap.Size(44,40),{
                imageSize:new window.BMap.Size(44,40),
                anchor:new window.BMap.Size(44,40)
            })
            let startMarker = new window.BMap.Marker(startLoc,{icon:startIcon});
            this.map.addOverlay(startMarker);

            // 重点路标绘制
            endLoc = new window.BMap.Point(arrLast.lon,arrLast.lat);
            let endIcon = new window.BMap.Icon('/assets/endIcon.png',new window.BMap.Size(44,40),{
                imageSize:new window.BMap.Size(44,40),
                anchor:new window.BMap.Size(44,40)
            })
            let endMarker = new window.BMap.Marker(endLoc,{icon:endIcon});
            this.map.addOverlay(endMarker);




            // 链接路线图
            let trackPoint = [];
            for(var i = 0; i<positionList.length;i++){
                let point = positionList[i];
                trackPoint.push(new window.BMap.Point(point.lon,point.lat));
            }
            let polyLine = new window.BMap.Polyline(trackPoint,{
                strockeColor: "#1869AD",
                strockeWeight:3,
                strockeOpacity:1
            })
            this.map.addOverlay(polyLine);

           


        }
        this.drawArea(result)
        

    }
    //绘制运营地区
    drawArea = (result)=>{
        console.log(result,'result');
        let map = result.area_list;
        let araePoint = [];
        for(var i = 0 ;i<map.length;i++){
            let arae = map[i];
            araePoint.push(new window.BMap.Point(arae.lon,arae.lat))
        }
        let ploygon = new window.BMap.Polygon(araePoint,{
            // strockeColor: "#CE00000",
            strockeWeight:4,
            strockeOpacity:1,
            fillColor:"#ff8605",
            fillOpacity:0.4
        })
        this.map.addOverlay(ploygon);

    }


    render(){
        const info = this.state.info || {};
        return (
            <div>
                <div id="orderDetail" className='orderMap'></div>
                <Card className='card-wrap'>
                    <div className='order-title'>基础信息</div>
                    <ul className='order-detail'>
                        <li>
                            <span className='detail-form-left'>用车模式:</span>
                           
                            <span className='detail-form-content'>{ info.model == 2 ? '服务区' : '指定点'}</span>
                        </li>
                        <li>
                            <span className='detail-form-left'>订单编号:</span>
                            <span className='detail-form-content'>{info.order_sn}</span>
                        </li>
                        <li>
                            <span className='detail-form-left'>车辆编号:</span>
                            <span className='detail-form-content'>{info.bike_sn}</span>
                        </li>
                        <li>
                            <span className='detail-form-left'>用户姓名:</span>
                            <span className='detail-form-content'>{info.user_name}</span>
                        </li>
                        <li>
                            <span className='detail-form-left'>用户电话:</span>
                            <span className='detail-form-content'>{info.mobile}</span>
                        </li>
                    </ul>
                </Card>
                <Card className='card-wrap'>
					<div className='order-title'>行驶轨迹</div>
					<ul className='order-detail'>
						<li>
							<span className='detail-form-left'>行程起点:</span>
							<span className='detail-form-content'>{info.start_location}</span>
						</li>
						<li>
							<span className='detail-form-left'>行程终点:</span>
							<span className='detail-form-content'>{info.end_location}</span>
						</li>
						<li>
							<span className='detail-form-left'>行驶里程:</span>
							<span className='detail-form-content'>{info.total_time}公里</span>
						</li>
					</ul>
				</Card>
            </div>
        )
    }
}