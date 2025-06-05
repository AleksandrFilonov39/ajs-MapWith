import Settings from '../app'

test('add theme', () => {
    const setting = new Settings();
    setting.setSettiggs('theme', 'gray');

    expect('gray').toEqual(setting.setSettiggs('theme', 'gray').get('theme'))
})

test('add incorrect option', () => {
    const setting = new Settings();
    expect(() => {
        setting.setSettiggs('them', 'gray')
    }).toThrow('Такой опции нет')
})

test('add incorrect value', () => {
    const setting = new Settings();
    expect(() => {
        setting.setSettiggs('theme', 'lighGgray')
    }).toThrow('Нет такого значкния у выбранной опции, введите правильное значение')
})




