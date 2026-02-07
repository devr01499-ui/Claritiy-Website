# ARCHITECTURE_DECISIONS.md

## ADR 1: Use Vite for Development
Rationale: Provided in the original codebase for fast development and bundling.

## ADR 2: Use Express.js for Backend API
Rationale: Need a robust backend for Authentication, MongoDB integration, and Stripe processing. Express is lightweight and works well with Node.js.

## ADR 3: Use Supabase for persistence and Auth
Rationale: Supabase provides a managed PostgreSQL database, simplified Authentication, and Storage. This replaces the need for local MongoDB and custom Express auth.

## ADR 4: Use Stripe for Payment Processing
Rationale: Industry standard for secure payments. User specifically requested Stripe.

## ADR 5: Keep minimal Express server for Stripe
Rationale: Securely handling Stripe Secret Keys requires a server-side environment.
