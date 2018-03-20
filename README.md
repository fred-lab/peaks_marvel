Test Peaks

Réalisé avec Symfony 4, Vuejs, Vuex, Vue-router, Axios

Pre-requis
- PHP7.1.3 

Installation
- Cloner le repo
- Se rendre à la racine du projet, puis installer les dépendances de composer : ```composer install```
- Dans le terminal, taper : ```cp .env.dist .env```
- Editer le fichier .env pour renseigner les informations de connexion à l'API MARVEL, en ajoutant la clé publique et la clé privé

- Installer les dépendances via NPM : ```npm install```
- Compiler les assests : ```npm run build```

L'application est disponible à l'adresse : http://localhost:8000/

Le retour de l'API peut être long, un axe d'amélioration serait peut-être de mettre ces données en cache.
