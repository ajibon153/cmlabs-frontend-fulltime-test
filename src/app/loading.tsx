export default function Loading() {
  return (
    <div className="min-h-screen bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center px-4 py-10 text-center">
      <div className="w-full max-w-3xl space-y-6">
        <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-slate-400 animate-pulse" />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
          <div className="mb-4 h-8 w-3/4 rounded-full bg-slate-200 animate-pulse" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded-full bg-slate-200 animate-pulse" />
            <div className="h-4 w-5/6 rounded-full bg-slate-200 animate-pulse" />
            <div className="h-4 w-2/3 rounded-full bg-slate-200 animate-pulse" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-40 rounded-3xl bg-slate-200 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
