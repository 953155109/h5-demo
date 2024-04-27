/*
 * @Descripttion: 
 * @version: 
 * @Author: EVE
 * @Date: 2024-04-27 15:15:49
 * @LastEditors: EVE
 * @LastEditTime: 2024-04-27 15:41:57
 */
// 引入 TypeScript 类型定义
import {defineComponent} from 'vue';
import CryptoJS from 'crypto-js';

const charCodes: number[] = [115, 104, 101, 110, 45, 119, 97, 110, 103, 45, 121, 117, 110, 45, 115, 101, 99, 114, 101, 116, 45, 107, 101, 121];

export function encryptData(data) {// 替换为你的密钥
  const key = CryptoJS.enc.Utf8.parse(String.fromCharCode(...charCodes));
  const encrypted = CryptoJS.AES.encrypt(data, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

export function decryptData(encryptedData) {
  const key = CryptoJS.enc.Utf8.parse(String.fromCharCode(...charCodes));
  const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decrypted);
}
