import * as vscode from 'vscode';
import { VSCodeGlobals } from './VSCodeGlobals';
import { attemptToGreetUser } from './WelcomeService';

const SAVED_VERSION = 'doki.theme.version';
const DOKI_THEME_VERSION = 'v2.2.1';

export function attemptToNotifyUpdates(context: vscode.ExtensionContext) {
    const savedVersion = VSCodeGlobals.globalState.get(SAVED_VERSION);
    if (savedVersion && savedVersion !== DOKI_THEME_VERSION) {
        VSCodeGlobals.globalState.update(SAVED_VERSION, DOKI_THEME_VERSION);
        vscode.window.showInformationMessage(`Doki Theme updated to ${DOKI_THEME_VERSION}. Use "Doki Theme Changelog" command for more info.`);
    } else if (!savedVersion) {
        VSCodeGlobals.globalState.update(SAVED_VERSION, DOKI_THEME_VERSION);
        attemptToGreetUser(context);
    }
}