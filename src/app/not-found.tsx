import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        You either tried some shady route or you came here by mistake. Don't
        worry, it happens to the best of us. Click on the button below to
        return:
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-green-900 text-white rounded hover:bg-green-600 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
