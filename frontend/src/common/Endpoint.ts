const BaseURL = (path: string) => `http://localhost:3000/api${path}`

const Endpoints = {
    User: (path: string) => `${BaseURL('/user')}${path}`,
}

export const Routes = {
    Home: Endpoints.User('/'),
    Login: Endpoints.User('/login'),
    Register: Endpoints.User('/register'),
}