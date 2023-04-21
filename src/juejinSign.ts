import {webhook} from './webhook'
import {juejinDraw, juejinSign, userSign} from "./services"

export const juejin = async () => {
    const res = await juejinSign()
    console.log("🚀 ~ file: juejinSign.ts:6 ~ checkIn ~ res:", res)
    // if (isSign === true) {
    //     webhook.info('🍩【签到】已签到')
    //     return
    // }
    webhook.info(JSON.stringify(res))
    const res2 = await juejinDraw()
    console.log("🚀 ~ file: juejinSign.ts:6 ~ checkIn ~ res2:", res2)
    // if (isSign === true) {
    //     webhook.info('🍩【签到】已签到')
    //     return
    // }
    webhook.info(JSON.stringify(res2))
}