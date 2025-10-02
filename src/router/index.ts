import Router from 'express';
import customerRoute from '../shop/customer/router/route';
import authRouter from '../api/auth/routes';
import categoryRoute from '../shop/category/router/route';
import mobileRoute from '../shop/mobile/router/route';
import saleRouter from '../shop/sale/router/route';

const router = Router();

router.use("/customer", customerRoute)
router.use("/category", categoryRoute)
router.use('/mobile', mobileRoute)
router.use("/sale", saleRouter)
router.use("/auth", authRouter)

export default router;