const guess = (userGuess, secret) => {
  if (userGuess < secret) {
    console.log('Too Small!')
  } else if (userGuess > secret) {
    console.log('Too Big!')
  } else {
    console.log('You Win!')
  }
}

guess(10, 10)