export interface IQnA {
  question: string
  options: IOptions[]
}

export interface IOptions {
  answer: string
  type: TypeCategory
}

export type TypeCategory = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'

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
