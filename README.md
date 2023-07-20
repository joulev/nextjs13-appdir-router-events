An example Next.js 13 application with [the `app` directory](https://nextjs.org/docs/app/building-your-application/routing) enabled, with a mock (?) of the former router events `onStart` and `onComplete`.

When you navigate between routes, [`NProgress`](https://ricostacruz.com/nprogress) methods will be fired accordingly. This also works for SSR pages: the progress bar will appear instantly on route change, and will only disappear after the data fetch is completed. Or at least that's how it appears to be.

## How to use

- Copy the content of `lib/router-events`.
- Change the events in `lib/router-events/events.ts` to whatever you need.
- Add `<HandleOnComplete />` from `lib/router-events` to your root layout
- Wherever you use `useRouter`, change the import statement to import the hook from `lib/router-events`.
- Wherever you use `<Link>`, change the import statement to import the component from `lib/router-events`.
