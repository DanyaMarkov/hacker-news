import { convertTimestampToDate } from './../dateConverter';

describe("Проверка функции конвертации timestamp в дату", () => {
    test("Передается timestamp меньше 0", () => {
        expect(convertTimestampToDate(-100)).toBe("Некорректный timestamp")
    })

    //Воскресенье, 13 Ноября 2022 16:21:03  По МСК
    test("Проверка конкретного timestamp", () => {
        expect(convertTimestampToDate(1668334863)).toBe("13:21:03 | 13.11.2022")
    })
})
