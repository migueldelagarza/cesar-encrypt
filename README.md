# cesar-encrypt

This package is used to encrypt text using Cesar's wheel method.

## Installation

Install the package via npm:

```bash
npm install cesar-encrypt
```

## How to use with TypeScript

```typescript
// utils/encrypter.ts

import cesarEncrypt from 'cesar-encrypt';

export const encryptByKey = (text: string, textKey: string) => {
  return cesarEncrypt.encryptByKey(text, textKey);
};

export const desencryptByKey = (text: string, textKey: string) => {
  return cesarEncrypt.desencryptByKey(text, textKey);
};
```

## How to use a custom wheel

The default wheel is:  
`'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ'`

You can set a custom wheel using the `setAbc` method:

```typescript
import cesarEncrypt from 'cesar-encrypt';

cesarEncrypt.setAbc('abcABC'); // Custom wheel
const encryptedText = cesarEncrypt.encrypt('abc', 1);
console.log(encryptedText); // Output: 'bca'
```

## API Reference

### `setAbc(newAbc: string): void`
Sets a custom alphabet (wheel) for encryption and decryption.

### `encrypt(text: string, position: number): string`
Encrypts the given text by shifting characters by the specified position.

### `desencrypt(text: string, position: number): string`
Decrypts the given text by reversing the shift applied during encryption.

### `encryptByKey(text: string, key: string): string`
Encrypts the given text using a key. Each character in the key determines the shift for the corresponding character in the text.

### `desencryptByKey(text: string, key: string): string`
Decrypts the given text using a key. Each character in the key determines the reverse shift for the corresponding character in the text.

## Example Usage

```typescript
import cesarEncrypt from 'cesar-encrypt';

// Encrypt with a position
const encrypted = cesarEncrypt.encrypt('hello', 3);
console.log(encrypted); // Output depends on the default wheel

// Decrypt with a position
const decrypted = cesarEncrypt.desencrypt(encrypted, 3);
console.log(decrypted); // Output: 'hello'

// Encrypt with a key
const encryptedByKey = cesarEncrypt.encryptByKey('hello', 'key');
console.log(encryptedByKey);

// Decrypt with a key
const decryptedByKey = cesarEncrypt.desencryptByKey(encryptedByKey, 'key');
console.log(decryptedByKey);
```