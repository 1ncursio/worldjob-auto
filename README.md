# 월드잡 자동 출석체크 프로그램

## 폴더 구조

```bash
├── src
│   ├── config
│   │   ├── members.ts # 체크할 멤버 목록
│   │   ├── rules.ts   # 체크 시간
│   │   └── urls.ts    # 월드잡 URL
│   ├── lib
│   │   ├── check.ts   # 출석체크
│   ├── main.ts       # 출석체크 프로그램 cron
│   ├── checkIn.ts     # 입실
│   └── checkOut.ts    # 퇴실
├── .env
├── .gitignore
├── .prettierrc
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

## 실행법

### 입실/퇴실 (CronJob O)

```bash
yarn start
```

### 입실 (CronJob X)

```bash
yarn check:in
```

### 퇴실 (CronJob X)

```bash
yarn check:out
```

## 주의사항

퇴실은 하루에 여러 번 가능하지만, 입실은 한 번만 가능하다.
