import { quizzes } from '../../data/quizzez'

interface QuizSelectionProps {
  selectedClass: number
  onSelectQuiz: (quizId: string) => void
  onBack: () => void
}

export default function QuizSelection({
  selectedClass,
  onSelectQuiz,
  onBack,
}: QuizSelectionProps) {
  const availableQuizzes = quizzes.filter(
    (quiz) => quiz.grade === selectedClass,
  )

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-100 px-4 py-12">
      <div className="mx-auto max-w-4xl">

        <button
          onClick={onBack}
          className="mb-8 cursor-pointer font-semibold text-sky-600 hover:text-sky-800"
        >
          ← Назад до вибору рівня
        </button>

        <header className="mb-12 text-center">
          <div className="mb-4 text-6xl">🎵</div>

          <h1 className="text-4xl font-extrabold text-slate-800">
            Обери тест
          </h1>

          <p className="mt-3 text-xl text-slate-600">
            Музична література · {selectedClass} клас
          </p>
        </header>

        {availableQuizzes.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {availableQuizzes.map((quiz, index) => (
              <button
                key={quiz.id}
                onClick={() => onSelectQuiz(quiz.id)}
                className="group cursor-pointer rounded-3xl border-2 border-white bg-white p-7 text-left shadow-md transition hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-5xl">
                    {index === 0 ? '🍂' : '🎼'}
                  </span>

                  <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                    {quiz.questions.length} запитань
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-800 group-hover:text-amber-600">
                  {quiz.title}
                </h2>

                <p className="mt-3 text-slate-500">
                  {quiz.subject}
                </p>

                <p className="mt-5 font-bold text-sky-600">
                  Почати тест →
                </p>
              </button>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white p-10 text-center shadow-md">
            <div className="text-5xl">📚</div>

            <h2 className="mt-4 text-2xl font-bold text-slate-800">
              Тестів поки немає
            </h2>

            <p className="mt-3 text-slate-500">
              Незабаром тут з’являться нові завдання!
            </p>
          </div>
        )}

      </div>
    </main>
  )
}