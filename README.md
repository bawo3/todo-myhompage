# 💍 모바일 청첩장

골드 & 크림 톤의 고급스러운 모바일 청첩장 정적 사이트.
모든 청첩장 정보는 `setting.json` 한 파일에서 관리합니다.

---

## ✨ 주요 기능

| 섹션 | 내용 |
|------|------|
| **커버** | 웨딩홀 배경 사진 + 골드 엠블럼 (영문 이니셜 `KIM . LEE`) + 신랑신부 이름 |
| **인사말** | 시집 스타일의 고급스러운 영문/한글 인용구 + 본문 |
| **혼주 소개** | 신랑/신부 부모님 + 전화 연결 버튼 (Glass 카드) |
| **예식 일정** | 연도 + 월·일·요일 3분할 + 시간 + D-Day 뱃지 + 달력(예식일 펄스 애니메이션) |
| **오시는 길** | Google Maps 임베드 + 주소 카드 + 길찾기 모달 + 웨딩홀 사진 + 교통 정보 |
| **마음 전하기** | 신랑(판다 🐼)/신부(토끼 🐰) 캐릭터 + 송금 모달 (토스/카카오페이/복사) |
| **갤러리** | 사진 슬라이더 (자동재생, 점 인디케이터, 썸네일) |
| **RSVP** | 참석 여부 폼 (이름·연락처·참석여부 필수, 인원 수) |

---

## 🗂 파일 구조

```
my-hompage/
├── index.html          # 메인 청첩장 (HTML + CSS + JS 통합)
├── setting.json        # 모든 청첩장 정보
├── images/             # 갤러리 이미지
│   ├── photo1.svg
│   ├── photo2.svg
│   └── photo3.svg
└── README.md
```

---

## ⚙️ setting.json 구조

```json
{
  "wedding": {
    "groom":   { "name", "englishName", "fatherName", "motherName", "contact" },
    "bride":   { "name", "englishName", "fatherName", "motherName", "contact" },
    "date":    { "year", "month", "day", "dayOfWeek", "time" },
    "venue":   { "name", "hall", "address", "lat", "lng", "photo" },
    "message": { "main", "sub", "invitation" },
    "account": { "groom":{bank,number,holder}, "bride":{...} },
    "gallery": { "enabled", "photos":[{src, caption}] },
    "rsvp":    { "enabled", "deadline" }
  }
}
```

청첩장 내용을 바꾸려면 **`setting.json`만 수정**하면 됩니다.

---

## 🎨 디자인 컨셉

- **컬러 팔레트**: 골드(`#C9A96E`) · 크림(`#FAF7F2`) · 다크골드(`#8B6F47`) · 로즈(`#B76E79`)
- **타이포그래피**:
  - 한글: Noto Serif KR (200~600)
  - 영문 세리프: Cormorant Garamond
- **유리 효과**: `backdrop-filter: blur` + 반투명 흰 배경 + 내부 하이라이트 그림자
- **부드러운 모서리**: 16~32px 라운드, 직선 테두리 없음
- **유기적 구분선**: SVG 꽃잎 흩날림 패턴
- **마이크로 애니메이션**: 페이드인 / 스크롤 등장 / 캐릭터 둥둥 / 예식일 펄스

---

## 🗺 지도 & 길찾기

- **임베드**: Google Maps (`output=embed`, 키 불필요)
- **길찾기 모달** 4종 앱 지원
  - 네이버 지도 (웹 검색)
  - 카카오맵 (웹 검색)
  - 카카오내비 (앱 딥링크 + fallback)
  - T맵 (앱 딥링크 + fallback)

좌표는 `setting.json`의 `venue.lat / venue.lng`로 일원화.

---

## 💸 송금 기능

마음 전하기 카드 클릭 → 모달에서 선택:

| 옵션 | 동작 |
|------|------|
| **토스로 송금** | `supertoss://send` 딥링크 → 미설치 시 카카오페이 → 또 미설치 시 복사 |
| **카카오페이 송금** | `kakaotalk://kakaopay/...` 딥링크 → 미설치 시 토스 → 또 미설치 시 복사 |
| **계좌번호 복사** | clipboard API (실패 시 execCommand 폴백) |

`visibilitychange` / `blur` 이벤트로 앱 실행 여부 자동 감지 → fallback 체인 동작.

---

## 🚀 실행 방법

별도 서버 없이 `index.html`을 브라우저에서 바로 열면 됩니다.
단, `setting.json`을 `fetch`로 불러오므로 **로컬 파일 직접 열기는 CORS 차단**될 수 있습니다.

```bash
# 간이 로컬 서버
python -m http.server 8080
# 또는
npx serve .
```

브라우저에서 `http://localhost:8080` 접속.

---

## 📱 호환성

- 모바일 우선 디자인 (max-width 480px 최적화)
- iOS Safari / Android Chrome / 데스크톱 모두 지원
- `100svh` 사용으로 iOS 주소창 흔들림 방지

---

## 📝 라이선스

개인용 — 자유롭게 수정/사용
