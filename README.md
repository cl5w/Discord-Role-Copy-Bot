# Rol Kopyalama Botu

Belirli bir rol aralığını bir Discord sunucusundan başka bir sunucuya **yönetici yetkisiyle** kopyalamak için tasarlanmış basit bir bot.

---

## ⚙️ Kurulum

1. Repoyu klonla:
   ```bash
   git clone https://github.com/cl5w/kopyalama-bot.git
   cd kopyalama-bot


2. Gerekli Paketleri kur:

npm install


3. config.json dosyası oluştur ve aşağıdaki gibi düzenle:

{
  "token": "bot_tokenin_buraya",
  "clientId": "uygulama_id",
  "sourceGuildId": "kaynak_sunucu_id",
  "targetGuildId": "hedef_sunucu_id"
}


4. Komutları deploy et:

npm run deploy


5. node index.js


- Slash Komutu
/rolleri-kopyala → Belirli adlar arası roller hedef sunucuya kopyalanır.

- Yetki
Bu komut sadece yönetici yetkisine sahip kullanıcılar tarafından kullanılabilir.

- Notlar
config.json dosyası .gitignore içinde olduğu için GitHub'a yüklenmez.

