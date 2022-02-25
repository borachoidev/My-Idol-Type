import React from 'react'
import 'twin.macro'

import { IOption } from '~/types/data'

interface OptionProps {
  option: IOption
  onClick: () => void
}

function Option({ option, onClick }: OptionProps) {
  return (
    <div
      tw="border border-gray-200 rounded-lg py-4 px-2 cursor-pointer word-break[keep-all] hover:(scale-105 ease-in-out)"
      onClick={onClick}
    >
      {option.answer}
    </div>
  )
}

export default Option
