# Quirk JS

![Learn Better](https://img.shields.io/badge/learn-better%2feasier%2fsmarter-blueviolet.svg)
![GitHub package.json version](https://img.shields.io/github/package-json/v/PaulNegoescu/quirk-js)
![Deps](https://img.shields.io/david/PaulNegoescu/quirk-js)
![Dev Deps](https://img.shields.io/david/dev/PaulNegoescu/quirk-js)

Quirk JS is a teaching tool meant to teach aspiring software engineers proper coding habbits and a bit of JavaScript syntax.

Quirk is inspired by [Karel the robot](http://karel.sourceforge.net/) (by Richard E. Pattis), also used in a Java version by the Stanford University in their [CS106A](https://www.youtube.com/playlist?list=PLFE2A69D0EA1C22B3) course.

Quirk is completely built in JavaScript and exposes both the script runner and a code editor, making it a completely independent solution.

Plans for the future include:

- Integration with [Blockly](https://developers.google.com/blockly/) as an alternate way of coding to encourage younger audiences
- A Lightbot-like interface (possibly based on Blockly similar to Scratch Blocks) to encourage even younger audiences

## Running Quirk

You need to have [nodejs](https://nodejs.org/) installed, preferably v.10+.

Pull the source and run `yarn` or `npm i`. There are no other dependencies.

Run Quirk using `yarn start` or `npm start`.

## Building and Hosting Quirk

Run `yarn build` or `npm run build` to get the built version then host it anyplace you'd like.

## License

Quirk is licenced under the [MIT Licence](https://opensource.org/licenses/MIT) which allows you to use it anywhere you'd like.

## FAQ

### Why did you pick React to do this? Why not just vanilla or anything else?

I started writing this using vanilla and decided I'd like a view engine and React was the one (because it's light and powerful by default). The code got exponentially more complex but it's also a bit more extensible and less custom, making it easy to reuse in other apps, especially React apps.

### Why did you overengineer the application's architecture (folder structure)?

This way you can just pluck out the Quirk feature (view) and use it in your own app or you can use the whole project as a starter for your own apps without much change.

### Why didn't you use brace or react-ace-editor?

I don't like brace's implementation of the Ace editor (it's hacky IMO) and Ace works fine by default with webpack plus it's easy to "reactify", thus bringing in an extra (or two) third party dep only detracts from the security and maintainability aspects of the app.
