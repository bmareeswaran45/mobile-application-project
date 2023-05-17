const express = require ('express')
const mar = require('../model/user')
const MobileController = require('../Controller/user1')
const router = express.Router();




router.get('/',MobileController.getData)
router.post('/',MobileController.postData)
router.get('/:id',MobileController.getById)
router.put('/:id',MobileController.updatemobile)
router.delete('/:id',MobileController.deletemobile)
module.exports = router;
