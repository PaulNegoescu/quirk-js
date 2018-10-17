# Caylo

Caylo is a teaching tool meant to teach aspiring software engineers proper coding habbits and a bit of JavaScript syntax.

Caylo is inspired by [Karel the robot](http://karel.sourceforge.net/) (by Richard E. Pattis), also used in a Java version by the Stanford University in their [CS106A](https://www.youtube.com/playlist?list=PLFE2A69D0EA1C22B3) course.

The name is partly inspired by Ryan Calo, because of his involvement in robot legalities. It is also a boy's name meaning origin.

Caylo is completely built in JavaScript and exposes both the script runner and a code editor, making it a completely independent solution. Plans for the future include integration with blockly

## Running Caylo

You need to have [nodejs](https://nodejs.org/) installed, preferably v.10+.

Pull the source and run `yarn` or `npm i`. There are no other dependencies.

Run Caylo using `yarn start` or `npm start`.

## Building and Hosting Caylo

Run `yarn build` or `npm run build` to get the built version then host it anyplace you'd like.

## License

Caylo is licenced under the [MIT Licence](https://opensource.org/licenses/MIT) which allows you to use it anywhere you'd like.

## FAQ

### Why did you pick React to do this? Why not just vanilla or anything else?

I started writing this using vanilla and decided I'd like a view engine and React was the one. The code got exponentially more complex but it's also a bit more extensible and less custom, making it easy to reuse in other apps, especially React apps.

### Why did you overengineer the application's architecture (folder structure)?

This way you can just pluck out the caylo feature (view) and use it in your own app or you can use the whole project as a starter for your own apps without much change.

### Why didn't you use brace?

See below answer.

### Why didn't you use react-ace-editor?

Because it uses brace and I don't like that implementation of the Ace editor (it's hacky IMO) and Ace works fine by default with webpack plus it's easy to "reactify", thus bringing in an extra third party dep only detracts from the security and maintainability aspects of the app.
