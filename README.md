# p5js-DotBall
p5js => Rotative DotBall...of Freedom !

+ Dealing with a Dotted Ukrainian 'DotBall' of Freedom.
+ 720 Dots, 30fps.
+ Resize & Fit on 4/3 to optimize available space + responsive
+ [.oO° Online Demo °Oo.](https://captainfurax.github.io/p5js-DotBall/)

![DotBall](https://github.com/CaptainFurax/p5js-DotBall/blob/main/UkrainianDotBall-1.jpg)

Specs : 
+ Rendu 3D/Canvas WebGL[ p5xjs ] - Une simple sphere composée d'anneaux.
+ Un anneau est un tableau de points[ vecteurs ] dessinant un cercle.
+ Décaler ces anneaux/cercles sur l'axe Y via un offset permet de 'modeliser' une Sphere.

Cheat & Tricks :
+ Les points sont des 'Circle()' vidés [ diametre de 1px ] - On affiche que leurs contours[ 'StrokeWeight 2px' ] pour simuler un 'pseudo-point'.
+ Avantage : <br/>Avec une shape 'primitive' comme Circle() pour faire des pseudo-points dans un Sketch WebGL, l'effet de profondeur est automatique[ taille des 'pseudo-points' et couleurs estompées ] en arrière-plan.
+ A la modélisation, les anneaux sont tous sur le meme plan 'z'. Une rotation/un offest de 9° sur l'axe Y est faite sur chaque anneau dans la fonction 'Draw()' pour dessiner une sphere...avec des anneaux !
