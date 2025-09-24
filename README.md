This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 1. GITHUB_ID and GITHUB_SECRET
Create a GitHub OAuth App:

1. Go to GitHub Settings → Developer settings → OAuth Apps
1. Click "New OAuth App"
1. Fill in the details:
    - Application name: Your app name (e.g., "Blog CMS")
    - Homepage URL: `http://localhost:3000`
    - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
1. Click "Register application"
1. Copy the Client ID → `GITHUB_ID`
1. Click "Generate a new client secret" → `GITHUB_SECRET`
## 2. NEXTAUTH_SECRET
Generate a random secret key. You can use any of these methods:

### Option 1: OpenSSL (recommended)

```bash
openssl rand -base64 32
```
### Option 2: Node.js

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```
### Option 3: Online generator Visit https://generate-secret.vercel.app/32

## Then update your `.env` file

## For Production:
When deploying, update the OAuth App settings:

- Homepage URL: `https://yourdomain.com`
- Authorization callback URL: `https://yourdomain.com/api/auth/callback/github`
And generate a new, secure `NEXTAUTH_SECRET` for production.