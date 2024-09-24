# UnivRouen Model

## Description

L'extension **UnivRouen Model** pour Visual Studio Code permet d'insérer rapidement un template de fichier source C contenant les informations de base telles que le nom du programme, la date de création, l'auteur et un descriptif. Cette extension est particulièrement utile pour les étudiants ou les enseignants de l'Université de Rouen qui doivent régulièrement respecter un format standard de programmation en C.

## Fonctionnalités

- Insertion d'un template prédéfini pour les fichiers C, incluant :
  - Nom du programme
  - Date de création (avec la date actuelle par défaut)
  - Auteur(s)
  - Descriptif du programme
- Raccourci clavier pour insérer rapidement le template.
- Les informations du template peuvent être personnalisées via des invites.

### Exemple de template généré

```c
/* NomDuProgramme
 * 24 Septembre 2024
 * Ada Lovelace
 * Ce programme fait XYZ
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
```

## Installation

1. Installez l'extension à partir du [Visual Studio Marketplace](https://marketplace.visualstudio.com/VSCode).
2. Après l'installation, vous pouvez utiliser la commande `Insert Main Template` pour insérer un template dans votre fichier C.

## Utilisation

### 1. Palette de commandes

- Ouvrez la palette de commandes avec `Ctrl+Shift+P`.
- Recherchez et sélectionnez **Insert Main Template**.

### 2. Raccourci clavier

- Utilisez le raccourci `Ctrl+Shift+C` (ou `Cmd+Shift+C` sur Mac) pour insérer le template directement dans l'éditeur de texte.

## Configuration

### Valeurs par défaut

Lorsque vous utilisez la commande pour insérer un template, vous serez invité à saisir certaines informations. Si vous laissez ces champs vides, les valeurs par défaut suivantes seront utilisées :

- **Nom du programme** : Le nom du fichier actuel sans son extension.
- **Date de création** : La date du jour au format `dd Month yyyy` (par exemple, `24 Septembre 2024`).
- **Auteur(s)** : Champ vide si aucune information n'est fournie.
- **Descriptif du programme** : Champ vide si aucune information n'est fournie.

## Commandes

L'extension ajoute la commande suivante à Visual Studio Code :

| Commande                              | Description                                                | Raccourci                     |
| ------------------------------------- | ---------------------------------------------------------- | ----------------------------- |
| `univrouen-model.insertMainTemplate`  | Insère le template C dans le fichier actuel                | `Ctrl+Shift+C` (ou `Cmd+Shift+C` sur Mac) |

## Contributions

Les contributions sont les bienvenues. Pour soumettre des suggestions, signaler un problème, vous pouvez me contacter par [mail](mailto:adrien.philibert@univ-rouen.fr) ou via [Discord](https://discord.com/users/434078202856603648)
## Authors

- [@parziterz](https://www.github.com/parziterz)

## Licence

Cette extension est publiée sous la licence MIT.
