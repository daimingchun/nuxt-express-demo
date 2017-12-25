import { Router } from 'express'

import users from './api/users'

const router = Router()

// Add USERS Routes
router.use(users)

export default router
