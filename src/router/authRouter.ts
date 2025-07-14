import { AuthInteractor } from '../interactors/Auth.interactor';
import { AuthRepository } from '../repository/AuthRepository';
import { AuthController } from './../controllers/AuthController';
import { Router } from "express";

const repository = new AuthRepository()
const interactor = new AuthInteractor(repository)
const controller = new AuthController(interactor)

const authRouter = Router()

authRouter.post("/register", controller.onCreateUser.bind(controller));

export default authRouter;