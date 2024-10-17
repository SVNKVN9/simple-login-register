import { useRegisterController } from "../features/Register"
import Button from "./common/Button"
import Input from "./common/Input"
import Form from "./layouts/Form"

const Register = () => {
    const { action, data } = useRegisterController()

    return <Form onSubmit={action.handleSubmit}>
        <Input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={action.handlerChange}
        />
        <Input
            placeholder="Username"
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={action.handlerChange}
        />
        <Input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={action.handlerChange}
        />
        <Input
            placeholder="Confirm Password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={action.handlerChange}
        />

        <Button type="submit">Register</Button>
    </Form>
}

export default Register