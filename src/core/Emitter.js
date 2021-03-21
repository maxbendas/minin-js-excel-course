export class Emitter {
    constructor(props) {
        this.listeners = {}
    }

    //dispatch, fire, trigger
    //Уведомляем слушателей усли они есть
    //table.emit('table:select', {a:1})
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }

//on, listen
//    Подписываемся на уведомление
//    Добавляем нового слушателя
//    formula.subscribe('table.select', ()=>{}))
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
        }
    }
}

//Example
//
// const emitter = new Emitter()
//
// emitter.subscribe('max', data=>console.log('sub', data))
// emitter.emit('max', '111')