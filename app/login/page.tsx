export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Login</h1>
            <div className="flex flex-col gap-4 mt-4">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-gray-300 rounded-md"
                />
                <button className="p-2 bg-blue-500 text-white rounded-md">
                    Login
                </button>
            </div>
        </div>
    )
}