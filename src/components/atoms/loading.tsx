export default function Loading() {
    return (
        <div className="mt-8 md:mt-12">
            <div className="mx-auto max-w-3xl px-2">
                <div className="h-6 mb-4 w-60 rounded-full bg-gray-200 animate-pulse" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="h-40 rounded-xl bg-gray-200 animate-pulse" />
                    ))}
                </div>
            </div>
        </div>
    )
}
