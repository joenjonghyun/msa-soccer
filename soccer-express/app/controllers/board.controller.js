const db = require('../models/index')
const BoardSchema = db.board
exports.write = (req, res)=>{
    new BoardSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
}

exports.boardlist = (req, res)=>{
    console.log(`### BoardController access`)
    BoardSchema.find()
    .exec((err, Boards) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, Boards})
    })

}