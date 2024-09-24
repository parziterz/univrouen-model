import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension UnivRouen activée!');

    let disposable = vscode.commands.registerCommand('univrouen-model.insertMainTemplate', async () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const fileName = path.basename(editor.document.fileName, path.extname(editor.document.fileName));
            const today = new Date();
            const formattedDate = today.toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',  // Mois en toutes lettres
                year: 'numeric'
            });

            const programNameInput = await vscode.window.showInputBox({
                prompt: "Nom du programme",
                placeHolder: "Exemple : MonProgramme [Entrée pour utiliser le nom du fichier]",
                value : fileName
            });
            const programName = programNameInput || fileName;

            const creationDateInput = await vscode.window.showInputBox({
                prompt: "Date de création",
                placeHolder: "Exemple : 24 Septembre 2024 [Entrée pour utiliser la date du jour]",
                value: formattedDate
            });
            const creationDate = creationDateInput || formattedDate;

            const authorName = await vscode.window.showInputBox({
                prompt: "Auteur(s)/Auteure(s)",
                placeHolder: "Exemple : Ada Lovelace"
            });

            const description = await vscode.window.showInputBox({
                prompt: "Descriptif du programme",
                placeHolder: "Exemple : Ce programme fait XYZ"
            });

            const programNameFinal = programName || "Nom du programme";
            const creationDateFinal = creationDate || "Date de Création";
            const authorNameFinal = authorName || "Auteur(s)/Auteure(s)";
            const descriptionFinal = description || "Descriptif du programme";

            const mainTemplate = `
/* ${programName}
 * ${creationDate}
 * ${authorNameFinal}
 * ${descriptionFinal}
 */

/* Appel des bibliothèques */
#include <stdio.h>
#include <stdlib.h>

/* Déclarations des fonctions et des macros */


/* Fonction principale */

int main(void) {
    return EXIT_SUCCESS;
}

/* Définitions des fonctions */
`;

            const selection = editor.selection;

            editor.edit(editBuilder => {
                editBuilder.insert(selection.active, mainTemplate);
            });

            vscode.window.showInformationMessage('Template main inséré !');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
