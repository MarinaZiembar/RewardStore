

export function getDateTime(timestamp){
 
    let dateTime = new Date(timestamp);

    let year = dateTime.getFullYear();
    let month = dateTime.getMonth() + 1;
    let day = dateTime.getDate();

    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();


    dateTime = day + "/" + month + "/" + year + " - " + hour + ":" + ((minute < 10) ? "0" : "") +  minute ; 

    return dateTime;

}