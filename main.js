function createGame(player1, placar1, hours, placar2, player2) {
  return `
    <li>
      <img
        src="assets/images/icon-${player1}.svg"
        alt="Bandeira do ${player1}"
      />
      <h3>${placar1}</h3>
      <strong>x</strong>
      <h3>${placar2}</h3>
      <img
        src="assets/images/icon-${player2}.svg"
        alt="Bandeira da ${player2}"
      />
    </li>
  `
}

let delay = -0.4
function createCard(date, hour, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <div class="wrapper">
        <h2>${date} <span>${day}</span></h2>
        <h3><span>${hour}</span></h3>
      </div> 
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard('24/11', '16:00', 'quinta', createGame('brazil', '2', '16:00', '0', 'serbia')) +
  createCard('28/11', '13:00', 'segunda', createGame('switzerland', '0', '13:00', '0', 'brazil')) +
  createCard('02/12', '16:00', 'sexta', createGame('brazil', '0', '16:00','0', 'cameroon'))
