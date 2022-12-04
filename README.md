An example Next.js 13 application with [the `app` directory](https://beta.nextjs.org/docs/routing/fundamentals) enabled, with a mock (?) of the former router events `onStart` and `onComplete`.

When you navigate between routes, [`NProgress`](https://ricostacruz.com/nprogress) methods will be fired accordingly. This also works for SSR pages: the progress bar will appear instantly on route change, and will only disappear after the data fetch is completed. Or at least that's how it appears to be.

## Known issues

### Navigation to dynamic routes is slow

This is an upstream bug in Next.js where `useSearchParams` makes the page dynamic. There's already a PR for that (https://github.com/vercel/next.js/pull/43603), so it should be fixed soon.

In the meantime, if you do not care about search params, use the workaround in [here](https://github.com/joulev/nextjs13-router-events/issues/1#issuecomment-1336428594). Otherwise you have no choice but to wait for the mentioned PR to be merged.

Ref: [#1](https://github.com/joulev/nextjs13-router-events/issues/1).
