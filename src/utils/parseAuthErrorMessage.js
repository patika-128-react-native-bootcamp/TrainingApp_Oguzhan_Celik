export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz E-posta';
    case 'auth/email-already-exists':
      return 'Kullanıcı Kayıtlı';
    case 'auth/user-not-found':
      return 'Kullanıcı Bulunamadı';
    case 'auth/weak-password':
      return 'Parola Çok Zayıf';
    case 'auth/wrong-password':
      return 'Parola Yanlış';
    default:
      return errorCode;
  }
}
