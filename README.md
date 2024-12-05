## overview

## 構成
- web: ReactRouter
- api: hono, drizzle
- db: cloudflare d1

## memo

```sh
# web
npx create-react-router@latest --template remix-run/react-router-templates/cloudflare

```sh
# api
npx create-hono api --template cloudflare-workers
```
```


## 参考
- https://zenn.dev/oliver/articles/hono-advent-calendar-2024
- https://zenn.dev/daichi2mori/articles/20240515-cf-d1-hono-drizzle