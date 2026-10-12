function saluer(nom) {
  return "Bonjour " + nom + " !";
}

function login(utilisateur, motDePasse) {
  return utilisateur === "admin" && motDePasse === "1234";
}

console.log(saluer("DevOps"));
