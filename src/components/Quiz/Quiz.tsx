import { useState } from 'react'
import type { QuizData } from '../../data/quizzez'
import { autumnFolkloreQuiz, type QuizQuestion } from '../../data/autumnFolkloreQuiz'

interface QuizProps {
    quiz: QuizData
    onBack: () => void
}

export default function Quiz({ quiz, onBack }: QuizProps) {
    const questions = quiz.questions

    const [answers, setAnswers] = useState<Record<number, string[]>>({})
    const [submitted, setSubmitted] = useState(false)

    const handleAnswer = (questionId: number, optionId: string) => {
        if (submitted) return

        const question = questions.find(
            (item) => item.id === questionId,
        )

        if (!question) return

        setAnswers((previous) => {
            const current = previous[questionId] || []

            if (question.type === 'single') {
                return {
                    ...previous,
                    [questionId]: [optionId],
                }
            }

            const updated = current.includes(optionId)
                ? current.filter((id) => id !== optionId)
                : [...current, optionId]

            return {
                ...previous,
                [questionId]: updated,
            }
        })
    }

    const isCorrect = (question: QuizQuestion) => {
        const selected = answers[question.id] || []

        return (
            selected.length === question.correctAnswers.length &&
            question.correctAnswers.every((id) => selected.includes(id))
        )
    }

    const correctCount = questions.filter(isCorrect).length
    const percentage = Math.round(
        (correctCount / questions.length) * 100,
    )

    const handleSubmit = () => {
        setSubmitted(true)
    }

    const handleRestart = () => {
        setAnswers({})
        setSubmitted(false)
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-100 px-4 py-10">
            <div className="mx-auto max-w-3xl">

                <button
                    onClick={onBack}
                    className="mb-8 cursor-pointer font-semibold text-sky-600 hover:text-sky-800"
                >
                    ← Назад
                </button>

                <header className="mb-10 text-center">
                    <div className="mb-3 text-6xl">🍂</div>

                    <h1 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
                        {quiz.topic}
                    </h1>

                    <p className="mt-3 text-lg text-slate-600">
                        {quiz.subject} · {quiz.grade} клас
                    </p>

                    <p className="mt-2 text-slate-500">
                        Обери правильні відповіді та перевір свої знання!
                    </p>
                </header>

                <div className="mb-8 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-700">
                            Кількість запитань
                        </span>

                        <span className="font-bold text-sky-600">
                            {questions.length}
                        </span>
                    </div>
                </div>

                <div className="space-y-6">
                    {questions.map((question, index) => {
                        const selectedAnswers = answers[question.id] || []
                        const correct = isCorrect(question)

                        return (
                            <section
                                key={question.id}
                                className="rounded-3xl bg-white p-6 shadow-md sm:p-8"
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
                                        Запитання {index + 1}
                                    </span>

                                    {submitted && (
                                        <span
                                            className={`font-bold ${correct ? 'text-green-600' : 'text-red-500'
                                                }`}
                                        >
                                            {correct ? 'Правильно ✓' : 'Помилка ✗'}
                                        </span>
                                    )}
                                </div>

                                <h2 className="mb-5 text-xl font-bold text-slate-800">
                                    {question.question}
                                </h2>

                                {question.type === 'multiple' && !submitted && (
                                    <p className="mb-4 text-sm text-slate-500">
                                        Можна обрати декілька відповідей.
                                    </p>
                                )}

                                <div className="space-y-3">
                                    {question.options.map((option) => {
                                        const selected = selectedAnswers.includes(option.id)
                                        const isRight = question.correctAnswers.includes(
                                            option.id,
                                        )

                                        let optionStyle =
                                            'border-slate-200 hover:border-sky-400 hover:bg-sky-50'

                                        if (selected && !submitted) {
                                            optionStyle = 'border-sky-500 bg-sky-50'
                                        }

                                        if (submitted && isRight) {
                                            optionStyle = 'border-green-500 bg-green-50'
                                        }

                                        if (submitted && selected && !isRight) {
                                            optionStyle = 'border-red-400 bg-red-50'
                                        }

                                        return (
                                            <div key={option.id}>
                                                <button
                                                    type="button"
                                                    disabled={submitted}
                                                    onClick={() =>
                                                        handleAnswer(question.id, option.id)
                                                    }
                                                    className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border-2 p-4 text-left transition ${optionStyle} ${submitted ? 'cursor-default' : ''
                                                        }`}
                                                >
                                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-600">
                                                        {option.id.toUpperCase()}
                                                    </span>

                                                    <span className="font-medium text-slate-700">
                                                        {option.text}
                                                    </span>

                                                    {submitted && isRight && (
                                                        <span className="ml-auto text-green-600">
                                                            ✓
                                                        </span>
                                                    )}
                                                </button>

                                                {submitted && selected && !isRight && (
                                                    <p className="mt-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                                                        {option.feedback}
                                                    </p>
                                                )}

                                                {submitted && isRight && (
                                                    <p className="mt-2 rounded-lg bg-green-50 p-3 text-sm text-green-700">
                                                        {option.feedback}
                                                    </p>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>

                                {submitted && !correct && (
                                    <div className="mt-4 rounded-xl bg-amber-50 p-4">
                                        <p className="font-bold text-amber-800">
                                            Правильна відповідь:
                                        </p>

                                        <p className="mt-1 text-amber-700">
                                            {question.options
                                                .filter((option) =>
                                                    question.correctAnswers.includes(option.id),
                                                )
                                                .map((option) => option.text)
                                                .join(', ')}
                                        </p>
                                    </div>
                                )}
                            </section>
                        )
                    })}
                </div>

                {!submitted ? (
                    <button
                        onClick={handleSubmit}
                        disabled={Object.keys(answers).length !== autumnFolkloreQuiz.length}
                        className="mt-8 w-full cursor-pointer rounded-2xl bg-sky-500 px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                        Перевірити результат
                    </button>
                ) : (
                    <section className="mt-8 rounded-3xl bg-white p-8 text-center shadow-lg">
                        <div className="text-6xl">
                            {percentage >= 80 ? '🏆' : percentage >= 60 ? '👏' : '💪'}
                        </div>

                        <h2 className="mt-4 text-3xl font-extrabold text-slate-800">
                            Твій результат!
                        </h2>

                        <p className="mt-4 text-5xl font-extrabold text-sky-600">
                            {correctCount} / {questions.length}
                        </p>

                        <p className="mt-2 text-xl font-semibold text-slate-600">
                            {percentage}% правильних відповідей
                        </p>

                        <p className="mt-4 text-lg text-slate-600">
                            {percentage === 100
                                ? 'Чудово! Ти справжній знавець! 🌟'
                                : percentage >= 80
                                    ? 'Дуже гарний результат! Так тримати! 🎉'
                                    : percentage >= 60
                                        ? 'Добре! Ще трохи практики — і буде ще краще!'
                                        : 'Не засмучуйся! Переглянь пояснення та спробуй ще раз.'}
                        </p>

                        <button
                            onClick={handleRestart}
                            className="mt-6 w-full cursor-pointer rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
                        >
                            Спробувати ще раз
                        </button>

                        <button
                            onClick={onBack}
                            className="mt-3 w-full cursor-pointer rounded-xl bg-slate-100 px-6 py-4 font-bold text-slate-700 transition hover:bg-slate-200"
                        >
                            Повернутися назад
                        </button>
                    </section>
                )}

            </div>
        </main>
    )
}