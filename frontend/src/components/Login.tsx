import { useLoginController } from "../features/Login"
import Button from "./common/Button"
import Input from "./common/Input"
import Form from "./layouts/Form"

const Login = () => {
    const { action, data } = useLoginController()

    return <Form onSubmit={action.handleSubmit}>
        <Input
        placeholder="Email"
            type="email"
            name="email"
            value={data.email}
            onChange={action.handlerChange}
        />
        <Input
            placeholder="Password"
            type="password"
            name="password"
            value={data.password}
            onChange={action.handlerChange}
        />
        <Button type="submit">Login</Button>
    </Form>
}

export default Login