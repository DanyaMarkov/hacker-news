//вычисление сколько времени назад был опубликован комментарий
export const timeDifference = (current: number) => {
    var msPerMinute = 60;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = Number(Date.now()) / 1000 - current;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed) + numWord(Math.round(elapsed), ["секунду", "секунды", "секунд"]);
    } else if (elapsed < msPerHour) {
        return (
            Math.round(elapsed / msPerMinute) +
            numWord(Math.round(elapsed / msPerMinute), ["минуту", "минуты", "минут"])
        );
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + numWord(Math.round(elapsed / msPerHour), ["час", "часа", "часов"]);
    } else if (elapsed < msPerMonth) {
        return (
            "примерно " +
            Math.round(elapsed / msPerDay) +
            numWord(Math.round(elapsed / msPerDay), ["день", "дня", "дней"])
        );
    } else if (elapsed < msPerYear) {
        return (
            "примерно " +
            Math.round(elapsed / msPerMonth) +
            numWord(Math.round(elapsed / msPerMonth), ["месяц", "месяца", "месяцев"])
        );
    } else {
        return (
            "примерно " +
            Math.round(elapsed / msPerYear) +
            numWord(Math.round(elapsed / msPerYear), ["год", "года", "лет"])
        );
    }
};

//склонение времени комментария
function numWord(value: number, words: string[]) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return " " + words[2] + " назад";
    if (num > 1 && num < 5) return " " + words[1] + " назад";
    if (num === 1) return " " + words[0] + " назад";
    return " " + words[2] + " назад";
}