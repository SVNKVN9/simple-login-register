import { useHomeController } from "../features/Home"

const Home = () => {
    const { action, data } = useHomeController()

    return <div>
        <h1>Welcome, {data.username}</h1>

        <button onClick={action.handleLogout}>Logout</button>
    </div>
}

export default Home
