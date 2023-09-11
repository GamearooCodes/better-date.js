<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/better-date.js"><img src="https://gamearoo.top/ram/Bd.png" width="546" alt="ram-api.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/q3ycRjBG9q"><img src="https://img.shields.io/discord/1068088656377692170?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/better-date.js"><img src="https://img.shields.io/npm/v/better-date.js.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/better-date.js"><img src="https://img.shields.io/npm/dt/better-date.js.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/Anime-Development/better-date.js/actions"><img src="https://github.com/Gamearoos-development/discord-helper.js/actions/workflows/text.yml/badge.svg" alt="Tests status" /></a>
  </p>
  <a href="https://nodei.co/npm/better-date.js/"><img src="https://nodei.co/npm/better-date.js.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

## Utilisation & Example

> To install it, run the following command:

```batch
npm i better-date.js or yarn add better-date.js
```

> Code example:

```js
import * as betterDate from "better-date.js"; // typescript
const betterDate = require("better-date.js"); // javascript
/* examples */

new betterDate.BetterDate("America/New_York", 12)
  .formattedAsync(new Date())
  .then((data) => console.log(data))
  .catch((err) => {}); // {time, calendar}
```

>

## Additionnal Informations

> This package is under GNU Public Licence 3.0.
> Use the packages as your wishes.
> If you find any bugs, please repport them at https://github.com/Gamearoos-development/better-date.js/issues
> A suggestion? Send me an email or open an issue with the suggestion label!
> WE ARE NOT RESPONSIBLE FOR WHAT YOU DO WITH THE PACKAGE!
