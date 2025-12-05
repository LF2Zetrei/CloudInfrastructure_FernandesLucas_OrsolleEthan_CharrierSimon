
# Projet de Cloud Infrastructure

Ce projet à pour but de prendre une application et de la rendre disponible sur Google Cloud Provider, tout en créant une pipeline CI/CD, automatisant le déploiement et les tests.


## Auteurs du projet

- [Lucas Fernandes](https://github.com/LF2Zetrei)
- [Ethan Orsolle](https://github.com/eorstyb)
- [Simon Charrier](https://github.com/LF2Zetrei)


## Documentation

### Explications du fonctionnement

Ce projet est une encyclopédie montrant des informations sur les 151 premiers pokémon. Il est consultable [ici](https://frontend-506788352665.europe-west1.run.app/)
Le frontend à été fait avec React, et communique avec une base de données SQL via un backend fait en JEE/Springboot.

#### Fonctionnement standard

Ce qui fait que ce projet est spécial est la pipeline en amont. En effet, après un push sur un [repos git](https://github.com/LF2Zetrei/CloudInfrastructure_FernandesLucas_OrsolleEthan_CharrierSimon), un déclencheur sur Google Cloud Build démarre automatiquement le test, le build et le déploiement de l'application sur Google Cloud Run. Il est aussi possible de lancer manuellement ce déclencheur depuis la console cloud.

#### Fonctionnement en local

Il est possible de faire tourner le frontend en local dans un conteneur docker. Pour le backend c'est plus compliqué car il faut impérativement le *cloud sql auth proxy*.
Il faut donc installer ce paquet via cette suite de commandes :
```
wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O cloud_sql_proxy
```
```
chmod +x cloud_sql_proxy
```
```
sudo mv cloud_sql_proxy /usr/local/bin/
```
Lancement du proxy :
```
cloud_sql_proxy -instances=pokedex-474408:europe-west1:poke-instance=tcp:<your_port>
```
Et adapter la jdbc :
```
jdbc:mysql://localhost:3307/pokedb?useSSL=false&serverTimezone=UTC
```

### Schéma de fonctionnement :
![Schéma de flux de l'application](https://i.imgur.com/ydAUZsH.png "Schéma de flux")


## Couverture des exigences

### Fonctionnalité :
Le site fonctionne parfaitement, avec un fallback en cas d'echec de connexion à la base de donnée. Il est correctement déployé sur GCP et accessible de n'importe où. En revanche il est impossible de le laisser ouvert trop longtemps faute de crédits.

### Architecture :

Le projet suis une pipline CI/CD : Quand un push est fait sur le github, le projet est automatiquement build et déployé sur GCP. Git ne sert que d'outil de collaboration dans ce cas là.

### Documentation :
Le document que vous êtes en train de lire ainsi que les captures d'écran et le YAML fournis avec ce dernier sont rédigés correctement, fournis et montrent le bon fonctionnement de notre projet. De plus, le diagramme présenté dans la partie documentation de ce document décrit la pipline de manière fidèle.

### Gestion des ressources :
Nous utilisons deux machines virtuelles communiquant entre elles. Cependant, le frontend ne pèse presque rien et est payé à la requête. De même pour la base de donnée, dont on a désactivé les back-up car il n'est pas prévue de la rendre modifiable. Pour chaque utilisation, le frontend fait une unique requête au backend, donnant un coût très faible. De plus, seul les rôles et machines virtuelles utiles ont été laissé, les autres outils crées à des fins de tests ont été supprimmés par nos soins.

### Innovation :
Avant déploiement, des tests ES lint sont effectués. Si ils ne passent pas, le build échou. De plus, il est toujours possible de revenir à une version précédente si il y a un problème via un rollback.

## Captures d'écran

Ces images montrent l'automatisation des builds et de la vérification, avec un historique de builds et le déclencheur :
![Capture d'écran de l'historique des builds GCP.](https://i.imgur.com/RS17A3n.png "Historique des builds gcp")
![Déclencheur](https://i.imgur.com/X0UICnm.png "Déclencheur gcp")

Enfin, voici une image du site en fonctionnement :
![Image du pokédex](https://i.imgur.com/hKzvyWz.png "Pokédex")
