# Deadline Guru website

A static, responsive website built with Next.js App Router, TypeScript, and CSS. Configured for static export and deployment to Vercel.

## Pages
- `/` — Home
- `/about` — About
- `/contact` — Contact

## Run locally
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Visit `http://localhost:3000`

## Deploy to Vercel
1. Create a new GitHub repository and upload these files.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel should detect Next.js automatically. Keep the build command as `npm run build`.
5. Click **Deploy**.

The `next.config.ts` file uses `output: "export"` so Next.js also creates a static `out` folder during build.

## Before publishing
- Confirm that the phone numbers and WhatsApp links are correct.
- Add your preferred business email and social links if needed.
- The contact page includes a quick-enquiry layout; connect its form button to a WhatsApp message or a form service before launch.
- The site describes academic guidance and mentoring. Keep service delivery aligned with students' institutional academic-integrity policies.
