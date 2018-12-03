export default {
    analysisTime(time){
        if(parseInt(time.getSeconds()) >= 10){
            return time.getFullYear() +'-'+ (time.getMonth()+1) + '-' + time.getDate() + ' ' + time.getHours()+ ":" + time.getMinutes()+":"+time.getSeconds()

        }else{
            return time.getFullYear() +'-'+ (time.getMonth()+1) + '-' + time.getDate() + ' ' + time.getHours()+ ":" + time.getMinutes()+":0"+time.getSeconds()
        }
         
        

    }
}