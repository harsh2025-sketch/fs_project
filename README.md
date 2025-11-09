## mern-auth

![Project Logo](./assets/project-logo.svg)

## mern-auth

Minimal MERN authentication boilerplate (React + Vite client, Express + MongoDB server).

This project implements user registration, login, email OTP verification, password reset via OTP, and JWT-based auth stored in an HTTP-only cookie.

Essentials

- Tech: React (Vite), Express, MongoDB (Mongoose)
- Auth: bcryptjs (passwords), jsonwebtoken (JWT), cookie-parser (cookies)
- Email: nodemailer (SMTP)

Environment

Create `server/.env` (do not commit). Required keys:

```
MONGODB_URL=<your-mongodb-uri-prefix>
JWT_SECRET=<your-jwt-secret>
SMTP_USER=<smtp-username>
SMTP_PASS=<smtp-password-or-app-password>
SENDER_EMAIL=<from-email-address>
PORT=4000
```

Note: the server appends `mern-auth` to `MONGODB_URL` when connecting.

Run (PowerShell)

Server (development)
```powershell
cd server
npm install
npm run server   # starts nodemon
```

Client (development)
```powershell
cd client
npm install
npm run dev
```

Build & preview client (optional)
```powershell
cd client
npm install
npm run build
npm run preview
```

API summary (base: http://localhost:4000/api)

Auth routes:
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/send-verify-otp (protected)
- POST /api/auth/verify-account (protected)
- POST /api/auth/send-reset-otp
- POST /api/auth/reset-password

User routes:
- GET /api/user/data (protected)

Screenshots

Small demo images are in `docs/` (optional visual references).

Contributing

PRs welcome. Please include a description and steps to verify changes.

License

Add a LICENSE file to declare project licensing.

## mern-auth

Lightweight MERN authentication boilerplate with email verification and password reset flows.

This repository contains a Vite + React client and an Express + MongoDB server that implement user registration, login, email verification (OTP), password reset (OTP), and cookie-based authentication using JWT.

## Features

- Register / Login with hashed passwords (bcrypt)
- Email sending for welcome, verification OTP and password reset (nodemailer)
- JWT-based auth stored in HTTP-only cookies
- Protected route example (/api/user/data)
- Simple, modular folder layout (client / server)

## Tech stack

- Frontend: React, Vite, Tailwind (minimal), React Router
- Backend: Node.js (ESM), Express, Mongoose (MongoDB)
- Auth & Security: bcryptjs, jsonwebtoken, cookie-parser
- Email: nodemailer (Gmail SMTP used in config)

## Repo structure

Top-level:

```
mern-auth/
  client/        # React + Vite frontend
  server/        # Express API and auth logic
```

Important server subfolders:

- `server/config` — mongodb & nodemailer config, email templates
- `server/controllers` — auth and user controllers
- `server/models` — Mongoose models
- `server/routes` — API route definitions
- `server/middleware` — auth middleware (userAuth)

## Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB (local or Atlas)

## Environment variables

Create a `.env` file in the `server/` folder. The project references the following variables:

- `MONGODB_URL` — base MongoDB URI (the code appends the DB name `mern-auth` automatically). Example: `mongodb+srv://user:pass@host/`
- `JWT_SECRET` — secret string used to sign JWT tokens
- `SMTP_USER` — SMTP username (used by nodemailer), e.g. Gmail address
- `SMTP_PASS` — SMTP password or app-specific password
- `SENDER_EMAIL` — email address used as the From address when sending mail
- `PORT` — optional server port (defaults to 4000)

Example `server/.env` (do NOT commit this file):

```
MONGODB_URL=mongodb+srv://<user>:<pass>@cluster0.example/
JWT_SECRET=some-very-secret-key
SMTP_USER=youremail@gmail.com
SMTP_PASS=your-smtp-password-or-app-password
SENDER_EMAIL=youremail@gmail.com
PORT=4000
```

Note: The server code concatenates `process.env.MONGODB_URL` with `mern-auth` to form the final DB name.

## Run locally (PowerShell on Windows)

From the repository root open two terminals (one for server, one for client).

Server

```powershell
cd server
npm install
# start with nodemon for dev auto-reload
npm run server
# or run once with node
npm start
```

Client

```powershell
cd client
npm install
npm run dev
```

The client uses Vite (default dev port: 5173). The server defaults to port 4000. CORS is configured to allow `http://localhost:5173` by default. 


## Additional screenshots (from `docs/`)

Below are the other screenshots included in the `docs/` folder. These are project screenshots and can help during manual testing or documentation.

Homepage

![Homepage](./docs/homepage.png)

Login page

![Login page](./docs/login%20page.png)

Other captured screenshots

![Screenshot 1](./docs/Screenshot%202025-11-08%20173730.png)

![Screenshot 2](./docs/Screenshot%202025-11-08%20173759.png)

![Screenshot 3](./docs/Screenshot%202025-11-08%20173850.png)

## Additional run options

If you want to build the client and preview the built production bundle locally (this avoids depending on the Vite dev server during demos), run:

```powershell
cd client
npm install
npm run build
npm run preview
```

`vite preview` serves the built assets on a local port (usually 5173). This is useful for showing a production-like site quickly.

If you prefer to run the server and client concurrently in one terminal you can use a tool like `concurrently` or `npm-run-all`, but the steps above (separate terminals) are simpler and recommended.

## Troubleshooting

- If the server cannot connect to MongoDB, verify `MONGODB_URL` in `server/.env` and that the DB is reachable. The connect function appends `mern-auth` to your `MONGODB_URL`.
- If emails fail to send, double-check Gmail/SMTP credentials (`SMTP_USER`, `SMTP_PASS`) and whether an App Password is required for your account.
- If cookies are not set during login in development, ensure the client is using the right origin (`http://localhost:5173`) and that CORS credentials are enabled (the server enables credentials by default for that origin).


## Available npm scripts (from package.json)

- Client (`/client/package.json`):
  - `dev` — start Vite dev server
  - `build` — production build
  - `preview` — preview built app

- Server (`/server/package.json`):
  - `start` — `node server.js`
  - `server` — `nodemon server.js` (use for development)

## API overview

Base URL: http://localhost:4000/api

Auth routes (`/api/auth`):

- POST /register — register new user; sets auth cookie and sends welcome email
- POST /login — login user; sets auth cookie
- POST /logout — clear auth cookie
- POST /send-verify-otp — (protected) sends verification OTP to logged-in user
- POST /verify-account — (protected) verify account using OTP
- GET /is-auth — (protected) checks if user is authenticated
- POST /send-reset-otp — send reset OTP to an email
- POST /reset-password — reset password using OTP

User routes (`/api/user`):

- GET /data — (protected) returns example user data

Notes: Protected routes use the `userAuth` middleware which checks the JWT token from the HTTP-only cookie.

## Development notes & tips

- Email: The nodemailer config expects SMTP credentials. For Gmail you may need an App Password and less-restrictive settings.
- DB name: The MongoDB connect function appends `mern-auth` to `MONGODB_URL` — provide the URI up to the host.
- Cookie security: When `NODE_ENV` is `production`, cookies are set with secure and sameSite attributes appropriate for cross-site use.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with a clear description of your change.

