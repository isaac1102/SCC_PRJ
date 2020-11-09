const express = require('express');
const router = express.Router();
const { Question } = require('../../models/qna/question');
const { Answer } = require('../../models/qna/answer');


// 전체조회
router.get('/question', function(req, res){
    Question.find({}, function(err, qst){
        if(err) return res.status(500).send({success:false, err})
        if(!qst) return res.send("데이터가 없습니다.")
        res.status(200).send(qst)
    })
});

// 질문 상세 조회
router.get('/question/:id', function (req, res) {
    Question.findOne({id : req.params.id}, function(err, qst){
        if(err) return res.status(500).send({success:false, err})
        if(!qst) return res.send('조회할 데이터가 없습니다.')
        res.status(200).send(qst)
    })
});
 
// 질문 수정
router.put('/question/:id', function (req, res) {    
    Question.updateOne({id : req.params.id}, {$set : req.body}, function (err, qst) {
        if (err) return res.status(500).send({success:false, err});
        res.status(200).send("수정이 완료됐습니다.");
    });
});

// 질문 등록
router.post('/question', function(req, res){
    const question = new Question(req.body)
    question.save(function(err, qst){
        if(err) return res.status(500).json({success:false, err})
        return res.status(200).json({success:true})
    })
}) 

// 질문 삭제
router.delete('/question/:id', function(req,res){
    Question.findOneAndRemove(req.params.id, function (err, qst) {
        if (err) return res.status(500).send("삭제 실패");
        res.status(200).send("삭제됐습니다.");
    })
})
 
 
// 답변 조회 
router.get('/answer/:id', function (req, res) {
    Answer.findOne({id : req.params.id}, function(err, qst){
        if(err) return res.status(500).send({success:false, err})
        if(!qst) return res.send('답변이 없습니다.')
        res.status(200).send(qst)
    })
});
 
// 답변 수정
router.put('/answer/:id', function (req, res) {    
    Answer.updateOne({id : req.params.id}, {$set : req.body}, function (err, qst) {
        if (err) return res.status(500).send({success:false, err});
        res.status(200).send("답변이 수정됐습니다.");
    });
});

// 답변 등록
router.post('/answer', function(req, res){
    const answer = new Answer(req.body)
    answer.save(function(err, qst){
        if(err) return res.status(500).json({success:false, err})
        return res.status(200).json({success:true})
    })
}) 

// 답변 삭제
router.delete('/answer/:id', function(req,res){
    Answer.findOneAndRemove(req.params.id, function (err, qst) {
        if (err) return res.status(500).send("삭제 실패");
        res.status(200).send("답변이 삭제됐습니다.");
    })
})



module.exports = router;
