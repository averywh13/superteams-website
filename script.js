// create a team of types of ricks

const teamMembers = [
  {
    name: 'Rick',
    age: 70,
    species: 'Human',
    occupation: 'Scientist',
    type: "Rick",
    status: 'Alive',
    origin: 'Earth (Dimension: C-137)',
    strengths: 'blah blah blah',
    weaknesses: 'blah blah blah',
    skills: ['blah', 'blah', 'blah'],
    biography:
      'blah blah blah blah'
    
  },
  {
    name: 'Black Magic Rick',
    age: 70,
    species: 'Human',
    occupation: 'Magician',
    type: "Rick",
    status: 'Deceased',
    origin: 'Earth (Dimension: Unknown)',
    strengths: 'blah blah blah',
    weaknesses: 'blah blah blah',
    skills: ['blah', 'blah', 'blah'],
    biography:
      'blah blah blah blah'
  },
  {
    name: 'Wasp Rick',
    age: 70,
    species: 'Wasp',
    occupation: 'Scientist',
    type: "Rick",
    status: 'Alive',
    origin: 'Earth (Wasp Universe)',
    strengths: 'blah blah blah',
    weaknesses: 'blah blah blah',
    skills: ['blah', 'blah', 'blah'],
    biography:
      'blah blah blah blah'
  }
]

function generateTeamCards () {
  const teamCardsContainer = document.getElementById('teamCards')

  teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-4')

    //style the BGColor of my card based on pos
    let backgroundColor

    switch (member.type.toLowerCase()) {
      case 'rick':
        backgroundColor = 'red'
        break
      case 'morty':
        backgroundColor = 'green'
        break
      case 'summer':
        backgroundColor = 'blue'
        break
      default:
        backgroundColor = 'gray'
    }
    

    card.innerHTML = `
            <div class="card">
                <div class = "card-header">
                    ${member.name}
                </div>
                <div id="cardBody" class="card-body" style="background-color:${backgroundColor};">
                    <p><strong>Age:</strong> ${member.age}</p>
                    <p><strong>Species:</strong> ${member.species}</p>
                    <p><strong>Occupation:</strong> ${member.occupation}</p>
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

