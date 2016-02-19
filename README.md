Twitter : [blongearet](twitter.com/blongearet)
Skype : [firehist](callto:firehist)
Email : [blongearet@gmail.com](mailto:blongearet@gmail.com)
Slack : [nomades-advanced.slack.com](http://nomades-advanced.slack.com)

# Récupérer le projet github en local
`git clone https://github.com/firehist/angular-training`

# Installation des dépendences
## NodeJS & NPM
Site web : https://nodejs.org/
Installer NodeJS en cliquant sur "Install".
NodeJS installe automatiquement NPM.
## bower, live-server
`npm install -g bower live-server`

# Installation du projet
`npm install && bower install`

# Lancement du server HTTP
Le `live-server` est à lancer depuis le dossier ROOT du projet.
`cd angular-training && live-server`

# Mettre à jour
**/!\ Attention : Le git reset efface TOUTES vos modifications locales**
`git reset --hard HEAD && git pull --rebase`

Mettre à jour sans perdre les données:
`git stash && git pull --rebase && git stash pop`

# Créer un nouveau projet avec `npm` & `bower`
```
mkdir my-project && cd my-project
npm init
bower init
bower install --save jquery angularjs
mkdir src && cd src
touch index.html
touch app.js
```

# Sublime Text 3 Plugins
http://www.hongkiat.com/blog/sublime-text-plugins/
