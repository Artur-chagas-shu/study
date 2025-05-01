function escalatePlayer() {

    const player = document.getElementById('player').value
    const position = document.getElementById('position').value
    const shirt = document.getElementById('shirt').value

    const playerList = document.getElementById('players-list')

    const li = document.createElement('ul')
    li.id = 'player-' + shirt
    li.innerText = player + ' - ' + position + '( '+ shirt + ' )'

    const confirmation = confirm('Deseja escalar o jogador:  - ' + player + ' - ' + position + ' ('+ shirt + ') '  ) 
    if (confirmation) {
        playerList.appendChild(li)
    }



    document.getElementById('player').value = ''
    document.getElementById('position').value = ''
    document.getElementById('shirt').value = ''



}


function removePlayer() {
    const shirt = document.getElementById('playerToRemove').value
    const playerToRemove = document.getElementById('player-' + shirt)   
    playerToRemove.remove()

    document.getElementById('playerToRemove').value = ''






}