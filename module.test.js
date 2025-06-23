// Contrairement au module natifd de node, on doit utiliser l'executablez fourni dans le module jest pour exécuter les tests
// C'est exécutable n'est pas accessible directement dans l'environnement du terminal
// Pour cela il faudrait l'installer de façon global sur la machine.
// On peut ne pas installer de façon global en exécutant jest à partir d'un script npm

// Jest rend disponible de manière globale les méthodes test, describe et expect
// On peut donc les utiliser sans les importer
// import { test, describe, expect } from 'jest';

//import assert from 'node:assert';
import { add, subtract } from './module.js';


describe('Testing the add function', () => {

  
  test('1 + 2 should return 3', () => {
    const result = add(1, 2);
    //assert.strictEqual(result, 3);
    expect(result).toStrictEqual(3);
  });

  test('2 + 2 should return 4', () => {
    const result = add(2, 2);
    
    expect(result).toStrictEqual(4);
  });

  test('"2" + "2" should return 4', () => {
    const result = add('2', '2');
    expect(result).toStrictEqual(4);
  });

  test('"2.5" + "2" should return 4', () => {
    const result = add('2.5', '2');
    expect(result).toStrictEqual(4.5);
  });

  test('"2" + "2.5" should return 4', () => {
    const result = add('2', '2.5');
    expect(result).toStrictEqual(4.5);
  });

  test('"michel" + "2.5" should return error', () => {
    expect(() => add('michel', '2.5')).toThrow();
  });
});


describe('Testing the subtract function', () => {

  test('2 - 1 should return 1', () => {
    const result = subtract(2, 1);
    expect(result).toStrictEqual(1);
  });
  /*
  test('2 - 1 should not return 3', () => {
    const result = subtract(2, 1);
    expect(result).toStrictEqual(3);
  });
  */
});

