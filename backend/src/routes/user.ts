import { Router } from 'express'
import { getUser, RegisterUser, LoginUser } from '../controllers/User'
import { Auth } from '../middlewares/Auth'

const router = Router()

router.get('/', [Auth], getUser)
router.post('/register', RegisterUser)
router.post('/login', LoginUser)

export default router