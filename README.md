# ARCAB Links

Hub de links oficial da ARCAB para uso em `links.arcab.com.br`.

Projeto focado em:
- mobile-first;
- identidade visual ARCAB;
- performance para acessos via QR code.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Links dinâmicos

Os links ficam em `data/links.ts`.

## Build estático (GitHub Pages)

```bash
npm run build
```

O projeto usa `output: "export"` em `next.config.ts` e gera saída estática em `out/`.

## Scripts

- `npm run dev`: ambiente de desenvolvimento.
- `npm run lint`: validação com ESLint.
- `npm run build`: build de produção e export estático.
- `npm run start`: execução de produção (quando aplicável).
