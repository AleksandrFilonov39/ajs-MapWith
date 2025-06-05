export default class Settings {
    constructor() {
        this.defaultSettings =  new Map([
            ['theme', ['dark', 'light', 'gray']],
            ['music', ['trance', 'pop', 'rock', 'chillout']],
            ['difficulty', ['easy', 'normal', 'hard', 'nightmare']]
        ]);
        this.userSettings = new Map();
    }

    setSettiggs(nameOption, optionValue) {
        if(!this.defaultSettings.has(nameOption)) {
            throw new Error ('Такой опции нет')
        }

        if(this.defaultSettings.has(nameOption)) {
            if(this.defaultSettings.get(nameOption).includes(optionValue)) {
                this.userSettings.set(nameOption, optionValue)
                return this.userSettings;
            }else {
                throw new Error ('Нет такого значкния у выбранной опции, введите правильное значение')
            }
        }
    }
}

