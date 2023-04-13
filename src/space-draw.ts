import {webhook} from './webhook'
import {drawPrizeMarketDetails} from "./services"

export const spaceDraw = async (taskId: string) => {
    const {errorCode, prizeName} = await drawPrizeMarketDetails(taskId)
    if (errorCode === "User_Not_Chance") {
        webhook.info('🎉【抽奖】已抽奖')
        return
    }
    prizeName && webhook.info(`🎉【抽奖】${prizeName}`)
}