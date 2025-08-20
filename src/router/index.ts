import Router from 'express';
import customerRoute from '../shop/customer/router/route';
import authRouter from '../api/auth/routes';
import categoryRoute from '../shop/category/router/route';

const router = Router();

router.use("/customer", customerRoute)
router.use("/category", categoryRoute)
router.use("/auth", authRouter)

export default router;