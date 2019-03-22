enum possibleThemesLight {
  'chrome' = 'Chrome',
  'clouds' = 'Clouds',
  'crimson_editor' = 'Crimson Editor',
  'dawn' = 'Dawn',
  'dreamweaver' = 'Dreamweaver',
  'eclipse' = 'Eclipse',
  'github' = 'Github',
  'iplastic' = 'iPlastic',
  'katzenmilch' = 'Katzenmilch',
  'kuroir' = 'Kuroir',
  'solarized_light' = 'Solarized',
  'sqlserver' = 'SQL Server',
  'textmate' = 'TextMate',
  'tomorrow' = 'Tomorrow',
  'xcode' = 'XCode',
}

enum possibleThemesDark {
  'ambiance' = 'Ambiance',
  'chaos' = 'Chaos',
  'clouds_midnight' = 'Clouds Midnight',
  'cobalt' = 'Cobalt',
  'dracula' = 'Dracula',
  'gob' = 'Gob',
  'gruvbox' = 'Gruvbox',
  'idle_fingers' = 'Idle Fingers',
  'kr_theme' = 'KR Theme',
  'merbivore' = 'Merbivore',
  'mono_industrial' = 'Mono Industrial',
  'monokai' = 'Monokai',
  'pastel_on_dark' = 'Pastel on Dark',
  'solarized_dark' = 'Solarized Dark',
  'terminal' = 'Terminal',
  'twilight' = 'Twilight',
  'tomorrow_night' = 'Tomorrow Night',
  'tomorrow_night_blue' = 'Tomorrow Night Blue',
  'tomorrow_night_bright' = 'Tomorrow Night Bright',
  'tomorrow_night_eighties' = 'Tomorrow Night Eighties',
  'vibrant_ink' = 'Vibrant Ink',
}

const acePaths = { theme: 'ace/theme', mode: 'ace/mode' };

const defaultTheme = 'tomorrow_night_eighties';

const aceDefaultProps = {
  mode: `${acePaths.mode}/javascript`,
  highlightSelectedWord: true,
  vScrollBarAlwaysVisible: true,
  scrollPastEnd: 0.5 as number | boolean,
  theme: defaultTheme,
  newLineMode: 'unix' as 'auto' | 'unix' | 'windows',
  useSoftTabs: true,
  fontSize: 14 as number | string,
};

const editor = {
  className: 'code-editor',
  localStorageKey: 'gana-editor',
  paths: acePaths,
  possibleThemesLight,
  possibleThemesDark,
  defaultProps: aceDefaultProps,
};

const config = {
  editor,
};

export default config;
