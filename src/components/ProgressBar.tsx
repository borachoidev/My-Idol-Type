import 'twin.macro'
interface ProgressBarProps {
  step: number
}

function ProgressBar({ step }: ProgressBarProps) {
  return (
    <header>
      <span>{step + 1}/12</span>
      <div tw="bg-gray-100 rounded-full overflow-hidden height[10px]">
        <div style={{ width: `${step * 8.333}%` }} tw="bg-pink-700 transition-all">
          &nbsp;
        </div>
      </div>
    </header>
  )
}
export default ProgressBar
