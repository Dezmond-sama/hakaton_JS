import {Router} from "express";
import publicRouter from './routes/public/'

const router = Router()

router.use("/public", publicRouter)

export default router