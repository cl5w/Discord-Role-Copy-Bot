# 🚀 Rol Kopyalama Botu

Belirli bir rol aralığını bir Discord sunucusundan başka bir sunucuya **yönetici yetkisiyle** kopyalamak için tasarlanmış sade ve etkili bir bot.

---

## ⚙️ Kurulum

### 🔁 1. Repoyu Klonla
```bash
git clone https://github.com/cl5w/kopyalama-bot.git
cd kopyalama-bot
```

### 📦 2. Gerekli Paketleri Kur
```bash
npm install
```

### 🧾 3. `config.json` Dosyasını Oluştur
Proje dizinine `config.json` adında bir dosya aç ve aşağıdaki gibi düzenle:

```json
{
  "token": "bot_tokenin_buraya",
  "clientId": "uygulama_id",
  "sourceGuildId": "kaynak_sunucu_id",
  "targetGuildId": "hedef_sunucu_id"
}
```

> ⚠️ Bu dosya `.gitignore` içinde olduğundan GitHub'a yüklenmez.

---

## 🛠️ Komutlar

### `/rolleri-kopyala`
Belirttiğin iki rol adı (örn: `a` ile `f`) arasındaki tüm rolleri **yetkisiz** şekilde hedef sunucuya kopyalar.

> 🔐 Bu komut yalnızca **Yönetici** yetkisine sahip kişiler tarafından kullanılabilir.

---

## 📝 Notlar

- **config.json** içeriğinde token gibi gizli bilgiler bulunduğu için **GitHub'a dahil edilmez**.
- Bot, yalnızca belirtilen rol isimleri aralığını dikkate alır.

---

## 🧑‍💻 Geliştirici

**cl5w**  
GitHub: [github.com/cl5w](https://github.com/cl5w)
