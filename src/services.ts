import {request} from './request'
import {AxiosRequestConfig} from 'axios'

// 获取用户基础信息
export const getUserInfoForPortal = (): Promise<{ loginName: string, available: number, capacity: number }> => request.get('http://cloud.189.cn/api/open/user/getUserInfoForPortal.action', {
    params: {
        noCache: Math.random()
    },
    headers: {
        Cookie: process.env.COOKIE,
        Accept: "application/json;charset=UTF-8"
    }
})
export const getDrawTimes = (config: AxiosRequestConfig) => request.get('http://m.cloud.189.cn/v2/getDrawTimes.action', config)
export const drawPrizeMarketDetails = (taskId: string): Promise<{ errorCode: string, prizeName: string }> =>
    request.get('http://m.cloud.189.cn/v2/drawPrizeMarketDetails.action', {
        params: {
            taskId,
            activityId: "ACT_SIGNIN",
            noCache: Math.random()
        },
        headers: {
            Cookie: process.env.COOKIE,
        }
    })
export const openFortuneBoxMarket = (config: AxiosRequestConfig) => request.get("http://m.cloud.189.cn/v2/openFortuneBoxMarket.action", config)
/**
 * 获取 accessToken
 */
export const getAccessTokenBySsKey = (config: AxiosRequestConfig): Promise<{ accessToken: string }> => request.get("http://api.cloud.189.cn/open/oauth2/getAccessTokenBySsKey.action", config)
/**
 * 签到
 */
export const userSign = (): Promise<any> => request.get("http://api.cloud.189.cn/mkt/userSign.action", {
    params: {
        rand: +new Date,
        clientType: "TELEANDROID",
        version: '9.2.1',
        model: "PDHM00"
    },
    headers: {
        Referer: "http://m.cloud.189.cn/zhuanti/2016/sign/index.jsp?albumBackupOpened=1",
        Host: "m.cloud.189.cn",
        "Accept-Encoding": "gzip, deflate",
        Cookie: process.env.COOKIE
    }
})
//掘金签到
export const juejinSign = (): Promise<any> => request.post("https://api.juejin.cn/growth_api/v1/check_in?aid=2608&uuid=7137179652339336745&spider=0")
//掘金抽奖
export const juejinDraw = (): Promise<any> => request.post("https://api.juejin.cn/growth_api/v1/lottery/draw?aid=2608&uuid=7137179652339336745&spider=0&msToken=Qtkjf8n-oXCYfjQ2aypxgf_TWZ79VK_BsPcjYDW-MZtcQvEOh4cs2XQRn4hsY5Ay5LMjcAZLurPtcs5xneBZsiaFqfaCU0dbpW5IkeQxG11YkRhCdasu-UiD1xMa9Bk%3D&a_bogus=DJ4DfOgQMsm1FhVm6hDz9HDEPIy0YW4igZENI2wbdtLQ")
