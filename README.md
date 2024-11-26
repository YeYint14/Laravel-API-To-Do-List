
# Laravel API To-Do List with Vue.js

This project is a To-Do List application using **Laravel 10** as the backend API and **Vue.js** as the frontend. Follow the instructions below to set up and run the application.

---

## Requirements

Ensure you have the following tools installed:

- **PHP** (>= 8.1)
- **Composer**
- **Node.js** (>= 14.x)
- **npm**
- **MySQL**

---

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/YeYint14/Laravel-API-To-Do-List.git
cd Laravel-API-To-Do-List
```

### 2. Install Backend Dependencies
```bash
composer install
```

### 3. Configure Environment
- Copy `.env.example` to `.env`:
  ```bash
  cp .env.example .env
  ```
- Update your `.env` file with database credentials and other necessary configurations:
  ```plaintext
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=todolist
  DB_USERNAME=root
  DB_PASSWORD=
  ```

### 4. Generate Application Key
```bash
php artisan key:generate
```

### 5. Run Database Migrations
```bash
php artisan migrate
```

### 6. Install Frontend Dependencies
```bash
npm install
```

### 7. Build the Frontend Assets
```bash
npm run dev
```

### 8. Start the Development Server
```bash
php artisan serve
```

The application will be accessible at [http://localhost:8000](http://localhost:8000).

---

## API Documentation
- Endpoints for managing to-do items:
  - **GET** `/api/tasks` - List all tasks
  - **POST** `/api/tasks` - Create a new task
  - **PUT** `/api/tasks/{id}` - Update a task
  - **DELETE** `/api/tasks/{id}` - Delete a task

---



## License
This project is open-source under the [MIT License](LICENSE).

