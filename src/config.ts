interface IConfig {
  editor: {
    // the implicit theme of the editor if none is selected by the user, see https://github.com/ajaxorg/ace/tree/master/lib/ace/theme for options
    defaultTheme: any
    // what element will be transformed by the ace editor
    selector: string
  }
}

const config: IConfig = {
  editor: {
    defaultTheme: 'tomorrow_night',
    selector: '.code-editor',
  },
}

export default config
