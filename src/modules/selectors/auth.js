export const currValue = (store) => store.auth.value ;
export const isUserAuth = (store) => store.auth.isAuth ;
export const userData = (store) => store.auth.userData?.user ;
export const userRole = (store) => store.auth.userData?.user?.role ;
