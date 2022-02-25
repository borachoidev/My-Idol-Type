export interface IQnA {
  question: string
  options: IOption[]
}

export interface IOption {
  answer: string
  type: Score
}
export type Score = {
  [key: string]: number
}

export type ResultType =
  | 'ISTP'
  | 'INTP'
  | 'ESFJ'
  | 'ENFJ'
  | 'ISFP'
  | 'INFP'
  | 'ENFP'
  | 'ENTP'
  | 'ISTJ'
  | 'INTJ'
  | 'ESTP'
  | 'ESFP'
  | 'ISFJ'
  | 'INFJ'
  | 'ESTJ'
  | 'ENTJ'

export interface ITestResult {
  name: string
  desc: string
  partner: string
  id: number
  og: string
}
