import ace from 'ace-builds'
import config from './config'

import 'ace-builds/webpack-resolver'

export default function boot() {
  const editor = ace.edit(
    document.querySelector(config.editor.selector) as HTMLElement,
    {
      mode: 'ace/mode/javascript',
      theme: `ace/theme/${config.editor.defaultTheme}`,
    },
  )
}
