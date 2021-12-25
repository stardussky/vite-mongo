// fix IE
function composedPath (el) {
    const path = []
    while (el) {
        path.push(el)
        if (el.tagName === 'HTML') {
            path.push(document)
            path.push(window)
            return path
        }
        el = el.parentNode
    }
}

const uniqueID = (() => {
    const generate = function * () {
        let increment = 0
        while (true) {
            yield increment
            increment++
        }
    }
    const increment = generate()
    return () => increment.next().value
})()

const bindingEl = (el) => {
    const ID = uniqueID()

    let bindEvents = el.dataset.blurs
    if (bindEvents) {
        bindEvents += `, ${ID}`
        return
    }
    el.setAttribute('data-blurs', ID)

    return ID
}

const clickOutSide = (el, callback, e) => {
    const path = e.path || e.composedPath?.() || composedPath(e.target)
    const isInside = ~path.indexOf(el)
    if (!isInside) {
        callback(isInside)
    }
}

const eventsHandler = {}

export default {
    created (el, { value, ...args }) {
        if (typeof value === 'function') {
            const event = clickOutSide.bind(this, el, value)
            document.body.addEventListener('click', event)
            eventsHandler[bindingEl(el)] = event
        }
    },
    beforeUnmount (el) {
        const bindEvents = el.dataset.blurs.split(', ')
        bindEvents.forEach((ID) => {
            const event = eventsHandler[ID]
            document.body.removeEventListener('click', event)
            delete eventsHandler[ID]
        })
    },
}
