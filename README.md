# cesar-encrypt

This package has been used to encrypt text with Cesar's wheel way.

## How to use with TS

```typescript
// utils/encrypter.ts

import * as cesarEncrypt from 'cesar-encrypt';

const encrypter = cesarEncrypt.default();

export const encryptByKey = (text: string, textKey: string) => {
  return encrypter.encryptByKey(text, textKey);
}

export const desencryptByKey = (text: string, textKey: string) => {
  return encrypter.desencryptByKey(text, textKey);
}
```

## How to use custom wheel

Default: 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ'

```typescript
import * as cesarEncrypt from 'cesar-encrypt';

const encrypter = cesarEncrypt.default();

encrypter.setAbc('abcABC');
```