An example Next.js 13 application with [the `app` directory](https://nextjs.org/docs/app/building-your-application/routing) enabled, with a mock (?) of the former router events `onStart` and `onComplete`.

When you navigate between routes, [`NProgress`](https://ricostacruz.com/nprogress) methods will be fired accordingly. This also works for SSR pages: the progress bar will appear instantly on route change, and will only disappear after the data fetch is completed. Or at least that's how it appears to be.
