const authStorage = new Map()//storing  sessionId in hashMap. This resets if server goes down

function userIdSetter(id,user){
    console.log(`session success`)
    return authStorage.set(id,user)
   
}

function userIdGetter(id){
    return authStorage.get(id)
}

module.exports = {userIdSetter,userIdGetter}