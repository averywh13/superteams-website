// team member data
const teamMembers = [
  {
    name: "Morty",
    age: 14,
    species: "human",
    status: "alive",
    strengths: "Ball Control",
    weaknesses: "heading ability",
    skills: ["dribbling", "shooting", "passing"],
    biography: "blah blah blah blah", 
  },
  {
    name: "Rick",
    age: 36,
    activePlayer: true,
    position: "defender",
    strengths: "Ball Control",
    weaknesses: "heading ability",
    skills: ["dribbling", "shooting", "passing"],
    biography: "blah blah blah blah",
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

// style the BGColor of my card based on position
let backgroundColor
switch(member.position.toLowerCase()){
    case 'forward':
        backgroundColor = "red"
        break
    case 'mid':
        backgroundColor = "green"
        break
    case 'defender':
        backgroundColor = "blue"
        break
    default:
        backgroundColor: "grey"
}

card.style.backgroundColor = backgroundColor

    card.innerHTML = `
    <div class="card">
        <div class="card-header">
        ${member.name}
        </div>
        <div class="card-body" style="background-color: ${backgroundColor};">
        <p><strong>Position:</strong> ${member.position}</p>
        </div>
    </div>
    `;
    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();
