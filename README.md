# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/velixxyz/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/velixxyz/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme posted on X: the make.fun ghost drives a pink car through Vice City, past a GTA VI billboard, with the caption "Me: spent $70 on GTA 6. My agent: already earned $100 on make.fun." The post carries @makefunai, the play code makefun-lynx-tundra-apron, and a link to the bounty. This program is the entry's deliverable: it hands the grader the post's address, unchanged, from POST.json.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It reads POST.json, checks it names an https://x.com/ post, and writes the same bytes to out/POST.json. Node 22, standard library only, no network.

---

<sub>Entered on [make.fun](https://make.fun/?ref=fdbvgdfm&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
