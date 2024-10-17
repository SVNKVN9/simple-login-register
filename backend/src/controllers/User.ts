import { Request, Response } from "express"
import HTTPResponse from "../utils/HTTPResponse"
import User from "../models/User"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config"

export const getUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.split(" ")[1] as string

        const payload = jwt.decode(token) as jwt.JwtPayload

        const user = await User.findOne({ email: payload.email }, { password: 0 })

        HTTPResponse.Success(res, { message: "User fetched successfully", data: user })
    } catch (error: any) {
        const { message } = error

        HTTPResponse.Error(res, { message: message || "Server Error" })
    }
}

export const RegisterUser = async (req: Request, res: Response) => {
    try {
        const { email, username, password } = req.body

        const isUser = await User.exists({ email: email })

        if (isUser) return HTTPResponse.Error(res, { message: "User already exists" })

        const hashPasword = await bcrypt.hash(password, 10)

        const user = new User({
            email: email,
            username: username,
            password: hashPasword
        })

        await user.save()

        HTTPResponse.Success(res, { message: "User created successfully" })
    } catch (error: any) {
        const { message } = error

        HTTPResponse.Error(res, { message: message || "Server Error" })
    }
}

export const LoginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email: email })

        if (!user) return HTTPResponse.Error(res, { message: "email does not exist" })

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) return HTTPResponse.Error(res, { message: "Wrong password" })

        const token = jwt.sign({ email: email, username: user.username }, JWT_SECRET, { expiresIn: "1d" })

        HTTPResponse.Success(res, {
            message: "User logged in successfully",
            data: token
        })
    } catch (error: any) {
        const { message } = error

        HTTPResponse.Error(res, { message: message || "Server Error" })
    }
}
