import { useHomeController } from "../features/Home"
import Button from "./common/Button"

const Home = () => {
    const { action, data } = useHomeController()

    return <div className="p-8">
        <div className="flex gap-4">
            <h1 className="text-2xl font-bold">Welcome, {data.username}</h1>

            <Button onClick={action.handleLogout}>Logout</Button>
        </div>
    </div>

}

export default Home
