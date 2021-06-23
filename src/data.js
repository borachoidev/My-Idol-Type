import img1 from './image/1.jpg';
import img2 from './image/2.jpg';
import img3 from './image/3.jpg';
import img4 from './image/4.jpg';
import img5 from './image/5.jpg';
import img6 from './image/6.jpg';
import img7 from './image/7.jpg';
import img8 from './image/8.jpg';

export const qnaList = [
  {
    q: '오디션 중 갑자기 다른 장르의 노래를 불러보라는 요구를 받았다! 나는 ...',
    a: [
      {
        answer:
          'a. 이럴줄 알고 진작에 준비했지! 혹시 몰라 준비해둔 노래를 부른다',
        type: 'J',
      },
      {
        answer: 'b. 따로 준비한 노래 없이 그냥 노래방 애창곡을 부른다',
        type: 'P',
      },
    ],
  },
  {
    q: '연습 생활을 하던 중 다른 친구가 부상을 당했다! 내 반응은?',
    a: [
      {
        answer: 'a. "빨리 병원부터 가봐!" ',
        type: 'T',
      },
      {
        answer: 'b. "어떡해! 괜찮아? 많이 아파?"',
        type: 'F',
      },
    ],
  },
  {
    q: '데뷔조로 선발되어 숙소 생활을 하게 되었다! 내 방 상태는?',
    a: [
      {
        answer: 'a. 정리 잘 된 깔끔한 방',
        type: 'J',
      },
      {
        answer: 'b. 내 물건이 어디있는 지 나만 아는 방',
        type: 'P',
      },
    ],
  },
  {
    q: '이번 앨범에 작사를 참여하게 되었다! 내가 작사하는 가사는 어떤 내용?',
    a: [
      {
        answer: 'a. 나의 경험을 바탕으로한 가사',
        type: 'S',
      },
      {
        answer: 'b. 상상의 나래를 펼쳐 만든 가사',
        type: 'N',
      },
    ],
  },
  {
    q: '"신곡에 대해서 소개해주세요!"',
    a: [
      {
        answer:
          'a. "이번 앨범은 듣기만 해도 시원해지는 여름에 잘 어울리는 곡입니다!”',
        type: 'N',
      },
      {
        answer:
          'b. "이번 앨범은 트로피컬 하우스 장르의 여름 바다를 놀러가는 가사의 곡입니다!"',
        type: 'S',
      },
    ],
  },

  {
    q: '예능 프로그램 제의가 들어왔다!  내가 하고 싶은 예능은?',
    a: [
      {
        answer: 'a. 런O맨',
        type: 'T',
      },
      {
        answer: 'b. 효O네 민박',
        type: 'F',
      },
    ],
  },
  {
    q: '첫 예능 출연 전날밤! 나는 ...',
    a: [
      {
        answer: 'a. "에이 몰라~ 나의 꾸밈없는 모습을 보여주지” 그냥 잠이 든다',
        type: 'P',
      },
      {
        answer: 'b. 뭘 시킬지 몰라 있는 개인기를 연습하다 잠이든다',
        type: 'J',
      },
    ],
  },
  {
    q: '신곡 활동이 끝나고 휴가를 받았다! 내가 보내고 싶은 휴가는?',
    a: [
      {
        answer: 'a. 집에서 편히 쉴래~',
        type: 'I',
      },
      {
        answer: 'b. 휴가는 뭐니 뭐니 해도 여행이지!',
        type: 'E',
      },
    ],
  },
  {
    q: '다음 앨범 컨셉에 대해 논의를 하게 되었다! 내가 하고 싶은 컨셉은?',
    a: [
      {
        answer: 'a. 기존 컨셉과 비슷하지만 다른 컨셉',
        type: 'S',
      },
      {
        answer: 'b. 기존 컨셉과 완전 반대의 컨셉',
        type: 'N',
      },
    ],
  },
  {
    q: '라이브 방송 중 팬이 "나랑 결혼해줘!!” 라고 말했을 때 나의 반응은?',
    a: [
      {
        answer: 'a. "안돼요~” 현실적으로 불가능한건 안 돼~ ',
        type: 'T',
      },
      {
        answer: 'b. "좋아요!” 우리 팬이라면 뭐든지 좋아~ ',
        type: 'F',
      },
    ],
  },
  {
    q: '음악 방송 전 처음 보는 후배 아이돌이 인사하러 찾아왔다! 나는 ...',
    a: [
      {
        answer: 'a. "아..안녕, 수고해!" 어색한 대화를 서둘러 마무리한다.',
        type: 'I',
      },
      {
        answer:
          'b. "너네가 OO이구나! 오늘 무대도 잘해!" 잘 몰라도 일단은 아는척 해준다. ',
        type: 'E',
      },
    ],
  },
  {
    q: '팬사인회에서 팬이 하트를 해달라고 한다! 나는 ...',
    a: [
      {
        answer: 'a. 각종 하트 + 윙크 + 잔망부리기 ',
        type: 'E',
      },
      {
        answer: 'b. 수줍게 하트...💕',
        type: 'I',
      },
    ],
  },
];

export const infoList = [
  {
    name: '다가갈 수 없는 아우라 신비주의돌',
    desc: '자신만의 세계에 있는 당신은 신비주의?! 무슨 생각을 하고있는지 모르겠는 오묘한 매력이 팬들의 관심을 불러일으킨답니다🔮',
    partner: '선후배 상관없이 두루두루 잘지내는 인싸돌',
    img: img1,
    og: 'https://drive.google.com/uc?id=1CkFx3ExaF3mi9u8YcmOQK8uBigmZUZE4',
  },
  {
    name: '선후배 상관없이 두루두루 잘지내는 인싸돌',
    desc: '만나는 사람마다 팬으로 만들어버리는 당신은 이 시대의 인싸! 훌륭한 말솜씨와 주변 사람에게 친근한 당신은 모든 사람을 당신의 팬으로 만들어요! ',
    partner: '다가갈 수 없는 아우라 신비주의돌',
    img: img2,
    og: 'https://drive.google.com/uc?id=1lHMBKJm0eMH3C2nvAVPwOTCiTiFg14Is',
  },
  {
    name: '아이돌 보단 아~~~리스트',
    desc: '자신만의 세계관이 확실한 당신! 그 세계관이 담긴 음악으로 대중들의 마음을 사로잡는 아티스트 🎤',
    partner: '각도에 오차란 없다! 칼군무돌',
    img: img3,
    og: 'https://drive.google.com/uc?id=1GMbPt5zGXzhslUEurwyvh-JbZQzcv77J',
  },
  {
    name: '가장 안좋은 해충은 대충! 무대도 예능도 열정돌',
    desc: '아침에 일어나자마자 연습실로 향할 것 같은 당신! 다재다능하고 넘치는 자신감으로 무장한 당신은 365일 여름같은 열정돌☀️',
    partner: '빛이 나는 솔로 아이돌',
    img: img4,
    og: 'https://drive.google.com/uc?id=1WZmjUIxP0yeHXse5v0SROL2RYI_C-u_L',
  },
  {
    name: '빛이 나는 솔로 아이돌',
    desc: '뚝심있고 자기애가 강한 당신은 빛이 나는 솔로 아이돌! 좋은 결과를 만들어 내기위해 불철주야 노력하는 당신은 솔로 아이돌이 어울려요~',
    partner: '가장 안좋은 해충은 대충! 무대도 예능도 열정돌',
    img: img5,
    og: 'https://drive.google.com/uc?id=1KkPPIkFpgkyiiArMokG419UlB_RP-7p8',
  },
  {
    name: '장난끼 많고 활발한 비글돌',
    desc: '어디로 튈지 모르는 당신은 인간 비글! 활발하고 사교적인 모습으로 어디서나 관심을 한 몸에 받는 분위기 메이커!',
    partner: '팬들의 마음을 울리는 꿀보이스 발라더',
    img: img6,
    og: 'https://drive.google.com/uc?id=1PiqUL7K4udUQ-TQhBNfk3p21fVGUNEzL',
  },
  {
    name: '팬들의 마음을 울리는 꿀보이스 발라더',
    desc: '뛰어난 실력으로 좌중을 사로잡는 당신은 최고의 발라더! 부드러운 카리스마를 가진 당신은 팬들의 마음을 눈처럼 녹여버린답니다',
    partner: '장난끼 많고 활발한 비글돌',
    img: img7,
    og: 'https://drive.google.com/uc?id=1yAZwf3J9Y5C48GMAJ8I2nkxdTKB-cKs4',
  },
  {
    name: '각도에 오차란 없다! 칼군무돌',
    desc: '프로페셔널하고 냉철한 당신은 한치의 실수도 용납하지 않는 칼군무돌! 최고의 아이돌이 되기 위해 오늘도 연습실에서 연습하고 있답니다 ',
    partner: '아이돌 보단 아~~~리스트',
    img: img8,
    og: 'https://drive.google.com/uc?id=12D_zJzBhFnHH_buyrXx372sHA55m902K',
  },
];
