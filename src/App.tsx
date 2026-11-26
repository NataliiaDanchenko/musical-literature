
import { useEffect, useState } from 'react'

import ClassSelection from './pages/ClassSelection/ClassSelection'
import LevelSelection from './pages/LevelSelection/LevelSelection'
import QuizSelection from './pages/QuizSelection/QuizSelection'
import HardQuizSelection from './pages/HardQuizSelection/HardQuizSelection'

import Quiz from './components/Quiz/Quiz'

import { quizzes } from './data/quizzez'
import { hardTasks } from './data/hardTasks'

type AppState = {
  selectedClass: number | null
  selectedLevel: 'easy' | 'hard' | null
  selectedQuizId: string | null
  selectedTaskId: string | null
}

const initialState: AppState = {
  selectedClass: null,
  selectedLevel: null,
  selectedQuizId: null,
  selectedTaskId: null,
}

function App() {
  const [appState, setAppState] = useState<AppState>(() => {
    return window.history.state?.appState ?? initialState
  })

  const {
    selectedClass,
    selectedLevel,
    selectedQuizId,
    selectedTaskId,
  } = appState

  // Синхронізація стану з історією браузера
  useEffect(() => {
    // Зберігаємо початковий стан поточної сторінки
    if (!window.history.state?.appState) {
      window.history.replaceState(
        { appState: initialState },
        '',
      )
    }

    // Обробка кнопок браузера "Назад" і "Вперед"
    const handlePopState = (event: PopStateEvent) => {
      setAppState(event.state?.appState ?? initialState)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  // Перехід із записом нового стану в історію браузера
  const navigate = (nextState: AppState) => {
    window.history.pushState(
      { appState: nextState },
      '',
    )

    setAppState(nextState)
  }

  // Підтримувані класи: від 3-го до 8-го
  const isSupportedClass =
    selectedClass !== null &&
    selectedClass >= 3 &&
    selectedClass <= 8

  // Повернення до вибору класу
  const handleBackToClasses = () => {
    navigate({
      selectedClass: null,
      selectedLevel: null,
      selectedQuizId: null,
      selectedTaskId: null,
    })
  }

  // Повернення до вибору рівня
  const handleBackToLevels = () => {
    navigate({
      ...appState,
      selectedLevel: null,
      selectedQuizId: null,
      selectedTaskId: null,
    })
  }

  // Повернення до каталогу тестів
  const handleBackToQuizList = () => {
    navigate({
      ...appState,
      selectedQuizId: null,
    })
  }

  // Повернення до каталогу творчих завдань
  const handleBackToTaskList = () => {
    navigate({
      ...appState,
      selectedTaskId: null,
    })
  }

  // Вибір класу
  if (selectedClass === null) {
    return (
      <ClassSelection
        onSelectClass={(value) =>
          navigate({
            ...appState,
            selectedClass: value,
            selectedLevel: null,
            selectedQuizId: null,
            selectedTaskId: null,
          })
        }
      />
    )
  }

  // Вибір рівня
  if (selectedLevel === null) {
    return (
      <LevelSelection
        selectedClass={selectedClass}
        onSelectLevel={(value) =>
          navigate({
            ...appState,
            selectedLevel: value,
            selectedQuizId: null,
            selectedTaskId: null,
          })
        }
        onBack={handleBackToClasses}
      />
    )
  }

  // Легкий рівень — тести
  if (isSupportedClass && selectedLevel === 'easy') {
    // Якщо учень обрав тест
    if (selectedQuizId !== null) {
      const selectedQuiz = quizzes.find(
        (quiz) =>
          quiz.id === selectedQuizId &&
          quiz.grade === selectedClass,
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

    // Каталог тестів для обраного класу
    return (
      <QuizSelection
        selectedClass={selectedClass}
        onSelectQuiz={(value) =>
          navigate({
            ...appState,
            selectedQuizId: value,
          })
        }
        onBack={handleBackToLevels}
      />
    )
  }

  // Складний рівень — творчі завдання
  if (isSupportedClass && selectedLevel === 'hard') {
    // Якщо учень обрав творче завдання
    if (selectedTaskId !== null) {
      const selectedTask = hardTasks.find(
        (task) =>
          task.id === selectedTaskId &&
          task.grade === selectedClass,
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

                  <p className="mt-3 whitespace-pre-line leading-relaxed text-slate-600">
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
                  Виконай роботу окремо від сайту та надішли її у вказаному форматі.
                </p>
              </div>
            </div>
          </main>
        )
      }
    }

    // Каталог творчих завдань для обраного класу
    return (
      <HardQuizSelection
        selectedClass={selectedClass}
        onSelectTask={(value) =>
          navigate({
            ...appState,
            selectedTaskId: value,
          })
        }
        onBack={handleBackToLevels}
      />
    )
  }

  // Інші класи або непідтримувані рівні
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
          Рівень: {selectedLevel === 'easy' ? 'Легкий' : 'Складний'}
        </p>

        <p className="mt-6 text-slate-500">
          Завдання для цього класу та рівня ще готуються.
        </p>
      </div>
    </main>
  )
}

export default App
