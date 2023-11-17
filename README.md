# Stack
Платформа: NodeJS

Мова: TypeScript

Фреймворки та бiблiотеки: NextJs, Redux Toolkit, NestJs, Prisma

База данних: PostgreSQL

# Client-main (Front-end)

Клієнтська частина продукту відповідає за графічний інтерфейс та функціонал клієнтської частини.

**Для запуску:**

*ЗАПУСКАТИ ТІЛЬКИ ПІСЛЯ ЗАПУСКУ СЕРВЕРА*

```bash
git init
npm i
npm run build
npm start
```

# Server-main (Back-end)

Серверна частина продукту містить серверний функціонал та взаємодію з базою даних. Система CRUD (Create Read Update Delete).

**Для запуску:**

```bash
npm i
npx prisma init
prisma init
prisma db pull
prisma generate
nest generate service
npm run start
```
