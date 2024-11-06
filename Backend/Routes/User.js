import express from 'express'
import { getAllUser } from '../Controllers/UserCn.js'
const userRouter=express.Router()
userRouter.route('/').get(getAllUser)


export default userRouter