export default function Loading() {
    return (
        <div className="mt-8 md:mt-12">
            <div className="mx-auto max-w-5xl px-4">
                <div className="h-8 mb-6 w-72 rounded-full bg-gray-200 animate-pulse" />
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="h-72 rounded-2xl bg-gray-200 animate-pulse" />
                    <div className="space-y-4">
                        <div className="h-10 rounded-full bg-gray-200 animate-pulse" />
                        <div className="h-8 rounded-full bg-gray-200 animate-pulse" />
                        <div className="h-52 rounded-2xl bg-gray-200 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    )
}
