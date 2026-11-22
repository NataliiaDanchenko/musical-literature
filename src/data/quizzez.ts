import { autumnFolkloreQuiz } from './autumnFolkloreQuiz'
import type { QuizQuestion } from './autumnFolkloreQuiz'
import { winterFolkloreQuiz } from './winterFolkloreQuiz'
import { danceMarchTest } from './danceMarchTest'

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
    {
        id: 'winter-folklore',
        title: 'Зимовий фольклор',
        subject: 'Музична література',
        grade: 4,
        topic: 'Зимовий фольклор',
        level: 'easy',
        questions: winterFolkloreQuiz,
    },
    {
        id: 'dance-match-test',
        title: 'Танець і марш',
        subject: 'Музична література',
        grade: 5,
        topic: 'Танець і марш',
        level: 'easy',
        questions: danceMarchTest,
    },
]

