import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404</h1>
            <h2 className="text-2xl font-bold">Page Not Found</h2>
            <Link href="/">
                <button className="text-blue-500">Go back to home</button>
            </Link>
        </div>
    )
}