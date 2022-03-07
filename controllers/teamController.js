let teamsDataBase = {
    '01': [{name:'ditto'}]
            
};
const bootstrapTeam=(userId)=>{
    teamsDataBase[userId] =[{name: 'pikachu'}]; 
}
const getTeamsOfUser=(userId)=>{
    return teamsDataBase[userId];
}

const addPokemon = (userId, pokemon)=>{
    teamsDataBase[userId].push({name: pokemon});
}
const setTeam = (userId,team)=>{
    teamsDataBase[userId]= team;
}

exports.bootstrapTeam = bootstrapTeam;
exports.getTeamsOfUser = getTeamsOfUser;
exports.addPokemon = addPokemon;
exports.setTeam = setTeam;