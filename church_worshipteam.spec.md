# Church Worship Team Management System (教會敬拜團人員排班系統)

## 🎯 系統目標
建立一個簡單直覺的敬拜團管理系統，能快速新增、編輯、刪除人員，並以月曆方式顯示排班表。未來可擴充 Google 登入功能。

---

## 🧩 系統架構
- 前端：Vue 3 + Nuxt 3 + TailwindCSS  
- 後端：Node.js (Express)  
- 資料庫：Firebase Firestore  
- 容器化：Docker  
- CI/CD：GitHub Actions

---

## 📁 功能模組
### 1. 樂團總名單頁
- 顯示所有成員名單（主領、歌手、詩班、吉他手、鍵盤手、貝斯手）
- 可執行 CRUD 操作：新增 / 編輯 / 刪除人員
- 篩選功能：依角色分類檢視

### 2. 排班月曆頁
- 以月曆介面顯示各日期的排班情況
- 點擊日期可展開該場次人員名單
- 可手動調整或指派人員

### 3. 管理頁（選用）
- 匯出人員清單 / 排班表 (CSV / PDF)
- 預留 Google OAuth 登入機制（未啟用）

---

## 🗄️ 資料結構 (Firebase Firestore)
### `members` 集合
```json
{
  "id": "uuid",
  "name": "string",
  "role": "leader | singer | choir | guitar | keyboard | bass",
  "contact": "string",
  "status": "active | inactive"
}
```

### `schedules` 集合
```json
{
  "id": "uuid",
  "date": "YYYY-MM-DD",
  "members": ["member_id_1", "member_id_2", ...],
  "note": "string"
}
```

---

## 🧱 專案結構建議
```
/app
 ├── /frontend (Nuxt 3)
 │   ├── pages/
 │   │   ├── index.vue (樂團總名單)
 │   │   ├── schedule.vue (排班月曆)
 │   │   └── manage.vue (管理頁)
 │   ├── components/
 │   ├── composables/
 │   ├── store/
 │   └── utils/
 ├── /backend (Node.js + Express)
 │   ├── index.js
 │   ├── routes/
 │   ├── controllers/
 │   └── services/
 ├── /docker
 │   ├── Dockerfile
 │   └── docker-compose.yml
 ├── .github/workflows/
 │   └── deploy.yml
 └── README.md
```

---

## ⚙️ GitHub Actions (deploy.yml 簡略版)
```yaml
name: Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install && npm run build
      - run: docker build -t worshipteam-app .
      - run: docker push your-repo/worshipteam-app
```

---

## 🚀 後續擴充
- 加入 Google OAuth 登入驗證
- 支援多場地與多語系管理
- 整合 LINE Notify 通知功能

---

## 🧠 專案啟動流程
1. `git clone` 此專案  
2. `cd app/frontend` → `npm install && npm run dev`  
3. `cd app/backend` → `npm install && node index.js`  
4. 使用 Docker 打包部署  
5. 驗證 GitHub Actions 自動化流程是否成功

---

作者: Tim Hsu  
版本: 1.0  
日期: 2025-10-28
