import to from 'await-to-js'
import {webhook} from "./webhook"
import {checkIn} from "./check-in"
import BigNumber from "bignumber.js"
import {spaceDraw} from "./space-draw"
import {toBytesUnit} from "@hudiemon/utils"
import {getUserInfoForPortal} from "./services";
import { juejin } from './juejinSign'

(async () => {
    if (!process.env.COOKIE) {
        webhook.error('【secrets.COOKIE】未设置')
        return
    }
    const userinfo = await getUserInfoForPortal();
    webhook.info(`👤【用户】${userinfo.loginName.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}`);
    await to(checkIn());
    await to(juejin());
    await to(spaceDraw("TASK_SIGNIN"));
    await to(spaceDraw("TASK_SIGNIN_PHOTOS"));
    await to(spaceDraw("TASK_2022_FLDFS_KJ"));
    const lastUserinfo = await getUserInfoForPortal();
    webhook.info(`📈【容量提升】${toBytesUnit(new BigNumber(lastUserinfo.capacity).minus(userinfo.capacity).toNumber())}M`);
    webhook.info(`🔋【网盘容量】${toBytesUnit(new BigNumber(lastUserinfo.capacity).minus(lastUserinfo.available).toNumber())} / ${toBytesUnit(lastUserinfo.capacity)}`);

})().finally(webhook.finally)
