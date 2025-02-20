import FormLogin from "./FormLogin"

function Login() {
    return (
        <div className="App bg-gray-100 gap-10 bg-cover min-h-screen flex items-center justify-center">
            <div>
                <p className="max-w-2xl text-6xl font-bold mb-5">Sign In & Stay Stylish, Fashion at Your Fingertips!</p>
                <p className="text-2xl max-w-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere et</p>
            </div>
            <FormLogin />
        </div>
    )
}

export default Login