# 💍 Wedding Invitation Web App

결혼 청첩장 + 개인 홈페이지 웹앱

## 📦 설치 및 실행

```bash
# 프로젝트 폴더로 이동
cd C:\Users\bawo3\OneDrive\Desktop\0506\my-homepage

# index.html 파일을 해당 폴더에 복사하세요
# 브라우저에서 index.html을 열면 바로 실행됩니다
```

> 별도의 서버 없이 **브라우저에서 직접 열어도** 모든 기능이 동작합니다.

---

## ✏️ 커스터마이징

`index.html` 파일 내부 **CONFIG 객체**만 수정하면 됩니다:

```javascript
const CONFIG = {
  groom: '민준',           // 신랑 이름
  bride: '서연',           // 신부 이름
  weddingDate: new Date(2025, 5, 21, 14, 0),  // 결혼 날짜 (월은 0부터)
  venue: '더 그랜드 웨딩홀',   // 예식장 이름
  address: '서울시 강남구...',  // 주소
  groomParents: { father: '...', mother: '...' },
  brideParents: { father: '...', mother: '...' },
  defaultLinks: [ ... ]    // 기본 링크 목록
};
```

---

## 🎯 주요 기능

| 기능 | 설명 |
|------|------|
| 청첩장 | 인사말, 캘린더, 오시는 길 |
| 방문자 등록 | 이름, 인원수, 참석 여부, 축하 메시지 |
| 기기 감지 | 접속 기기(iPhone, Android, PC 등) 자동 감지 |
| 링크 리스트 | 외부 URL 바로가기 (추가/삭제 가능) |
| LocalStorage | 모든 데이터 브라우저에 자동 저장 |
| 관리자 패널 | 방문자 목록 복사, JSON 내보내기/가져오기 |
| 반응형 | 모바일/데스크탑 최적화 |

---

## 🔧 관리자 기능 (⚙ 버튼)

- **📋 방문자 목록 복사** — 텍스트 형태로 클립보드 복사
- **💾 JSON 내보내기** — 방문자 + 링크 데이터 백업
- **📂 JSON 가져오기** — 백업 데이터 복원
- **🗑️ 전체 초기화** — 모든 데이터 삭제

---

## 🌐 배포

정적 파일이므로 어디서든 호스팅 가능합니다:

- **GitHub Pages** — 무료, `index.html`만 push
- **Netlify / Vercel** — 드래그 앤 드롭 배포
- **카카오톡 공유** — 배포 URL을 카카오톡으로 공유

---

## 📱 데이터 저장 방식

모든 데이터는 **localStorage**에 저장됩니다:

- `wedding_guests` — 방문자 등록 정보
- `wedding_links` — 링크 목록

> ⚠️ 브라우저 데이터를 삭제하면 저장된 정보도 함께 삭제됩니다.
> JSON 내보내기로 정기적으로 백업하는 것을 권장합니다.
