import {expect} from 'chai'

import * as vscode from 'vscode';

describe('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	it('Sample test', async () => {
		expect([1, 2, 3].indexOf(5)).to.be.eq(-1)
		expect([1, 2, 3].indexOf(1)).to.be.eq(-1)
	});
});
