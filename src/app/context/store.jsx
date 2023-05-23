'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react"

const GlobalContext = createContext({
    userid: "",
    setUserId: () => "",
    data: [],
    setData: () => []
})

export const GlobalContextProvider = ({ children }) => {
    const [userid, setUserId] = useState('')
    const [userData, setUserData] = useState([])

    return (
        <GlobalContext.Provider value={{ userid, setUserId, userData, setUserData }}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalContext)