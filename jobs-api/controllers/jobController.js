import jobs from '../data/jobs.js'

export function getAllJobs(req, res) {
    res.status(200).json({ jobs })
}

export function getOneJob(req, res) {
    const job = jobs.find((j) => j.id == req.params.id)
    if (job) {
        return res.status(200).json({ job })
    } else {
        return res.status(404).json({ message: "Job not found" })
    }
}

export function addJob(req, res) {
    const newJob = { id: Date.now(), ...req.body }
    jobs.push(newJob)
    res.status(201).json(newJob)
}

export function updateJob(req, res) {
    const job = jobs.find((j) => j.id == req.params.id)
    if (!job) {
        return res.status(404).json({ message: "Job not found" })
    }
    Object.assign(job, req.body)
    res.status(200).json({ message: "Job updated" })
}

export function deleteJob(req, res) {


    const index = jobs.findIndex(j => j.id == req.params.id)
    if (index === -1) return res.status(404).json({ message: "Job not found" })
    jobs.splice(index, 1)
    res.status(200).json({ message: "Job deleted" })
}