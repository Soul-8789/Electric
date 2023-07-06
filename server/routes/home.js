const express = require('express')  ;
const router = express.Router() ;
const {
      getMaster, postMaster, getTransaction, postTransaction, getPrint, postPrint
} = require('../controlers/controls') ;

router.get('/master', getMaster) ;
router.post('/master', postMaster) ;
router.get('/transaction', getTransaction) ;
router.post('/transaction', postTransaction) ;
router.get('/print', getPrint) ;
router.post('/print', postPrint) ;


module.exports = router