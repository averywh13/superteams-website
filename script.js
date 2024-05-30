// create a team of types of queens

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
      'Queen Grimhilde, more commonly known across popular media as simply The Evil Queen or just The Queen, is the main antagonist of the Disney full-length animated feature film Snow White and the Seven Dwarfs, which is based on the 1812 German fairytale Snow White by the Brothers Grimm.',
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
      'The Queen of Hearts is an obese woman with fair skin and black hair. She wears a gold crown and earrings, a red headband, and a black and red gown with black and yellow stripes at the bottom.',
    img: "imgs/queenofhearts.webp"
  },
  {
    name: 'Cruella De Vil',
    age: '45',
    species: 'Human',
    type: "Heiress",
    status: 'Alive',
    origin: 'France',
    strengths: ['Wealth', 'Driving','Intelligence'],
    weaknesses: ['Reckless driving', 'Unreasonable expectations'],
    skills: ['Collecting fur coats', 'Smoking', 'Getting her way'],
    biography:
      'Cruella De Vil is a fictional character from "The Hundred and One Dalmations". She is depicted as a wealthy, fashion-obsessed heiress with a penchant for fur, particularly Dalmation puppy fur. She is known for her distinctive black and white hair and her pursuit for the puppies.',
      img: "imgs/cruelladevil.png"
  },
  {
    name: 'Scar',
    age: '52',
    species: 'Animal',
    type: "Prince",
    status: 'Dead',
    origin: 'Africa',
    strengths: ['Psychological manipulation', 'Cunning','brute strength'],
    weaknesses: ['Mass murderer', 'Power abuser', 'Terrorism'],
    skills: ['Hunting', 'Being alone'],
    biography:
      'Askari, better known as Scar, is the main antagonist in the Disney film The Lion King and franchise. He is the younger and envious brother of Mufasa as well as his arch-rival, and the arch-nemesis of his nephew, Simba',
      img: "imgs/scarlion.png"
  },
  {
    name: 'Bellwhether',
    age: '34',
    species: 'Animal',
    type: "Assistant Mayor",
    status: 'Alive',
    origin: 'Zootopia',
    strengths: ['High intelligence', 'Manipulation','Politically powerful'],
    weaknesses: ['Abuses power', 'Terrorism','Incrimination'],
    skills: ['Brainwashing', 'Terrorizing Zootopia', 'Ruling with an iron fist'],
    biography:
      'Dawn Bellwether, formerly known as Assistant Mayor Bellwether and Mayor Bellwether, is the main antagonist in the Disney 55th full-length animated feature film Zootopia. She was the seemingly sweet and compassionate assistant mayor, eventually turned mayor until she was revealed to be a powerful and manipulative criminal mastermind who attempted to create a new order where prey animals dominate the predators.',
      img: "imgs/bellwhether.webp"
  },
  {
    name: 'Honest John',
    age: 'N/A',
    species: 'Animal',
    type: "Fox",
    status: 'Alive',
    origin: 'Italy',
    strengths: ['Cleverness', 'Deception','Trickery'],
    weaknesses: ['Stalker', 'Kidnapper', 'Robber'],
    skills: ['Smoking', 'Drinking', 'Con artist'],
    biography:
      'Honest John Worthington Foulfellow, also simply better known as Honest John, is one of the main antagonists in the Disney 2nd full-length animated feature film Pinocchio, which is based on the 1883 Italian novel The Adventures of Pinocchio.',
      img: "imgs/honestjohn.webp"
  }
]

function generateTeamCards () {
  const teamCardsContainer = document.getElementById('teamCards')

  teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-4')

    //style the BGColor of my card based on type
    let backgroundColor

    switch (member.species.toLowerCase()) {
      case 'human':
        backgroundColor = 'maroon'
        break
      case 'animal':
        backgroundColor = 'green'
        break
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

