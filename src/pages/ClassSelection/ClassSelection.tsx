interface ClassSelectionProps {
  onSelectClass: (grade: number) => void
}

const grades = [3, 4, 5, 6, 7, 8]

export default function ClassSelection({
  onSelectClass,
}: ClassSelectionProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-purple-100 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-slate-800 sm:text-5xl">
            Вітаю! 👋
          </h1>

          <h2 className="text-2xl font-bold text-slate-600 sm:text-3xl">
            Обери свій клас
          </h2>
        </header>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {grades.map((grade) => (
            <button
              key={grade}
              type="button"
              onClick={() => onSelectClass(grade)}
              className="group cursor-pointer rounded-3xl border-2 border-white bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-2 hover:border-sky-400 hover:shadow-xl active:scale-95"
            >
              <span className="block text-5xl font-extrabold text-sky-500 transition-colors group-hover:text-purple-500">
                {grade}
              </span>

              <span className="mt-2 block text-lg font-semibold text-slate-500">
                клас
              </span>
            </button>
          ))}
        </div>

        <p className="mt-12 text-center text-lg font-medium text-slate-500">
        </p>
      </div>
    </main>
  )
}
