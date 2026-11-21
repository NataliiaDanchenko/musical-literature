import { autumnFolkloreQuiz } from './autumnFolkloreQuiz'
import type { QuizQuestion } from './autumnFolkloreQuiz'

export interface QuizData {
    id: string
    title: string
    subject: string
    grade: number
    topic: string
    level: 'easy' | 'hard'
    questions: QuizQuestion[]
}

export const quizzes: QuizData[] = [
    {
        id: 'autumn-folklore',
        title: 'Осінній фольклор',
        subject: 'Музична література',
        grade: 4,
        topic: 'Осінній фольклор',
        level: 'easy',
        questions: autumnFolkloreQuiz,
    },
]

