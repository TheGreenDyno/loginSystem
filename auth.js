const bcrypt = require('bcrypt')
const e = require('express')

async function setUser(password) {
    try {
        return await bcrypt.hash(password, 10)
    } catch (error) {
        console.log(error)
    }

}

async function getUser(plainPassword, hash) {
    return await bcrypt.compare(plainPassword, hash)
}

module.exports = { setUser, getUser }