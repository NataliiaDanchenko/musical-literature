import { autumnFolkloreQuiz } from './autumnFolkloreQuiz'
import type { QuizQuestion } from './autumnFolkloreQuiz'
import { winterFolkloreQuiz } from './winterFolkloreQuiz'
import { danceMarchTest } from './danceMarchTest'
import { songVocalGenres } from './songVocalGenres'
import { symphonyQuiz } from './simphony'
import { musicalTheatreGenresQuiz } from './theaterGenres'

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
    {
        id: 'song-vocal-test',
        title: 'Вокальні жанри. Пісня',
        subject: 'Музична література',
        grade: 5,
        topic: 'Вокальні жанри. Пісня',
        level: 'easy',
        questions: songVocalGenres,
    },
    {
        id: 'simphony-test',
        title: 'Симфонія',
        subject: 'Музична література',
        grade: 6,
        topic: 'Симфонія',
        level: 'easy',
        questions: symphonyQuiz,
    },
       {
        id: 'theater-test',
        title: 'Музично-театральні жанри',
        subject: 'Музична література',
        grade: 6,
        topic: 'Музично-театральні жанри',
        level: 'easy',
        questions: musicalTheatreGenresQuiz,
    },
]

