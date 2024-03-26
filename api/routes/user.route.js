import express from 'express'
import { test } from '../controllers/user.controller.js';
//creating the router

const router=express.Router()

router.get('/test',test);

export default router;