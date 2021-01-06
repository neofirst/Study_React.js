컨텐츠->패딩->볼더->마진

const StyledButton = styled.button`
border: none; 테두리 없음
border-radius: 4px; 테두리 둥글게
font-size: 1rem; 글자 사이즈

font-weight: bold; 글자
normal : 보통 굵기입니다. 숫자 400과 같습니다.
bold : 굵은 굵기입니다. 숫자 700과 같습니다.
bolder : 상속된 값보다 굵은 굵기입니다.
lighter : 상속된 값보다 얇은 굵기입니다.
number : 100, 200, 300, 400, 500, 600, 700, 800, 900
initial : 기본값으로 설정합니다.
inherit : 부모 요소의 속성값을 상속받습니다.

padding: 0.25rem 1rem;
안쪽 여백
margin: 20px 같은 표현은 상하좌우 모두 20px을 의미합니다
margin: 30px 10px은 상하 30px, 좌우 10px을 의미합니다.
margin: 30px 10px 20px 50px은 위 30px, 오른쪽 10px, 아래 20px, 왼쪽 50px을 의미합니다.
margin: 30px 10px 40px은 위 30px, 좌우 10px, 아래 40px을 의미합니다.

color: white;

outline: none;
볼더의 바깥 테두리
outline-color : outline의 색상을 지정한다.
outline-style : outline의 스타일을 지정한다.
outline-width : outline의 너비를 지정한다.
inherit : 부모 요소로부터 값을 상속 받는다.

cursor: pointer;

background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
}
`;
