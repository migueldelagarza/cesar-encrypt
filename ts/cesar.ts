const cesar = () => {
  let abc = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ';

  const getAbcArray = () => abc.split('');
  const setAbc = (newAbc: string) => abc = newAbc;

  const getencryptedAbcArray = (position: number) => {
    const encrypted = getAbcArray();
    for (let i = 0; i < position; i++) {
      const lastElement = encrypted.pop();
      if (lastElement !== undefined) {
        encrypted.unshift(lastElement);
      }
    }
    return encrypted;
  };

  const transformText = (text: string, position: number, sourceArray: string[], targetArray: string[]) => {
    return text.split('').map((char) => {
      const index = sourceArray.indexOf(char);
      return index !== -1 ? targetArray[index] : char;
    }).join('');
  };

  const encrypt = (text: string, position: number) => {
    const abcArray = getAbcArray();
    const encryptedAbcArray = getencryptedAbcArray(position);
    return transformText(text, position, abcArray, encryptedAbcArray);
  };

  const desencrypt = (text: string, position: number) => {
    const abcArray = getAbcArray();
    const encryptedAbcArray = getencryptedAbcArray(position);
    return transformText(text, position, encryptedAbcArray, abcArray);
  };

  const transformTextByKey = (text: string, key: string, transformFunc: (text: string, position: number) => string) => {
    let i = 0;
    return text.split('').map(char => {
      if (i === key.length) {
        i = 0;
      }
      const position = key.charCodeAt(i) - 96;
      i++;
      return transformFunc(char, position);
    }).join('');
  };

  const encryptByKey = (text: string, key: string) => transformTextByKey(text, key, encrypt);

  const desencryptByKey = (text: string, key: string) => transformTextByKey(text, key, desencrypt);

  return {
    setAbc,
    encrypt,
    desencrypt,
    encryptByKey,
    desencryptByKey
  };
};

export default cesar();