import { useRegisterController } from "../features/Register"

const Register = () => {
    const { action, data } = useRegisterController()

    return <div>
        <form onSubmit={action.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={action.handlerChange}
            />
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                value={data.username}
                onChange={action.handlerChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={action.handlerChange}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={action.handlerChange}
            />
            <button type="submit">Register</button>
        </form>
    </div>
}

export default Register