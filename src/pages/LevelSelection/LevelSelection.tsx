interface LevelSelectionProps {
  selectedClass: number
  onSelectLevel: (level: 'easy' | 'hard') => void
  onBack: () => void
}

export default function LevelSelection({
  selectedClass,
  onSelectLevel,
  onBack,
}: LevelSelectionProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-purple-100 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={onBack}
          className="mb-8 cursor-pointer font-semibold text-sky-600 hover:text-sky-800"
        >
          ← Назад
        </button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-800">
             {selectedClass} клас
          </h1>
          
          <h2 className="mt-6 text-2xl font-bold text-slate-700">
            Обері рівень складності          </h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          <button
            onClick={() => onSelectLevel('easy')}
            className="cursor-pointer rounded-3xl border-2 border-white bg-white p-8 shadow-md transition hover:-translate-y-2 hover:border-green-400 hover:shadow-xl"
          >
            <div className="text-6xl">🌱</div>
            <h3 className="mt-5 text-2xl font-extrabold text-green-600">
              Легкий рівень
            </h3>
            <div className="mt-5 rounded-2xl border-2 border-sky-300 bg-sky-100 p-4">
              <p className="text-lg font-extrabold text-sky-800">
                🎯 Твоя мета — 9 балів!
              </p>
              <p className="mt-2 font-medium leading-relaxed text-sky-900">
                Обирай цей рівень, якщо прагнеш отримати оцінку до 9 балів включно
              </p>
            </div>
          </button>

          <button
            onClick={() => onSelectLevel('hard')}
            className="cursor-pointer rounded-3xl border-2 border-white bg-white p-8 shadow-md transition hover:-translate-y-2 hover:border-purple-400 hover:shadow-xl"
          >
            <div className="text-6xl">🚀</div>
            <h3 className="mt-5 text-2xl font-extrabold text-purple-600">
              Складний рівень
            </h3>
            <div className="mt-5 rounded-2xl border-2 border-purple-300 bg-purple-100 p-4">
              <p className="text-lg font-extrabold text-purple-800">
                🚀 Прагнеш найвищого результату?
              </p>
              <p className="mt-2 font-medium leading-relaxed text-purple-900">
                Обирай цей рівень, якщо прагнеш отримати 10 або 11 балів!
              </p>
            </div>
          </button>
        </div>
      </div>
    </main>
  )
}
