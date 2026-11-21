import { hardTasks } from '../../data/hardTasks'

interface HardQuizSelectionProps {
  selectedClass: number
  onSelectTask: (taskId: string) => void
  onBack: () => void
}

export default function HardQuizSelection({
  selectedClass,
  onSelectTask,
  onBack,
}: HardQuizSelectionProps) {
  const availableTasks = hardTasks.filter(
    (task) => task.grade === selectedClass,
  )

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-100 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <button
          onClick={onBack}
          className="mb-8 cursor-pointer font-semibold text-sky-600 hover:text-sky-800"
        >
          ← Назад до вибору рівня
        </button>

        <header className="mb-12 text-center">
          <div className="mb-4 text-6xl">🎨</div>

          <h1 className="text-4xl font-extrabold text-slate-800">
            Творчі завдання
          </h1>

          <p className="mt-3 text-xl text-slate-600">
            Музична література · {selectedClass} клас
          </p>

          <p className="mt-2 text-slate-500">
            Створюй власні роботи, досліджуй музику та проявляй фантазію!
          </p>
        </header>

        {availableTasks.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {availableTasks.map((task) => (
              <button
                key={task.id}
                onClick={() => onSelectTask(task.id)}
                className="group cursor-pointer rounded-3xl border-2 border-white bg-white p-7 text-left shadow-md transition hover:-translate-y-2 hover:border-violet-400 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-5xl">
                    {task.type === 'essay' ? '📝' : '🎨'}
                  </span>

                  <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
                    {task.type === 'essay' ? 'Есе' : 'Презентація'}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-800 group-hover:text-violet-600">
                  {task.title}
                </h2>

                <p className="mt-3 text-slate-500">
                  {task.subject}
                </p>

                <p className="mt-5 text-sm text-slate-500">
                  Формат: {task.resultFormat}
                </p>

                <p className="mt-5 font-bold text-violet-600">
                  Переглянути завдання →
                </p>
              </button>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white p-10 text-center shadow-md">
            <div className="text-5xl">📚</div>

            <h2 className="mt-4 text-2xl font-bold text-slate-800">
              Завдання готуються!
            </h2>

            <p className="mt-3 text-slate-500">
              Незабаром тут з’являться нові творчі роботи.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
