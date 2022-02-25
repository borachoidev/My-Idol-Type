import React from 'react'
import 'twin.macro'

import { IOption } from '~/types/data'

interface OptionProps {
  option: string
  onClick: () => void
}

function Option({ option, onClick }: OptionProps) {
  return (
    <div tw="border border-gray-200 rounded-lg py-4 px-2 cursor-pointer" onClick={onClick}>
      {option}
    </div>
  )
}

export default Option
