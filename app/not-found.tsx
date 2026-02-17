import Link from 'next/link'

export default function NotFound() {
  return (
    <section>
      <div className="space-y-6">
        <div>
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-red-500">
            404
          </h1>
          <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
            Page Not Found
          </h2>
          <p className="mb-6 text-gray-600">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="flex gap-4">
          <Link 
            href="/" 
            className="inline-block px-6 py-2 bg-white text-black rounded border border-gray-300 hover:bg-gray-100 transition"
          >
            Go Back Home
          </Link>
          <Link 
            href="/blog" 
            className="inline-block px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
          >
            View Blog
          </Link>
        </div>
      </div>
    </section>
  )
}
