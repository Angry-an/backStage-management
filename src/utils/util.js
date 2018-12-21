export default {
    analysisTime(time){
        if(parseInt(time.getSeconds()) >= 10){
            return time.getFullYear() +'-'+ (time.getMonth()+1) + '-' + time.getDate() + ' ' + time.getHours()+ ":" + time.getMinutes()+":"+time.getSeconds()

        }else{
            return time.getFullYear() +'-'+ (time.getMonth()+1) + '-' + time.getDate() + ' ' + time.getHours()+ ":" + time.getMinutes()+":0"+time.getSeconds()
        }  
    },
    pagination(data,callback){
        return {
            onChang:(current)=>{
                callback(current)
                console.log(current,'current')
            },
            current:data.result.page,
            pageSize:data.result.page_size,
            total:data.result.total,
            showTotal:()=>{
                return `共${data.result.total}条`
            },
            showQuickJumper:true


        }
    }



}