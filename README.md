# 📦 SupaUpload — File Upload Platform

**SupaUpload** — это современная платформа для загрузки, хранения и управления файлами (изображения, документы), построенная на базе **Supabase**.  
Проект вдохновлён сервисами вроде **Uploadcare**, но ориентирован на кастомизацию, простоту и контроль.

---

## 🚀 Возможности

- 📁 Загрузка файлов (drag & drop)
- 🖼 Поддержка изображений, документов и медиафайлов
- 🔐 Аутентификация пользователей (Supabase Auth)
- 🌐 Публичные и приватные файлы
- 🗂 Организация файлов по bucket / папкам
- 📎 Получение прямых ссылок на файлы
- ⚡ Быстрый API для frontend-приложений
- 🧩 Лёгкая интеграция с React / Next.js / Vue

---

## 🛠 Технологии

- **Frontend:** React / Next.js  
- **Backend:** Supabase (PostgreSQL, Storage, Auth)  
- **Storage:** Supabase Storage  
- **Auth:** Supabase Auth (Email / OAuth)  
- **UI Upload:** Drag & Drop (Dropzone / Uppy / FilePond)  

---

## 📦 Архитектура проекта

Client (Browser)
├── Авторизация (Supabase Auth)
├── Upload UI (Drag & Drop)
└── API запросы
↓
Supabase
├── Storage (файлы)
├── Database (metadata)
└── Auth (пользователи)



---

## 🔐 Аутентификация

Каждый пользователь:
- имеет доступ только к своим файлам
- может загружать, удалять и просматривать файлы
- работает через безопасные JWT-токены Supabase

---

## 📸 Загрузка файлов

Поддерживается:
- одиночная и множественная загрузка
- большие файлы (в пределах лимитов Supabase)
- отображение прогресса загрузки
- получение публичного URL после загрузки

---

## 📊 Ограничения (Free tier Supabase)

- 📦 До **1 GB** общего хранилища
- 📁 До **50 MB** на один файл
- 🌐 Ограниченный месячный трафик

> Для production рекомендуется перейти на платный план или подключить CDN.



## 🧠 Для чего подходит проект

- 📁 File hosting сервис
- 🖼 Image upload для сайтов и админ-панелей
- 📎 Хранилище файлов для SaaS
- 🧪 Учебный / pet-project
- 💼 Portfolio project (Senior Frontend / Fullstack)

---

## 📌 Roadmap

- [ ] Image resize / optimization  
- [ ] CDN интеграция  
- [ ] Генерация превью  
- [ ] Папки и теги  
- [ ] Dashboard с аналитикой  

---

## 👨‍💻 Автор

**Frontend / Rustam Rinatovich**  
Stack: React • Next.js • TypeScript • Supabase  


