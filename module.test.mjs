/*
[F]ast, rapides, quelques milli-secondes maximum
[I]solated, isolés, aucun test ne dépend d’un autre, pour qu’une collection de tests puisse être jouée dans n’importe quel ordre
[R]epeatable, répétables, joués N fois, produisent toujours le même résultat
[S]elf-validating, auto-validés, chaque test doit être capable de déterminer si son résultat est celui attendu ou non. Il doit déterminer s’il a réussi ou échoué. Il ne doit pas y avoir d’interprétation manuelle des résultats
[T]imely, opportuns, ils doivent être écrits à peu près en même temps que le code qu’ils testent. Le TDD les écrit même avant
*/
// Par ddafaut Node.js fourni des outils de test. Ils sont simples mais efficaces.
// La bibliothères d'assertion est par contre assez limitée.
import { test } from 'node:test';
import assert from 'node:assert';
import { add, subtract } from './module.mjs';

// La fonction de test a besoin de 2 choses : 
// - un nom pour le test (cela peut-être une phrase descriptive). La phrase est généralement écrite en anglais.
// - une fonction qui contient le code du test (callback, en général une fonction fléchée)
test('1 + 2 should return 3', () => {
  // Ici dans le test on va utuliser la bibliothèque d'assertion pour vérifier que le résultat de la fonction add est bien celui attendu.
  const result = add(1, 2);
  assert.strictEqual(result, 3);
  /*
  if(result !== 3) {
    throw new Error(`Expected 3, but got ${result}`);
  } else {
    console.log('Test passed');
  }
  */
});

// Dans un fichier de test on peut fairte autant de test que nécessaire.
test('2 + 2 should return 4', () => {
  const result = add(2, 2);
  assert.strictEqual(result, 4);
});

test('2 - 1 should return 1', () => {
  const result = subtract(2, 1);
  assert.strictEqual(result, 1);
});

/// Comme on peut tester dans un sens on peut également tester dans l'autre sens.
// En vérfiant que le résultat n'est pas celui attendu, on peut s'assurer que la fonction ne renvoie pas un résultat incorrect.
test('2 - 1 should not return 3', () => {
  const result = subtract(2, 1);
  assert.notStrictEqual(result, 3);
});

