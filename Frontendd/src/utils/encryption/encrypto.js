const crypto=require('crypto');
const key=crypto.randomBytes(32);
const iv=crypto.randomBytes(16);
const algorithm='aes-256-cbc';
function encrypt(text,key,iv,algorithm){
    let cipher=crypto.createCipheriv(algorithm,key,iv);
    let encrypted=cipher.update(text);
    encrypted=Buffer.concat([encrypted,cipher.final()]);
    return {iv:iv.toString('hex'),encryptedData:encrypted.toString('hex')};
}
function decryptData(encryptedData, key, iv, authTag) {
    let decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(iv, 'hex'));
    decipher.setAuthTag(Buffer.from(authTag, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

module.exports={encrypt,decryptData};

    