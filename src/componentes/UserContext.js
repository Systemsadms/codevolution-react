import React from 'react'

const UserContex = React.createContext('codevolution')

const UserProvider = UserContex.Provider
const UserConsumer = UserContex.Consumer

export {UserProvider, UserConsumer}

export default UserContex