# Day 16 : NPM ke Important Commands

### 1. `npm init`
**Kaam**: Naya package create karne ke liye. Ye aapko `package.json` file create karne mein madad karta hai jo aapke project ke dependencies aur configurations ko define karta hai.

### 2. `npm install` (ya `npm i`)
**Kaam**: Ek package ko install karne ke liye. Aap specific package ko install karne ke liye `npm install <package-name>` ka istemal karte hain. Agar aap sirf `npm install` likhte hain, toh ye `package.json` me listed sabhi packages ko install karega.

### 3. `npm uninstall` (ya `npm remove`)
**Kaam**: Ek package ko uninstall karne ke liye. Iska format hai `npm uninstall <package-name>`.

### 4. `npm update`
**Kaam**: Aapke installed packages ko update karne ke liye. Ye packages ko latest version mein upgrade karega.

### 5. `npm list` (ya `npm ls`)
**Kaam**: Aapke project mein installed packages ki list dikhata hai. Is command se aap dependencies ka structure dekh sakte hain.

### 6. `npm search`
**Kaam**: NPM registry mein kisi package ko search karne ke liye. Aap kisi specific package ka naam ya keywords daal kar search kar sakte hain.

### 7. `npm init -y`
**Kaam**: Naya package create karne ke liye, lekin is baar aapko prompts ka jawab nahi dena padta, ye default values ke saath `package.json` create karta hai.

### 8. `npm audit`
**Kaam**: Aapke project mein security vulnerabilities ko scan karne ke liye. Ye check karta hai ki aapke packages mein koi known vulnerabilities toh nahi hain.

### 9. `npm run`
**Kaam**: Aapke `package.json` file mein defined scripts ko run karne ke liye. Jaise `npm run start` ya `npm run test`.

### 10. `npm config`
**Kaam**: NPM configuration settings ko manage karne ke liye. Aap NPM ke behavior ko customize karne ke liye configurations set kar sakte hain.

### 11. `npm cache`
**Kaam**: NPM ke cache ko manage karne ke liye. Cache ko clear karne ya cache ka status dekhne ke liye commands hoti hain, jaise `npm cache clean --force`.

# Additional Commands

### 12. `npm publish`
**Kaam**: Aapka package NPM registry par publish karne ke liye.

### 13. `npm deprecate`
**Kaam**: Kisi package ko deprecate karne ke liye, jisse users ko pata chale ki wo package future mein support nahi hoga.

### 14. `npm install --global` (ya `npm i -g`)
**Kaam**: Package ko globally install karne ke liye, jisse wo system ke kisi bhi project se accessible ho.

### 15. `npm run build`
**Kaam**: Build script run karne ke liye, jo aapke project ko production-ready banata hai.
