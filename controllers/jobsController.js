import Job from "../Models/Job.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import unAuthenticatedError from "../errors/unauthenticated.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const getAllJobs = async (req, res) => {
  res.send("get all Jobs");
};
const updateJob = async (req, res) => {
  res.send("update Job");
};
const deleteJob = async (req, res) => {
  res.send("delete Job");
};
const showStats = async (req, res) => {
  res.send("show stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
