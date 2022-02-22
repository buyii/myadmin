
export const SET_Expire = 'Expire'   //设置跳转

export function setExpire(expire = false){
    return {
        type: SET_Expire,
        expire: expire
    }
 }

