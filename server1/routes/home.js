const express = require('express')  ;
const router = express.Router() ;
const {
      getMaster, postMaster, getTransaction, postTransaction, getPrint, postPrint
} = require('../controlers/controls') ;
const validateToken = require('../middleware/validateTokenHandler');

router.get('/master', validateToken, getMaster) ;
router.post('/master', validateToken, postMaster) ;
router.get('/transaction', validateToken,getTransaction) ;
router.post('/transaction', validateToken,postTransaction) ;
router.get('/print', validateToken,getPrint) ;
router.post('/print', validateToken,postPrint) ;


module.exports = router