import { useLoginController } from "../features/Login"

const Login = () => {
    const { action, data } = useLoginController()

    return <div>
        <form onSubmit={action.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                value={data.email}
                onChange={action.handlerChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                value={data.password}
                onChange={action.handlerChange}
            />
            <button type="submit">Login</button>
        </form>
    </div>
}

export default Login