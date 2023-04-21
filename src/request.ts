import axios from 'axios';
// console.log("🚀 ~ file: request.ts:2 ~ axios:", axios)
import {webhook} from "./webhook";
import {errorText} from './error-text';

export const request = axios.create({
    headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/107.0.0.0"
    },
    // proxy: {
    //     host: '127.0.0.1',
    //     port: '1080'
    // }
});

request.interceptors.response.use(
    (response) => {
        // console.log("🚀 ~ file: request.ts:13 ~ response:", response)
        return response.data
    },
    (error) => {
        console.log("🚀 ~ file: request.ts:17 ~ error:", error)
        const {errorCode} = error.response.data;
        webhook.error(errorText[errorCode])
        return Promise.reject(errorText[errorCode]);
    });