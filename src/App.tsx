import { useState } from 'react'

import ClassSelection from './pages/ClassSelection/ClassSelection'
import LevelSelection from './pages/LevelSelection/LevelSelection'
import QuizSelection from './pages/QuizSelection/QuizSelection'
import HardQuizSelection from './pages/HardQuizSelection/HardQuizSelection'

import Quiz from './components/Quiz/Quiz'

import { quizzes } from './data/quizzez'
import { hardTasks } from './data/hardTasks'

function App() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null)

  const [selectedLevel, setSelectedLevel] = useState<
    'easy' | 'hard' | null
  >(null)

  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null)

  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)

  const handleBackToClasses = () => {
    setSelectedQuizId(null)
    setSelectedTaskId(null)
    setSelectedLevel(null)
    setSelectedClass(null)
  }

  const handleBackToLevels = () => {
    setSelectedQuizId(null)
    setSelectedTaskId(null)
    setSelectedLevel(null)
  }

  const handleBackToQuizList = () => {
    setSelectedQuizId(null)
  }

  const handleBackToTaskList = () => {
    setSelectedTaskId(null)
  }

  // Вибір класу
  if (selectedClass === null) {
    return (
      <ClassSelection onSelectClass={setSelectedClass} />
    )
  }

  // Вибір рівня
  if (selectedLevel === null) {
    return (
      <LevelSelection
        selectedClass={selectedClass}
        onSelectLevel={setSelectedLevel}
        onBack={handleBackToClasses}
      />
    )
  }

  // Простий рівень — інтерактивні тести
  if (selectedClass === 4 && selectedLevel === 'easy') {
    if (selectedQuizId !== null) {
      const selectedQuiz = quizzes.find(
        (quiz) => quiz.id === selectedQuizId,
      )

      if (selectedQuiz) {
        return (
          <Quiz
            quiz={selectedQuiz}
            onBack={handleBackToQuizList}
          />
        )
      }
    }

    return (
      <QuizSelection
        selectedClass={selectedClass}
        onSelectQuiz={setSelectedQuizId}
        onBack={handleBackToLevels}
      />
    )
  }

  // Складний рівень — творчі завдання
  if (selectedClass === 4 && selectedLevel === 'hard') {
    if (selectedTaskId !== null) {
      const selectedTask = hardTasks.find(
        (task) => task.id === selectedTaskId,
      )

      if (selectedTask) {
        return (
          <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-100 px-4 py-12">
            <div className="mx-auto max-w-3xl">
              <button
                onClick={handleBackToTaskList}
                className="mb-8 cursor-pointer font-semibold text-sky-600 hover:text-sky-800"
              >
                ← Назад до творчих завдань
              </button>

              <div className="rounded-3xl bg-white p-8 shadow-lg sm:p-10">
                <div className="mb-5 text-5xl">
                  {selectedTask.type === 'essay' ? '📝' : '🎨'}
                </div>

                <h1 className="text-3xl font-extrabold text-slate-800">
                  {selectedTask.title}
                </h1>

                <p className="mt-3 text-slate-500">
                  {selectedTask.subject} · {selectedTask.grade} клас
                </p>

                <div className="mt-8">
                  <h2 className="text-xl font-bold text-slate-800">
                    Умова завдання
                  </h2>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    {selectedTask.description}
                  </p>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-bold text-slate-800">
                    Що потрібно зробити?
                  </h2>

                  <ul className="mt-4 space-y-3">
                    {selectedTask.requirements.map((requirement, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-slate-600"
                      >
                        <span className="font-bold text-violet-600">
                          {index + 1}.
                        </span>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 rounded-2xl bg-violet-50 p-5">
                  <h2 className="font-bold text-violet-800">
                    Формат готової роботи
                  </h2>

                  <p className="mt-2 text-violet-700">
                    {selectedTask.resultFormat}
                  </p>
                </div>

                <p className="mt-6 text-sm text-slate-500">
                  Виконай роботу окремо від сайту та збережи її у вказаному форматі.
                </p>
              </div>
            </div>
          </main>
        )
      }
    }

    return (
      <HardQuizSelection
        selectedClass={selectedClass}
        onSelectTask={setSelectedTaskId}
        onBack={handleBackToLevels}
      />
    )
  }

  // Інші класи та рівні
  return (
    <main className="min-h-screen bg-sky-50 px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <button
          onClick={handleBackToLevels}
          className="mb-10 cursor-pointer rounded-xl bg-white px-5 py-3 font-semibold text-sky-600 shadow hover:bg-sky-100"
        >
          ← Назад до вибору рівня
        </button>

        <h1 className="text-3xl font-bold text-slate-800">
          Чудовий вибір! 🎉
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          {selectedClass} клас
        </p>

        <p className="mt-2 text-xl text-slate-600">
          Рівень: {selectedLevel === 'easy' ? 'Простий' : 'Складний'}
        </p>

        <p className="mt-6 text-slate-500">
          Завдання для цього класу та рівня ще готуються.
        </p>
      </div>
    </main>
  )
}

export default App
