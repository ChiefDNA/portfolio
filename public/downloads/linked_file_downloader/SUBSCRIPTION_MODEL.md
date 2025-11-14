# Subscription model (notes)

- Free users: required to watch a short ad per queued download (or per certain downloads) as implemented in the app.
- Hourly ad-unlock: watch 3 ads -> downloads for 1 hour without ads (app-side session logic required).
- Monthly subscription: small price (you choose) to remove ads and allow background queued downloads.
- Lifetime subscription: one-time price to remove ads and unlock advanced features.

Implement any payment/subscription server using Stripe, Paddle or the Play Store / App Store subscriptions when publishing to stores.

// End of project files. Next :: 

// NOTES:
// - This starter focuses on frontend presentation; it assumes the actual downloader app logic lives inside the native apps (Flutter).
// - For distributing APKs and Windows builds via GitHub, consider using GitHub Releases for better file handling.
// - Update `package.json` homepage before running gh-pages deploy.
