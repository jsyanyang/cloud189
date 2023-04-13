import {webhook} from './webhook'
import {userSign} from "./services"

export const checkIn = async () => {
    const {netdiskBonus, isSign} = await userSign()
    if (isSign === true) {
        webhook.info('🍩【签到】已签到')
        return
    }
    webhook.info(`🍩【签到】签到成功，获得${netdiskBonus}M`)
}