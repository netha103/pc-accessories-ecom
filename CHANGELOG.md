# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- admin port working (@Nethaji)

- admin port working (@Nethaji)
- Fixed deprecated husky hook configuration.

### Added
- Configured git remote origin to `https://github.com/netha103/pc-accessories-ecom.git`.
- Integrated functional Admin Panel based on TailAdmin design.
- Implemented Authentication system using NextAuth.js.
- Added Middleware for protecting admin routes (`/admin`).
- Created dedicated Admin Sign-In page (`/auth/signin`) matching website aesthetics.
- Secured admin credentials using PBKDF2 hashing in `.env.local`.
- Added security headers (X-Frame-Options, XSS-Protection, etc.) in `next.config.js`.

## [0.1.0] - 2026-01-18

### Added
- Initial project structure.
- Integrated Tailwind CSS.
- Converted HTML template to Next.js.
