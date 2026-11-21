export interface HardTask {
  id: string
  title: string
  subject: string
  grade: number
  type: 'essay' | 'presentation'
  description: string
  requirements: string[]
  resultFormat: string
}

export const hardTasks: HardTask[] = [
  {
    id: 'autumn-folklore-essay',
    title: 'Осінній фольклор',
    subject: 'Музична література',
    grade: 4,
    type: 'essay',
    description:
      'Напиши есе про українські народні традиції, пов’язані зі збором урожаю.',
    requirements: [
      'Поясни, що таке жниварські пісні.',
      'Розкажи про обряд обжинків.',
      'Опиши значення обжинкового вінка.',
      'Додай власні враження та висновок.',
    ],
    resultFormat: 'Документ Word або PDF',
  },
  {
    id: 'winter-songs-presentation',
    title: 'Зимові народні пісні',
    subject: 'Музична література',
    grade: 4,
    type: 'presentation',
    description:
      'Підготуй презентацію про українські зимові народні пісні та традиції.',
    requirements: [
      'Розкажи про колядки та щедрівки.',
      'Наведи приклади зимових народних пісень.',
      'Розкажи про традиції їх виконання.',
      'Додай тематичні зображення.',
      'Зроби підсумковий слайд.',
    ],
    resultFormat: 'Презентація PowerPoint або PDF',
  },
]
