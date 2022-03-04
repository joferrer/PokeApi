# PokeApi
# Objetivo:
Definir una API para gestionar nuestro equipo Pokemon

# Acciones
- Identificarnos
- Añadir pokemons a nuestro equipo
- Eliminar Pokémons a nuestro equipo
- Consultar información de nuestro equipo
- Intercambiar el orden de nuestro Pókemons

# REST Desing
- Añadir Pokémon: POST /team/pokemons
- Consultar equipo GET /team
- Eliminar Pokémon: DELETE /team/pokemons/:id
- Intercambiar el orden de nuestros pokemons: PUT /team
- Sistema de credenciales

# Testing
- I use Mocha and Chai to API' s testing 
Mocha: https://mochajs.org/
Chai: https://www.chaijs.com/

npm i -D mocha chai
npm i -D chai-http