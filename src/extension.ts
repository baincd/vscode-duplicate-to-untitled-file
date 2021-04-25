import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('duplicate-to-untitled-file.duplicateToNewUntitledFile', () => {
			duplicateToNewUntitledFile(false);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('duplicate-to-untitled-file.replaceWithDuplicatedNewUntitledFile', () => {
			duplicateToNewUntitledFile(true);
		})
	);

	async function duplicateToNewUntitledFile(replace: boolean) {
		if (!vscode.window.activeTextEditor?.document) {
			vscode.window.showErrorMessage("Unable to duplicate non text file");
			return;
		}
		let srcDoc = vscode.window.activeTextEditor.document;
		const newDoc = await vscode.workspace.openTextDocument( {
			language: vscode.window.activeTextEditor?.document.languageId,
			content: vscode.window.activeTextEditor?.document.getText()
		});
		await vscode.window.showTextDocument(newDoc, {preview: false});
		if (replace) {
			await vscode.window.showTextDocument(srcDoc, {preview: false});
			await vscode.commands.executeCommand("workbench.action.closeActiveEditor");			
		}
	}

}

export function deactivate() {}
