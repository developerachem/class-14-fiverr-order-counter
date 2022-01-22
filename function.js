function timeZero(time) {
    return time < 10 ? "0" + time : time;
}

function timeCal() {
    setInterval(() => {
        let date = localStorage.getItem('date')
        let time = localStorage.getItem('time')

        let orderStartTime = new Date();
        let orderEndTime = new Date(JSON.parse(date) + " " + JSON.parse(time));

        let totalSecent = Math.floor(Math.abs((orderEndTime.getTime() - orderStartTime.getTime()) / 1000));
        let minute = Math.floor(totalSecent / 60);
        let hours = Math.floor(minute / 60);
        let day = Math.floor(hours / 24);
        let month = Math.floor(day / 30);

        let dd = day - (month * 30);
        let hh = hours - (month * 30 * 24) - (dd * 24);
        let mm = minute - (month * 30 * 24 * 60) - (dd * 24 * 60) - (hh * 60);
        let ss = totalSecent - (month * 30 * 24 * 60 * 60) - (dd * 24 * 60 * 60) - (hh * 60 * 60) - (mm * 60);




        


        document.querySelector('#mo').innerHTML = timeZero(month) == 00 ? "-00-" : timeZero(month) ;
        document.querySelector('#dd').innerHTML = timeZero(dd) == 00 ? "-00-" : timeZero(dd);
        document.querySelector('#hh').innerHTML = timeZero(hh) == 00 ? "-00-" : timeZero(hh);
        document.querySelector('#mm').innerHTML = timeZero(mm) == 00 ? "-00-" : timeZero(mm);
        document.querySelector('#ss').innerHTML = timeZero(ss) == 00 ? "-00-" : timeZero(ss);



        
    }, 1000)
}