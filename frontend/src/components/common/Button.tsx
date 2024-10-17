import { ButtonHTMLAttributes } from "react";

export default function Button (props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            {...props}
        >
            {props.children}
        </button>
    )
}