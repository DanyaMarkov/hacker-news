import { timeDifference } from '../timeDifference';

describe("Проверка функции вычисления разницы времени", () => {
    test("Передается timestamp меньше 0", () => {
        expect(timeDifference(-100)).toBe("Некорректное время")
    })

    test("Передается время поста из будушего", () => {
        expect(timeDifference(Date.now() * 1000 + 1000)).toBe("Некорректное время")
    })

    test("Передается 7 минут назад", () => {
        expect(timeDifference((Date.now() - (Date.now() % 1000 )) / 1000 - 7*60)).toBe("7 минут назад")
    })

    test("Передается 4 часа назад", () => {
        expect(timeDifference((Date.now() - (Date.now() % 1000 )) / 1000 - 4*60*60)).toBe("4 часа назад")
    })

    test("Передается 8 часов назад", () => {
        expect(timeDifference((Date.now() - (Date.now() % 1000 )) / 1000 - 8*60*60)).toBe("8 часов назад")
    })

    test("Передается 2 дня назад", () => {
        expect(timeDifference((Date.now() - (Date.now() % 1000 )) / 1000 - 2*60*60*24)).toBe("примерно 2 дня назад")
    })

    test("Передается 6 месяцев + 3 дня назад", () => {
        expect(timeDifference((Date.now() - (Date.now() % 1000 )) / 1000 - 6*60*60*24*30 - 3*60*60*24)).toBe("примерно 6 месяцев назад")
    })

    test("Передается 6 месяцев + 20 дней назад", () => {
        expect(timeDifference((Date.now() - (Date.now() % 1000 )) / 1000 - 6*60*60*24*30 - 20*60*60*24)).toEqual("примерно 7 месяцев назад")
    })

    test("Проверка примерного месяца", () => {
        expect(timeDifference((Date.now() - (Date.now() % 1000 )) / 1000 - 6*60*60*24*30 - 20*60*60*24)).not.toEqual("примерно 6 месяцев назад")
    })

})
