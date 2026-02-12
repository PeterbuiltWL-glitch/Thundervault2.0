# Thundervault 2.0

A Next.js application with Vercel Speed Insights integration.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Vercel Speed Insights** for real-time performance monitoring
- **ESLint** for code quality

## Speed Insights Integration

This project is pre-configured with Vercel Speed Insights to monitor Core Web Vitals and performance metrics.

### What's Already Configured

The `@vercel/speed-insights` package is installed and the `<SpeedInsights />` component is integrated in the root layout (`app/layout.tsx`).

### Next Steps to Enable Speed Insights

1. **Enable Speed Insights in Vercel Dashboard**
   - Go to your [Vercel dashboard](https://vercel.com/dashboard)
   - Select your project
   - Navigate to the **Speed Insights** tab
   - Click **Enable**

2. **Deploy to Vercel**
   ```bash
   vercel deploy
   ```

3. **View Your Metrics**
   - After deployment and some user traffic, visit the Speed Insights tab in your Vercel dashboard
   - Monitor Core Web Vitals (LCP, FID, CLS, FCP, TTFB)
   - Analyze performance trends over time

## Getting Started

### Development

First, run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the application for production:

```bash
pnpm build
# or
npm run build
# or
yarn build
```

### Lint

Run ESLint to check for code quality issues:

```bash
pnpm lint
# or
npm run lint
# or
yarn lint
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Core Web Vitals](https://web.dev/vitals/)

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Once deployed, the Speed Insights script will be automatically injected at `/_vercel/speed-insights/script.js`.

## Privacy & Compliance

Vercel Speed Insights is designed with privacy in mind and complies with data protection standards. [Learn more about privacy](https://vercel.com/docs/speed-insights/privacy-policy).
