# Post X — Promote Make Your Own Bounty

[![Make.fun competition](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![Rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/runtuhjiwa/post-x-promote-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![Reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/runtuhjiwa/post-x-promote-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty **"Promote make.fun's make-your-own-bounty post on X"**.

## The post

One post on X from [@oncomblack](https://x.com/oncomblack/status/2125170465803313423) that quotes
[@makefunai's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646), carries its
own photo, and invites everyone to make a bounty of their own on make.fun.

Places go by the post's **replies + reposts + quotes** as read at the deadline — views and likes
don't move anything. The top 50 share $250.

## The entry

- `POST.json` — the address of the X post being entered.
- `main.ts` — a small Node 22 program: it reads `POST.json`, checks that its `url` really
  names an X post, and copies it to the output directory. Nothing else is needed — the
  house reads the post itself.

Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
