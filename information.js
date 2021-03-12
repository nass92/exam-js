/* j'ai voulu au départ utliser RETURN.
Mais le rendu n'était pas bon j'ai, donc, décidé
(par manque de temps) de basculer sur cette solution.*/

const information = (prénom, nom, age) => {
  console.log(`prénom: ${prénom}`)
  console.log(`nom: ${nom}`)
  console.log(`age: ${age}`)

  if (age < 18) {
    age -= 18
    console.log(`vous serez majeur dans ${age} ans `)
  } else if (age > 18) {
    age = age - 18
    console.log(`vous etes majeur depuis ${age} ans `)
  } else {
    console.log(`vous etes majeur depuis cette année `)
  }
}

information('nassim', 'gouja', 23)

