# VINYLTHEQUE

Vinyltheque was made when I needed a way to catalogue my vinyl collection. It's not big but you still need a way to manage around. And, why not.

## How-To

clone the repo
```bash
git clone <https or ssh link>
```

install npm in backend and frontend
```bash
npm install
cd client
npm install
```

create a new database called 'vinyltheque' and import from db.sql (make sure you're in the root of the project)
```bash
mysql -uroot -p vinyltheque < db.sql
```

change your mysql user credentials in db.js
add a .env file in /client with PORT=<port-where-you-want-to-start-it(8000 or 3001)>

use npm to start both servers
```bash
npm run con
```

## credits
Logo done with [LogoMaker](https://logomakr.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)
