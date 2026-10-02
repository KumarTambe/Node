import { getAllJobs, getOneJob, addJob, updateJob, deleteJob } from "../controllers/jobController.js";
import express from 'express'
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router()

router.get('/', getAllJobs)
router.get('/:id', getOneJob)
router.post('/', authenticate, addJob)
router.put('/:id', authenticate, updateJob)
router.delete('/:id', authenticate, deleteJob)

export default router