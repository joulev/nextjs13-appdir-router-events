An example Next.js 13 application with [the `app` directory](https://beta.nextjs.org/docs/routing/fundamentals) enabled, with a mock (?) of the former router events `onStart` and `onComplete`.

When you navigate between routes, [`NProgress`](https://ricostacruz.com/nprogress) methods will be fired accordingly. This also works for SSR pages: the progress bar will appear instantly on route change, and will only disappear after the data fetch is completed. Or at least that's how it appears to be.

## Known issues

### Navigation to dynamic routes is slow

[This is a Next.js bug until and including v13.0.6](https://github.com/vercel/next.js/pull/43603). It was fixed in v13.0.7-canary.5, so you should upgrade your app to `next@canary` or at least v13.0.7 if you use the stable channel.
