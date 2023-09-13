function whatColorItIs(){
    var date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        seconds = date.getSeconds();

        if(hour<10){
            hour = '0' + hour;
        }


        if(minute<10){
            minute = '0' + minute;
        }

        if(seconds<10){
            seconds = '0' + seconds;
        }

        document.body.style.backgroundColor = '#' + hour + minute + seconds;

        document.getElementById('timer').innerHTML= hour+':'+ minute +':'+seconds;

        document.getElementById('colorId').innerHTML =  '#' + hour + minute + seconds;

}

setInterval(whatColorItIs,1000);