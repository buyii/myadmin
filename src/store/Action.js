
export const SET_NAV_TO = 'NAV_TO'   //设置跳转

export function navTo(path = '/'){
    console.log(path)
    return {
        type: SET_NAV_TO,
        path: path
    }
 }

