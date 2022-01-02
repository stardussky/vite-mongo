module.exports = (fn) => (req, res, next, ...args) => Promise.resolve(fn.apply(this, [req, res, next, args])).catch(next)
