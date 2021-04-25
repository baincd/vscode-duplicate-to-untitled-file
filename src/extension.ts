import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	async function duplicateToNewUntitledFile() {
		if (!vscode.window.activeTextEditor?.document) {
			vscode.window.showErrorMessage("Unable to duplicate non text file");
			return;
		}
		const newDoc = await vscode.workspace.openTextDocument( {
			language: vscode.window.activeTextEditor?.document.languageId,
			content: vscode.window.activeTextEditor?.document.getText()
		});
		await vscode.window.showTextDocument(newDoc);
	}

	let disposable = vscode.commands.registerCommand('duplicate-to-untitled-file.duplicateToNewUntitledFile', () => {
		duplicateToNewUntitledFile();
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
