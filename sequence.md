sequenceDiagram
  actor AU as ApiUser
  actor SU as ServiceUser
  participant FE as Frontend
  participant BE as Backend
  box DarkGreen MongoDB Replica set
  participant SD as Secondary Database
  participant PD as Primary Database
  end
  participant AR as ApiRequester
  participant 42Api
    AR->>42Api: 초기 데이터 요청
    42Api-->>AR: 
    AR->>PD: 가공 및 저장
    AR->>42Api: 주기적 추가 데이터 요청
    42Api-->>AR: 
    AR->>PD: 가공 및 저장
    PD-)SD: 주기적 데이터 동기화
    SU->>FE: 사이트 방문
    alt IF 로그인이 안되어 있는 경우
      FE->>BE: 로그인 진행
      BE-->>FE: 토큰 발급
    end
    FE-)BE: 홈 화면 데이터 prefetch, cache
    FE-->>SU: 홈 화면으로 이동,<br/>로딩 페이지 표시
    SU-)FE: 로딩 대기
    BE->>SD: 데이터베이스 조회
    SD-->>BE: 
    BE--)FE: 데이터 가공 후 응답
    FE-->>SU: 홈 화면 내용 표시
