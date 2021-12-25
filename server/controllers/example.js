const Example = require('@/db/models/example')

exports.example = async (req, res) => {
    // const example = await Example.create({ msg: 'Hello World' })
    // await example.save()
    // Example.collection.drop()
    res.send('server index')
}
