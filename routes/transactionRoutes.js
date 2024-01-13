const express=require('express')
const { addTransaction, getAllTransaction ,editTransaction,deleteTransaction} = require('../controllers/transactionController')

const router=express.Router()

//add transaction
router.post('/add-transaction',addTransaction)

// edit -transaction
router.post('/edit-transaction',editTransaction)
router.post('/delete-transaction',deleteTransaction)

//get 
router.post('/get-transaction',getAllTransaction)

module.exports=router