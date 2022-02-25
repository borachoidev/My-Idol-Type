import { styled } from 'twin.macro'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { ITestResult } from '~/types/data'
interface ShareProps {
  result: ITestResult
  pageUrl: string
}
function Share({ result, pageUrl }: ShareProps) {
  const { name, og: thum } = result
  const shareToKaKao = () => {
    const { Kakao } = window
    Kakao.Link.sendCustom({
      templateId: 70113,
      templateArgs: { NAME: name, THUM: thum },
    })
  }

  const shareToFacebook = () => {
    const { FB } = window
    FB.ui(
      {
        display: 'popup',
        method: 'share',
        href: pageUrl,
      },
      function (response: any) {}
    )
  }

  const shareToLink = () => {
    alert('링크가 복사되었어요!')
  }

  return (
    <div tw="px-3 py-1">
      <p tw=" text-center text-gray-500">친구에게 나의 아이돋 유형 공유하기</p>
      <div tw="flex space-x-2 justify-center">
        <CopyToClipboard text={pageUrl}>
          <DefaultLinkButton onClick={shareToLink} aria-label="클립보드복사" />
        </CopyToClipboard>

        <KakaoLinkButton onClick={shareToKaKao} id="kakao-link-btn" aria-label="카카오톡으로공유" />
        <FaceBookLinkButton onClick={shareToFacebook} aria-label="페이스북으로공유" />
        <a
          target="_blank"
          href={`https://twitter.com/intent/tweet?original_referer=${pageUrl}&text=내가 만약 아이돌이라면? 나는 ${result.name} !&url=${pageUrl}&hashtags=내아이돌유형테스트,MITT`}
          rel="noreferrer"
        >
          <TwitterLinkButton aria-label="트위터로공유" />
        </a>
      </div>
    </div>
  )
}

export default Share

const KakaoLinkButton = styled.button`
  background: url('/images/share/kakao.png');
  background-size: cover;
  width: 32px;
  height: 32px;
  cursor: pointer;
`
const FaceBookLinkButton = styled.button`
  background: url('/images/share/facebook.png');
  background-size: cover;
  width: 32px;
  height: 32px;
  cursor: pointer;
`
const TwitterLinkButton = styled.button`
  background: url('/images/share/twitter.png');
  background-size: cover;
  width: 32px;
  height: 32px;
  cursor: pointer;
`
const DefaultLinkButton = styled.button`
  background: #eee url('/images/share/link.png');
  border-radius: 3px;
  background-size: cover;
  width: 32px;
  height: 32px;
  cursor: pointer;
`
