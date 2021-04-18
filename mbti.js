var i = 1; // 문제 순환을 위한 전역변수 정의

// 문제
var testNum = {
  1:{
    'title':'Case.1',
    'description': '나는 다음 중 어떤 느낌을 더 선호하나요?',
    'type':'EI',
    'A':'뭔가 친근하고 다정하고 충만한 느낌💖',
    'B':'뭔가 평온하고 신뢰할 수 있고 든든한 느낌💖'
  },
  2:{
    'title':'Case.2',
    'description':'고민 거리가 생기면 보통 어떻게 하나요?',
    'type':'EI',
    'A':'\"내 얘기좀 들어봐;-;\" 친구를 만나야 해!',
    'B':'나와 나의 백분 토론 시작..☆ 생각 정리가 필요해!'
  },
  3:{
    'title':'Case.3',
    'description':'스트레스를 짱짱 많이 받았을 때 나는',
    'type':'EI',
    'A':'노래방 가서 소리를 지르거나 운동으로 해소하는 편',
    'B':'후련해질때까지 펑펑 우는 편'
  },
  4:{
    'title':'Case.4',
    'description':'내일 마감인 업무에 문제 발생!<br>어떤 식으로 내용을 공유하시겠어요?',
    'type':'SN',
    'A':'\"4시쯤 원인을 알 수 없는 오류가 발견돼서 지금 고치는 중이에요.\"',
    'B':'\"그 팀 매니저님이 지금 처음부터 다시 보면서<br>샅샅이 원인 파악 중이에요\"'
  },
  5:{
    'title':'Case.5',
    'description':'나는 어떨 때가 더 기억에 남나요?',
    'type':'SN',
    'A':'모르는 스킬을 배워서 실무에 처음 적용해봤을 때',
    'B':'모르는 스킬을 배워서 확실히 알게 되었던 순간 그 자체'
  },
  6:{
    'title':'Case.6',
    'description':'친구가 약속 시간에 많이 늦었다😕<br>어떻게 말해주면 좀 더 좋을까요?',
    'type':'SN',
    'A':'\"저는 00이를 30분이나 기다리게 한 나쁜 사람입니다.<br>ㅠ잘못을 인정하고 반성합니다 흑흑..\"',
    'B':'\"저는 너무 늦어서 00이를 실망시켰습니다.<br>ㅠ굉장히 미안하고 속상한 마음입니다 흑흑..\"'
  },
  7:{
    'title':'Case.7',
    'description':'회사에서, 다음 중 어떤 상황일 때 더 스트레스를 받을 것 같으세요?',
    'type':'TF',
    'A':'이유도 모르고 까임 당할 때😥',
    'B':'내가 생각해도 내가 잘못해서 까임 당할 때😥'
  },
  8:{
    'title':'Case.8',
    'description':'누군가와 싸웠을 때👹<br>둘 중 어떤 것이 문제 해결에 있어 좀 더 중요하다고 생각하시나요?',
    'type':'TF',
    'A':'진심으로 \'사과\'하는 것',
    'B':'진심으로 \'용서\' 하는 것'
  },
  9:{
    'title':'Case.9',
    'description':'중요한 시험을 망쳤을 때😱<br>둘 중 나에게 조금 더 힘이 되는 친구는?',
    'type':'TF',
    'A':'도서관 끌고 가서 같이 공부해주는 친구',
    'B':'자기가 더 속상해하면서 같이 술 마셔주는 친구'
  },
  10:{
    'title':'Case.10',
    'description':'일할 때, 다음 중 어떤 상황에 더 스트레스를 받나요?',
    'type':'JP',
    'A':'\"오늘 나온 아이디어 넘 좋지 않아요?<br>기존 기획안 말고 오늘 결정된 안을 디벨롭해 보는 건 어떨까요?\"',
    'B':'\"기존 계획에서 조금이라도 변경 사항이 생기면 꼬옥 새로 결재 올려주셔야 해요!<br>참고로 결재라인은 저-팀장님-부장님-본부장님-상무님-이사님-부대표님-대표님입니다 ^,^\"'
  },
  11:{
    'title':'Case.11',
    'description':'둘 중 뭔가를 선택해야 하는 상황에 나는',
    'type':'JP',
    'A':'장단점을 리스트업해서 하나하나 비교해본다.',
    'B':'조금 더 후회가 안될 것 같은 쪽이 무엇인지 고민해본다'
  },
  12:{
    'title':'Case.12',
    'description':'새로운 곳으로 이직했을 때 나는',
    'type':'JP',
    'A':'일단 인수인계 자료부터 정독한다!',
    'B':'일단 회사 돌아가는 분위기부터 파악해볼까?'
  }
}

//결과
var result = {
  'INTJ': {'mbti': 'INTJ', 'explain': '책임감이 엄청난 만큼 스스로에게 엄격한 타입!<br>야무지고 똑부러지는 면이 있어서 추상적이고 우유부단한 사람과 협업할 때나 목표가 명확하지 않은 업무를 진행해야 할 때 스트레스를 받는 편이에요😨<br>힘들 땐 다른 사람에게 좀 더 의지해도 괜찮아요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>생각보다 어렵고 생각보다 재밌는 플라워 클래스로 힐-링하기', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMTg1/MDAxNjE4NzM3NzMxNjU5.ZWCHfJ2UlAitJl3tK_5OskEcmI7YX0bdig7Tg3AOudUg.7gBJH48brYp1a634y6JdoqTo0z1tJjKe95-FAMM1HTcg.JPEG.glassswing/ININ.jpg?type=w773'},

  'INTP': {'mbti': 'INTP', 'explain': '호불호가 명확한 타입!<br>야무지고 똑부러지는 면이 있어서 추상적이고 우유부단한 사람과 협업할 때나 목표가 명확하지 않은 업무를 진행해야 할 때 스트레스를 받는 편이에요😨<br>힘들 땐 다른 사람에게 좀 더 의지해도 괜찮아요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>커피 한 잔에만 집중하고 힐-링하기', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMTg1/MDAxNjE4NzM3NzMxNjU5.ZWCHfJ2UlAitJl3tK_5OskEcmI7YX0bdig7Tg3AOudUg.7gBJH48brYp1a634y6JdoqTo0z1tJjKe95-FAMM1HTcg.JPEG.glassswing/ININ.jpg?type=w773'},

  'ENTJ': {'mbti': 'ENTJ', 'explain': '일이 계획과 달라지면 엄청 스트레스 받는 타입!<br>야무지고 리더십이 있어서 추상적이고 우유부단한 사람과 협업할 때나 목표가 명확하지 않은 업무를 진행해야 할 때 스트레스를 받는 편이에요😨<br>조금 천천히 가도 괜찮아요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>이 시국에 계획적이고 안정적으로 스페인 여행하기', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMjIw/MDAxNjE4NzM3NzMxNjUy.FOrCO_qPAcpfzselE14GuMrabLwhHp4zGxHcnIDCH2wg.mYZTtY0CJTE-RWfL-nH17q_z72whJVESR6VjGBT0apEg.JPEG.glassswing/ENEN.jpg?type=w773'},

  'ENTP': {'mbti': 'ENTP', 'explain': '업무에서 인정받지 못하면 엄-청 스트레스 받는 타입!<br>지적이고 에너지도 넘치고, 재능도 많은 타입이라 충분히 인정받지 못하면 속상해지고, 반면 인정받으면 호랑이 힘이 샘솟는 타입이에요😐<br>지금도 너무 잘 하고 있어요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>이 시국에 생각지도 못했던 유럽 여행하기', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMjIw/MDAxNjE4NzM3NzMxNjUy.FOrCO_qPAcpfzselE14GuMrabLwhHp4zGxHcnIDCH2wg.mYZTtY0CJTE-RWfL-nH17q_z72whJVESR6VjGBT0apEg.JPEG.glassswing/ENEN.jpg?type=w773'},

  'INFJ': {'mbti': 'INFJ', 'explain': '고민이 있으면 혼자 삭히는 타입!<br>센스 있고 다정한 편이라 주위에 사람이 많은 편이에요. 그러나 한 번 갈등이 고민이 생기면 표출하기까지 오래 걸려서 힘들어 해요🙁<br>힘들 땐 다른 사람에게 좀 더 표현해도 괜찮아요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>내가 좋아하는 향으로 기분 전환하기, 어때요?', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMTg1/MDAxNjE4NzM3NzMxNjU5.ZWCHfJ2UlAitJl3tK_5OskEcmI7YX0bdig7Tg3AOudUg.7gBJH48brYp1a634y6JdoqTo0z1tJjKe95-FAMM1HTcg.JPEG.glassswing/ININ.jpg?type=w773'},

  'INFP': {'mbti': 'INFP', 'explain': '스스로에게 엄격한 타입!<br>센스 있고 다정한 편이라 주위에 사람이 많은 편이에요. 그러나 완벽주의적 성향이 있어 모두를 만족시키지 못하면 엄청 속상해지곤 해요😯<br>지금도 충분히 잘 하고 있어요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>만화카페 가서 하루종일 늘어져있기, 어때요?', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMTg1/MDAxNjE4NzM3NzMxNjU5.ZWCHfJ2UlAitJl3tK_5OskEcmI7YX0bdig7Tg3AOudUg.7gBJH48brYp1a634y6JdoqTo0z1tJjKe95-FAMM1HTcg.JPEG.glassswing/ININ.jpg?type=w773'},

  'ENFJ': {'mbti': 'ENFJ', 'explain': '지금 진행되는 일이 뭔가 마음에 안 드는 데 발언권이 없을 때 미치는 타입!<br>리더십도 있고 배려심도 있어서 다른 사람들과 협력해서 일을 잘 이끌어가는 한편, 부당하다고 생각되는 일을 목격하면 끼어들지 않고는 직성이 풀리지 않는 타입이에요<br>혼자서 모든 걸 해결하려 할 필요 없어요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>맛있는 것 먹고 힐-링하기', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMjIw/MDAxNjE4NzM3NzMxNjUy.FOrCO_qPAcpfzselE14GuMrabLwhHp4zGxHcnIDCH2wg.mYZTtY0CJTE-RWfL-nH17q_z72whJVESR6VjGBT0apEg.JPEG.glassswing/ENEN.jpg?type=w773'},

  'ENFP': {'mbti': 'ENFP', 'explain': '단조로운 일을 지속해야 할 때 스트레스를 받는 타입!<br>에너지가 많고 아이디어가 풍부한 만큼, 자신의 생각을 충분히 드러낼 수 없는 곳에서 힘이 나지 않는 편이에요😐<br>스트레스 받을 땐 멋지게 풀어버려요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>스트레스 받을 땐 치맥이죠!', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMjIw/MDAxNjE4NzM3NzMxNjUy.FOrCO_qPAcpfzselE14GuMrabLwhHp4zGxHcnIDCH2wg.mYZTtY0CJTE-RWfL-nH17q_z72whJVESR6VjGBT0apEg.JPEG.glassswing/ENEN.jpg?type=w773'},

  'ISTJ': {'mbti': 'ISTJ', 'explain': '이제까지 겪어본 적 없는 종류의 문제가 생기면<br>멘붕이 오는 타입!<br>책임감도 강하고 예의도 바른 편이라 내가 뭔가 기대에 부응하지 못할 것 같으면 괴로워져요. 반명 무책임하고 무례한 사람을 보면 화나는 타입😕<br>계획이 조금 틀어져도 괜찮아요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>코시국이라는 돌발 변수 속에서 변수 없이 안전하게 즐길 수 있는 여행:랜선투어', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfODgg/MDAxNjE4NzM3NzMxNjU2.aSuIpU3IqXKPaNvE4enMyFHjH8h6bll-ZgQifPmpJmAg.rjVLs1bmSrXAq4dMY_iVMo5USlimAm_dFJgo_z5EKO0g.JPEG.glassswing/ISIS.jpg?type=w773'},

  'ISFJ': {'mbti': 'ISFJ', 'explain': '진행 중에 계획과 다른 돌발 변수가 생기면 멘붕이 오는 타입!<br>책임감도 강하고 배려심도 많아서 내가 일을 온전히 컨트롤하지 못해 타인을 번거롭게 할 것 같으면 괴로워져요. 반면 무책임하고 무례한 사람을 보면 화나는 타입😕<br>계획이 조금 틀어져도 괜찮아요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>코시국이라는 돌발 변수 속에서 변수 없이 안전하게 즐길 수 있는 여행:랜선투어', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfODgg/MDAxNjE4NzM3NzMxNjU2.aSuIpU3IqXKPaNvE4enMyFHjH8h6bll-ZgQifPmpJmAg.rjVLs1bmSrXAq4dMY_iVMo5USlimAm_dFJgo_z5EKO0g.JPEG.glassswing/ISIS.jpg?type=w773'},

  'ESTJ': {'mbti': 'ESTJ', 'explain': '일이 불명확하게 진행될 때 스트레스 받는 타입!<br>논리적이고 실행력이 있어서 우유부단한 사람이나 목표가 모호한 일을 진행해야 하는 상황을 만나면 고통스러워하는 타입이에요🤯<br>이것 또한 지나갈 거예요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>양궁장에서 스트레스 다 쏴버려요!', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMTE0/MDAxNjE4NzM3NzMxNjE2.9M0_3zjTebdqnqT2R1bFVJ-QiQKkBg3g3vJ7uSZAzLUg.GHsj_UutqnINqXO0uCP81-TrUqrUNQBCUOwEiMSwv3Ig.JPEG.glassswing/ESES.jpg?type=w773'},

  'ESFJ': {'mbti': 'ESFJ', 'explain': '업무에서 인정받지 못하면 엄-청 스트레스 받는 타입!<br>지적이고 에너지도 넘치고, 재능도 많은 타입이라 충분히 인정받지 못하면 속상해지고, 반면 인정받으면 호랑이 힘이 샘솟는 타입이에요😐<br>지금도 너무 잘 하고 있어요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>맛있는 것 먹고 힐-링하기', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMTE0/MDAxNjE4NzM3NzMxNjE2.9M0_3zjTebdqnqT2R1bFVJ-QiQKkBg3g3vJ7uSZAzLUg.GHsj_UutqnINqXO0uCP81-TrUqrUNQBCUOwEiMSwv3Ig.JPEG.glassswing/ESES.jpg?type=w773'},

  'ISTP': {'mbti': 'ISTP', 'explain': '생각할 시간 없이 빨리 결정해야 하는 상황이나 자율성 없이 마이크로 매니징 받는 상황이 오면 엄청 스트레스 받는 타입!<br>책임감도 강하고 예의도 바른 편이라<br>내가 뭔가 기대에 부응하지 못할 것 같으면 괴로워져요. 반면 무책임하고 무례한 사람을 보면 화나는 타입😕<br>차근차근 진행해도 괜찮을 거예요, 너무 걱정하지 말아요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>덕수궁에서 캐주얼하고 이쁜 스냅 사진 찍기', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfODgg/MDAxNjE4NzM3NzMxNjU2.aSuIpU3IqXKPaNvE4enMyFHjH8h6bll-ZgQifPmpJmAg.rjVLs1bmSrXAq4dMY_iVMo5USlimAm_dFJgo_z5EKO0g.JPEG.glassswing/ISIS.jpg?type=w773'},

  'ISFP': {'mbti': 'ISFP', 'explain': '부정적인 표현을 잘 못하고 속으로 삭히는 타입!<br>다정하고 이해심이 많은 편이라 상대방과 반대되는 말이나 행동을 해야 할 때면 마음이 무거워지곤 해요. 다른 사람을 위하다가 정작 스스로의 마음을 잘 보살피지 못하는 편😥<br>조금 더 우겨도 괜찮아요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>달달한 마카롱으로 스트레스 녹이기', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfODgg/MDAxNjE4NzM3NzMxNjU2.aSuIpU3IqXKPaNvE4enMyFHjH8h6bll-ZgQifPmpJmAg.rjVLs1bmSrXAq4dMY_iVMo5USlimAm_dFJgo_z5EKO0g.JPEG.glassswing/ISIS.jpg?type=w773'},

  'ESTP': {'mbti': 'ESTP', 'explain': '당장 결과가 안 날 때 기다리는 것에 스트레스 받는 타입!<br>솔직하고 실행력이 있어서 생각을 속으로 삭히는 사람이나 결과를 당장 알기 어려운 일을 만나면 고통스러워하는 타입이에요🤯<br>이것 또한 지나갈 거예요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>사격장에서 스트레스 다 쏴버려요!', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMTE0/MDAxNjE4NzM3NzMxNjE2.9M0_3zjTebdqnqT2R1bFVJ-QiQKkBg3g3vJ7uSZAzLUg.GHsj_UutqnINqXO0uCP81-TrUqrUNQBCUOwEiMSwv3Ig.JPEG.glassswing/ESES.jpg?type=w773'},

  'ESFP': {'mbti': 'ESFP', 'explain': '부정적인 표현을 잘 못하고 속으로 삭히는 타입!<br>다정하고 이해심이 많은 편이라 상대방과 반대되는 말이나 행동을 해야 할 때면 마음이 무거워지곤 해요. 다른 사람을 위하다가 정작 스스로의 마음을 잘 보살피지 못하는 편😥<br>조금 더 우겨도 괜찮아요! 제가 당신을 위한 스트레스 해소법으로 생각한 게 있는데, 들어보실래요?<br><br><b>저의 추-천</b><br>달달한 다쿠아즈로 스트레스 녹이기', 'img' : 'https://postfiles.pstatic.net/MjAyMTA0MThfMTE0/MDAxNjE4NzM3NzMxNjE2.9M0_3zjTebdqnqT2R1bFVJ-QiQKkBg3g3vJ7uSZAzLUg.GHsj_UutqnINqXO0uCP81-TrUqrUNQBCUOwEiMSwv3Ig.JPEG.glassswing/ESES.jpg?type=w773'}
};


// 테스트 시작
function run() {
  document.querySelector('#run').style.display="none";
  document.querySelector('#test').style.display="block";
  next();
}

// 완료 후 재시작
function retry() {
  document.querySelector('#result').style.display="none";
  document.querySelector('#test').style.display="block";
  i = 1;
  EI.value = SN.value = TF.value = JP.value = 0;
  next();
}

// 상품 추천하기
function curation() {

}

document.querySelector('#run-btn').addEventListener('click', run);
document.querySelector('#retry').addEventListener('click', retry);
document.querySelector('#curation').addEventListener('click', curation);


document.querySelector('#A').addEventListener('click', function(){
  var type = document.querySelector('#type').value;
  var preValue = document.querySelector('#' + type).value;
  document.querySelector('#' + type).value= preValue + 1;
  next();
});

document.querySelector('#B').addEventListener('click', function(){
  next();
});

// 문제 내용 변수
function next() {
  if(i==13) { // i가 13, 즉 완료했을 때
    document.querySelector('#test').style.display="none";
    document.querySelector('#result').style.display="block";
    var mbti = '';
    (document.querySelector('#EI').value < 2) ? mbti += 'I' : mbti += 'E';
    (document.querySelector('#SN').value < 2) ? mbti += 'N' : mbti += 'S';
    (document.querySelector('#TF').value < 2) ? mbti += 'F' : mbti += 'T';
    (document.querySelector('#JP').value < 2) ? mbti += 'P' : mbti += 'J';
    console.log(mbti);
    document.querySelector('#img').src = result[mbti]['img'];
    document.querySelector('#mymbti').innerHTML = result[mbti]['mbti'];
    document.querySelector('#explain').innerHTML = result[mbti]['explain'];
  }
  else { // i가 13보다 작음, 즉 아직 문제푸는 중일 때
    document.querySelector('#number').innerHTML = i + '/12';
    document.querySelector('#progress').style.width= (i/12)*100 + '%';
    document.querySelector('#title').innerHTML = testNum[i]['title'];
    document.querySelector('#description').innerHTML = testNum[i]['description'];
    document.querySelector('#type').value = testNum[i]['type'];
    document.querySelector('#A').innerHTML = testNum[i]['A'];
    document.querySelector('#B').innerHTML = testNum[i]['B'];
    i++;
  }
}
