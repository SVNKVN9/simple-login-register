import { FormEvent } from "react"

interface FormLayoutProps {
    children: React.ReactNode
    onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

export default function Form({ children, onSubmit }: FormLayoutProps) {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <div className="bg-gray-500 p-8 rounded-lg shadow-lg">
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col gap-4">
                            {children}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}