import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Routes } from "../common/Endpoint"

export const useLoginController = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const response = await fetch(Routes.Login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password
            }),
        })

        const data = await response.json()

        if (response.ok) {
            localStorage.setItem('token', data.data)

            navigate('/home')
        } else {
            alert(data.message)
        }
    }

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return {
        data: {
            email: form.email,
            password: form.password
        },
        action: {
            handlerChange,
            handleSubmit
        }
    }
}