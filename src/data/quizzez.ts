import { autumnFolkloreQuiz } from './autumnFolkloreQuiz'
import type { QuizQuestion } from './autumnFolkloreQuiz'
import { winterFolkloreQuiz } from './winterFolkloreQuiz'
import { danceMarchTest } from './danceMarchTest'
import { songVocalGenres } from './songVocalGenres'
import { symphonyQuiz } from './simphony'
import { musicalTheatreGenresQuiz } from './theaterGenres'
import { schubertQuiz } from './schubert'
import { chopinQuiz } from './shopin'
import { ravelQuiz } from './ravel'
import { debussyQuiz } from './debussi'
import { gershwinQuiz } from './jazz'

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
    {
        id: 'schubert-test',
        title: 'Життя і творчість Франца Шуберта',
        subject: 'Музична література',
        grade: 7,
        topic: 'Життя і творчість Франца Шуберта',
        level: 'easy',
        questions: schubertQuiz,
    },
    {
        id: 'shopin-test',
        title: 'Життя і творчість Фридерика Шопена',
        subject: 'Музична література',
        grade: 7,
        topic: 'Життя і творчість Фридерика Шопена',
        level: 'easy',
        questions: chopinQuiz,
    },
    {
        id: 'debussi-test',
        title: 'Музичний імпресіонізм. Творчість Клода Дебюссі',
        subject: 'Музична література',
        grade: 8,
        topic: 'Музичний імпресіонізм. Творчість Клода Дебюссі',
        level: 'easy',
        questions: debussyQuiz,
    },
    {
        id: 'ravel-test',
        title: 'Творчість Моріса Равеля',
        subject: 'Музична література',
        grade: 8,
        topic: 'Творчість Моріса Равеля',
        level: 'easy',
        questions: ravelQuiz,
    },
     {
        id: 'juzz-test',
        title: 'Джаз і творчість Джорджа Гершвіна',
        subject: 'Музична література',
        grade: 8,
        topic: 'Джаз і творчість Джорджа Гершвіна',
        level: 'easy',
        questions: gershwinQuiz,
    },
]

