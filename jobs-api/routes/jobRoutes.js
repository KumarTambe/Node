import { getAllJobs, getOneJob, addJob, updateJob, deleteJob } from "../controllers/jobController.js";
import express from 'express'

const router = express.Router()

router.get('/', getAllJobs)
router.get('/:id', getOneJob)
router.post('/', addJob)
router.put('/:id', updateJob)
router.delete('/:id', deleteJob)

export default router