import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none" {...props} />
}