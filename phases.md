# Project Phases and Feature Planning

## Overview
This document breaks the project into phases, lists tasks for each major feature, assigns roles, and provides rough estimates and dependencies. Use this as the base project plan to track progress and refine estimates.

---

## Phases

1. Discovery & Requirements (1 week)
   - Stakeholder interviews (teachers, students, admins)
   - Define acceptance criteria for features (calculator, tasks, verification)
   - Create data model draft (users, schools, tasks, submissions, leaderboards)
   - Deliverables: Requirements doc, API stub, initial UX sketches

2. Design & Prototyping (1–2 weeks)
   - UI/UX flows for student tasks, submission, verification, leaderboard
   - Wireframes for dashboard and teacher/admin views
   - Low-fidelity prototype for testing with sample users
   - Deliverables: UI screens, prototype, API endpoints list

3. MVP Implementation (3–5 weeks)
   - Core platform: auth, user roles (student, teacher, parent, admin)
   - Carbon calculator (basic energy, transport, waste inputs)
   - Task system: create tasks, submit proof (image), teacher verify
   - Leaderboard and points system (basic)
   - Deliverables: Working API, web UI for students and teachers, basic mobile-friendly pages

4. Feature Expansion & Integrations (2–4 weeks)
   - Video uploads, richer proof handling, file storage integration (S3)
   - Gamification: badges, levels, detailed scoring rules
   - Reports: daily/weekly/monthly summaries, personalized suggestions
   - Parent portal and public school portal pages
   - Deliverables: Expanded feature set and integrations, bilingual support

5. Testing, QA & Pilot (1–2 weeks)
   - Unit, integration, and E2E tests
   - Pilot with one school: gather feedback, iterate
   - Performance and security checks
   - Deliverables: Test suite, pilot feedback report

6. Launch & Handover (1 week)
   - Deployment automation (CI/CD), documentation for admins and teachers
   - Monitoring, error tracking, analytics setup
   - Deliverables: Live site, deployment runbook, training materials

7. Maintenance & Iteration (ongoing)
   - Bug fixes, feature improvements, scaling
   - Roadmap updates based on pilot and user feedback

---

## Feature Planning (tasks, owners, estimates)

- Carbon Footprint Calculator
  - Description: Estimate emissions from energy, transport, and waste inputs.
  - Tasks: define formulae; build API endpoint; UI form and results display; unit tests.
  - Owners: Backend + Frontend
  - Estimate: 1 week (MVP)
  - Dependencies: Data model, auth

- Task & Challenge System
  - Description: Teachers create tasks; students submit proofs; teachers verify.
  - Tasks: DB schema for tasks/submissions; upload/storage; teacher verification flow; notifications.
  - Owners: Backend, Frontend
  - Estimate: 2 weeks (MVP), +1–2 weeks for video/file handling
  - Dependencies: Auth, storage service

- Proof Submission & Verification
  - Description: Images/videos uploaded by students; verification by teachers; record practical marks.
  - Tasks: secure upload endpoints; teacher dashboard for verification; audit logs.
  - Owners: Backend, Frontend
  - Estimate: 1–2 weeks
  - Dependencies: Storage, auth, teacher role

- Gamification & Leaderboards
  - Description: Points, badges, leaderboards for students and classes.
  - Tasks: scoring engine, leaderboard endpoints, UI components, historical leaderboards.
  - Owners: Backend, Frontend
  - Estimate: 2 weeks
  - Dependencies: Task completion, verification

- Reports & Dashboards
  - Description: Visual dashboards for trends, reports (daily/weekly/monthly)
  - Tasks: analytics endpoints, charts on frontend, export/report formats
  - Owners: Frontend, Backend
  - Estimate: 1–2 weeks
  - Dependencies: Data collection and storage

- Admin & Public Portal
  - Description: Admin tools for school management; public pages to showcase achievements
  - Tasks: admin CRUD, role management, public pages, privacy controls
  - Owners: Backend, Frontend
  - Estimate: 2 weeks
  - Dependencies: Auth, data privacy considerations

---

## Roles & Suggested Responsibility
- Product / Project owner: oversee requirements and pilot coordination
- Backend: API, data modeling, authentication, storage integration
- Frontend: UI, dashboards, forms, prototypes
- QA: tests, pilot coordination, feedback capture
- DevOps: CI/CD, deployment, monitoring

## Next steps (immediate)
1. Review and confirm requirements with stakeholders (teachers and a pilot school).
2. Finalize acceptance criteria for MVP features.
3. Start Discovery & Requirements tasks and create initial API stubs and data model.
