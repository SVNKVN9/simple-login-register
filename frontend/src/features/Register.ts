import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Routes } from "../common/Endpoint"

export const useRegisterController = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (form.password !== form.confirmPassword) {
            return alert("Passwords do not match")
        }

        const response = await fetch(Routes.Register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: form.email,
                username: form.username,
                password: form.password
            }),
        })

        const data = await response.json()

        if (response.ok) {
            navigate('/login')
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
            username: form.username,
            password: form.password,
            confirmPassword: form.confirmPassword
        },
        action: {
            handleSubmit,
            handlerChange
        }
    }
}