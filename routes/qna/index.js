const express = require('express');
const router = express.Router();
const { Question } = require('../../models/qna/question');
const question = require('../../models/qna/question');

router.get('/question', function(req, res){
    Question.find({}, function(err, qst){
        if(err) return res.status(500).send({success:false, err})
        if(!qst) return res.send("데이터가 없습니다.")
        res.status(200).send(qst)
    })
});

router.get('/question/:id', function (req, res) {
    Question.findOne({id : req.params.id}, function(err, qst){
        if(err) return res.status(500).send({success:false, err})
        if(!qst) return res.send('조회할 데이터가 없습니다.')
        res.status(200).send(qst)
    })
});

router.post('/question', function(req, res){
    const question = new Question(req.body)
    question.save(function(err, qst){
        if(err) return res.status(500).json({success:false, err})
        return res.status(200).json({success:true})
    })
}) 

router.delete('/question/:id', function(req,res){
    Question.findOneAndRemove(req.params.id, function (err, qst) {
        if (err) return res.status(500).send("삭제 실패");
        res.status(200).send("삭제됨.");
    })
})

module.exports = router;
