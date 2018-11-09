import config from '../config';

// the provided types force a complete object to be passed, defining them ourselves we make this work properly
export type EditorProps = {
  hScrollBarAlwaysVisible?: boolean;
  highlightGutterLine?: boolean;
  animatedScroll?: boolean;
  showInvisibles?: boolean;
  showPrintMargin?: boolean;
  printMarginColumn?: number;
  printMargin?: false | number;
  fadeFoldWidgets?: boolean;
  showFoldWidgets?: boolean;
  showLineNumbers?: boolean;
  showGutter?: boolean;
  displayIndentGuides?: boolean;
  fontFamily?: 'string';
  // resize editor based on the contents of the editor until the number of lines reaches maxLines
  maxLines?: number;
  minLines?: number;
  fixedWidthGutter?: boolean;

  scrollSpeed?: number;
  dragDelay?: number;
  dragEnabled?: boolean;
  focusTimout?: number;
  tooltipFollowsMouse?: boolean;

  firstLineNumber?: number;
  overwrite?: boolean;
  useWorker?: boolean;
  tabSize?: number;
  wrap?: boolean | number;
  foldStyle?: 'markbegin' | 'markbeginend' | 'manual';
  mode?: string;

  enableMultiselect?: boolean;
  enableEmmet?: boolean;
  enableBasicAutocompletion?: boolean;
  enableLiveAutocompletion?: boolean;
  enableSnippets?: boolean;
  spellcheck?: boolean;
  useElasticTabstops?: boolean;

  baseClass?: string;
} & Partial<typeof config.editor.defaultProps>;

export interface ICodeEditorContext {
  baseClass?: string;
  editorProps?: EditorProps;
  onConfigurationChange?: (conf: string | EditorProps, value?: string) => void;
}
