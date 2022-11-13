export const convertTimestampToDate = (timeStamp: number) => {

    if (timeStamp <= 0) {
        return "Некорректный timestamp"
    }
    let date = new Date(timeStamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let day = "0" + date.getDate();
    let month = "0" + (date.getMonth() + 1);
    let year = "0" + date.getFullYear();
    
    return (
        hours +
        ":" +
        minutes.substr(-2) +
        ":" +
        seconds.substr(-2) +
        " | " +
        day.substr(-2) +
        "." +
        month.substr(-2) +
        "." +
        year.substr(-4)
    );
};