import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Routes } from "../common/Endpoint"

export const useHomeController = () => {
   const [username, setUsername] = useState('')

    const navigate = useNavigate()

    const fetchUser = async (token: string) => {
        const response = await fetch(Routes.Home, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (response.ok) {
            const data = await response.json()

            setUsername(data.data.username)
        } else {
            navigate('/login')
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) return navigate('/login')

        fetchUser(token)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')

        navigate('/login')
    }

    return {
        data: {
            username
        },
        action: {
            handleLogout
        }
    }
}