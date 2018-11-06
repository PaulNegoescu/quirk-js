import * as React from 'react';
import config from '../config';
import { EditorProps } from './types';

export interface ICodeEditorContext {
  baseClass?: string;
  editorProps?: EditorProps;
  onConfigurationChange?: (conf: string | EditorProps, value?: string) => void;
}

const CodeEditorContext = React.createContext<ICodeEditorContext>({
  baseClass: config.editor.className,
});

export default CodeEditorContext;
