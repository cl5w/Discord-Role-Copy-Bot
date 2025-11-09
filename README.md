# 🚀 Role Copy Bot

A simple and efficient bot designed to copy a specific range of roles from one Discord server to another using administrator privileges.

---

## ⚙️ Setup

### 🔁 1. Clone the Repository
```bash
git clone https://github.com/cl5w/Discord-Role-Copy-Bot.git
cd Discord-Role-Copy-Bot
```

### 📦 2. Install Dependencies
```bash
npm install
```

### 🧾 3. Create the config.json File
Create a file named `config.json` in the project

```json
{
  "token": "your_bot_token_here",
  "clientId": "application_id",
  "sourceGuildId": "source_server_id",
  "targetGuildId": "target_server_id"
}
```

> ⚠️ This file is listed in `.gitignore` so it will not be uploaded to GitHub.

---

## 🛠️ Commands

### `/rolleri-kopyala`
Copies all roles between two specified role names (e.g., from a to f) to the target server without any

> 🔐 Only members with Administrator privileges can use this command.

---

## 📝 Notes

- The config.json file contains sensitive information (like your bot token), so never upload it publicly.
- The bot only processes roles within the specified name range.

---

## 🧑‍💻 Developer

**cl5w**  
GitHub: [github.com/cl5w](https://github.com/cl5w)
