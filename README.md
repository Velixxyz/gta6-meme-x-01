# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/velixxyz/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/velixxyz/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Round 2 entry. A GTA 6 meme posted on X: a WANTED poster from the Leonida Police Department. The make.fun ghost is wanted for calling in sick 4,811 days in a row, last seen driving a pink car in Vice City, with a $100 reward on make.fun. The poster image is v2-1-wanted.png in this repo. The post carries @makefunai, the play code makefun-lynx-tundra-apron, and a link to the bounty. This program is the entry's deliverable: it hands the grader the post's address, unchanged, from POST.json.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It reads POST.json, checks it names an https://x.com/ post, and writes the same bytes to out/POST.json. Node 22, standard library only, no network.

---

<sub>Entered on [make.fun](https://make.fun/?ref=fdbvgdfm&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
