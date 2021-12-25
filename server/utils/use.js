module.exports = (fn) => (...args) => Promise.resolve(fn.apply(this, args)).catch(next)
