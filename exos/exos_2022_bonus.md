
### 1. Faire un "game-show"

Afficher le détail d'un jeu, accessible depuis le component "card-game"

Sur celle-ci, affichez :
- Toutes les informations du jeu (description, toutes les langues dans lequel est disponible, etc)
- Son éditeur !
- Les commentaires du jeu
(idéalement paginé si vous le sentait ?! => on accède aux commentaires directement depuis l'objet game !
 Utiliser : https://angular.io/api/common/SlicePipe
)
- Afficher les jeux relatifs au jeu en cours (=> son premier genre par exemple)
  (Il faut utiliser la route de l'api : /genre/{slug} => slug d'un genre)

### 2. Faire un component "publisher-show"

- Route de nom "publisher/:slug"
- On affiche toutes les infos de celui-ci
- On affiche la liste des jeux qu'il a produit

### 3. Pour tester une autre API...

https://pokeapi.co/api/v2/pokemon?offset=0&limit=20

Déjà, simplement afficher le nom du pokémon et son image (PS : faut aller voir dans l'URL à l'intérieur du result...)



Au cas où, mon mail pour me contacter dans la semaine pour ceux qui sont bloqués ou qui ont des questions : **tourret.kevin@gmail.com**




