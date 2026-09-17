A One-Time Pad (OTP) encryption system can be perfectly implemented in
JavaScript using the Bitwise XOR (^) operator. When you XOR a data byte with a
key byte, it encrypts the data; XORing the encrypted byte with the exact same
key byte decrypts it back to its original form

To satisfy the rules of a mathematically unbreakable OTP, your implementation
must use a cryptographically secure random key that is the exact same length as
the message, never reused, and kept entirely secret. [1]
(https://github.com/lucaspetter/onetimepadjs), [2]
(https://www.tech-vantage.com/jsc/jsc.htm)

This implementation utilizes standard Uint8Array byte arrays to handle any input
data (including emojis and special characters) and relies on the browser/Node.js
crypto API to generate secure random keys

## Modern JavaScript Implementation

```ts
// Helper to convert strings to byte arrays and vice-versa
const encoder = new TextEncoder();
const decoder = new TextDecoder();

/**
 * Generates a cryptographically secure random key of a specific byte length.
 * @param {number} length
 * @returns {Uint8Array}
 */
function generateKey(length) {
    const key = new Uint8Array(length);
    // Uses the environment's secure cryptographic RNG
    crypto.getRandomValues(key);
    return key;
}

/**
 * Encrypts or decrypts bytes using the XOR operation.
 * Because XOR is symmetric, this single function handles both actions.
 * @param {Uint8Array} dataBytes
 * @param {Uint8Array} keyBytes
 * @returns {Uint8Array}
 */
function xorTransform(dataBytes, keyBytes) {
    if (dataBytes.length !== keyBytes.length) {
        throw new Error("Key length must exactly match the data length.");
    }

    const result = new Uint8Array(dataBytes.length);
    for (let i = 0; i < dataBytes.length; i++) {
        result[i] = dataBytes[i] ^ keyBytes[i]; // XOR operation
    }
    return result;
}

// ==========================================
// Example Usage:
// ==========================================

const secretMessage = "Hello World! 🔐";
console.log("Original Message:", secretMessage);

// 1. Convert plaintext string to a byte array
const secretBytes = encoder.encode(secretMessage);

// 2. Generate a secure pad matching the message length
const padKey = generateKey(secretBytes.length);

// 3. Encrypt the data
const encryptedBytes = xorTransform(secretBytes, padKey);
// Represent cipher text safely as a Hex string for transmission/storage
const cipherHex = Array.from(encryptedBytes).map((b) =>
    b.toString(16).padStart(2, "0")
).join("");
console.log("Ciphertext (Hex):", cipherHex);

// 4. Decrypt the data (using the exact same key)
const decryptedBytes = xorTransform(encryptedBytes, padKey);
const recoveredMessage = decoder.decode(decryptedBytes);
console.log("Decrypted Message:", recoveredMessage);
```

## Caveats

While the code above is simple, deploying a true One-Time Pad in real-world
JavaScript environments introduces severe practical vulnerabilities:The Key
Reuse Trap:

- If you ever encrypt two different messages with the exact same key, an
  eavesdropper can XOR the two ciphertexts together. This completely eliminates
  the key and leaves a combined text that is easily cracked using frequency
  analysis
- The Randomness Factor: Standard Math.random() is predictable and must never be
  used for cryptography. You must always rely on crypto.getRandomValues()
  (browsers) or crypto.randomBytes() (Node.js) to generate the pad
- Key Distribution: The key must be as large as the message itself. If you
  already have a perfectly secure, private side-channel capable of transmitting
  a massive key file to your recipient, you could just use that same channel to
  send the secret message directly, rendering the OTP redundant for most
  standard web applications
