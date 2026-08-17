# Timetable Scheduler - Express + MySQL Backend

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure MySQL in `src/config/db.config.js`:
   ```js
   USER: "your_username",
   PASSWORD: "your_password",
   DB: "timetable_db"
   ```

3. Create the database:
   ```sql
   CREATE DATABASE timetable_db;
   ```

4. Run the server:
   ```bash
   npm run dev
   ```

The server runs at `http://localhost:8080`

## Endpoints
- `/api/users`
- `/api/timetables`
- `/api/feedbacks`
- `/api/subjects`
- `/api/faculties`
- `/api/rooms`
- `/api/batches`
