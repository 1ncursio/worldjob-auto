# 월드잡 자동 출석체크 프로그램

## 폴더 구조

```bash
├── package.json
├── yarn.lock
├── .prettierrc
├── src
│   ├── main.ts       # 출석체크 프로그램 cron
│   ├── checkIn.ts     # 입실
│   └── checkOut.ts    # 퇴실
└── README.md
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

퇴실은 하루에 여러 번 가능하지만, 입실은 한 번만 가능하다. 따라서 입실은 반드시 오전 9시에 가까이 체크해야한다.
