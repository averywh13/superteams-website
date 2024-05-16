// create a team of types of ricks

const teamMembers = [
  {
    name: 'Queen Grimhilde',
    age: 50,
    species: 'Human',
    type: "Queen",
    status: 'Dead',
    origin: 'Germany',
    strengths: ['Magic Spell-casting', 'Manipulation'],
    weaknesses: ['Her reflection', 'Love'],
    skills: ['Looking into her mirror', 'Being the fairest in the land', 'Seeing the misery of Snow White'],
    biography:
      'blah blah blah blah',
    img: "imgs/evilqueen.png"
    
  },
  {
    name: 'Queen of Hearts',
    age: 'N/A',
    species: 'Human',
    type: "Queen",
    status: 'Alive',
    origin: 'Wonderland',
    strengths: ['Manipulation', 'Scheming', 'Cunning'],
    weaknesses: ['Abuse of power', 'Cruel to animals', 'Loses temper easily'],
    skills: ['Playing croquet', 'Getting her way', 'Physical strength'],
    biography:
      'blah blah blah blah',
    img: "imgs/queenofhearts.webp"
  },
  {
    name: 'Cruella De Vil',
    age: '76',
    species: 'Human',
    type: "Heiress",
    status: 'Alive',
    origin: 'France',
    //change weakness, strengths, and skills for cruella
    strengths: ['Her necklace', 'Magic potions','Transfiguration'],
    weaknesses: ['Posion', 'Fire'],
    skills: ['Practices witchcraft', 'Making contract deals'],
    biography:
      'blah blah blah blah',
      img: "imgs/cruelladevil.png"
  }
]

function generateTeamCards () {
  const teamCardsContainer = document.getElementById('teamCards')

  teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-4')

    //style the BGColor of my card based on type
    let backgroundColor

    switch (member.type.toLowerCase()) {
      case 'queen':
        backgroundColor = 'maroon'
        break
      case 'animal':
        backgroundColor = 'green'
        break
      case 'summer':
        backgroundColor = 'blue'
        break
      default:
        backgroundColor = 'gray'
    }
    

    card.innerHTML = `
            <div class="card divcardborders p-3">
            <img src="${member.img}" class="card-img-top imgsizing1">
                <div class = "card-header">
                    ${member.name}
                </div>
                <div id="cardBody" class="card-body" style="background-color:${backgroundColor};">

                    <p><strong>Age:</strong> ${member.age}</p>
                    <p><strong>Species:</strong> ${member.species}</p>
                    <p><strong>Type:</strong> ${member.type}</p>
                    <p><strong>Status:</strong> ${member.status}</p>
                    <p><strong>Origin:</strong> ${member.origin}</p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Skills:</strong> ${member.skills}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
        `
//will update the BG style on each child of the card
    for (let i = 0; i < card.children.length; i++) {
      card.children[i].style.backgroundColor = backgroundColor
    }

    teamCardsContainer.appendChild(card)
  })
}

window.onload = generateTeamCards()

