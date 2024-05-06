// team member data
const teamMembers = [
    {
        name: 'Lionel Messi',
        age: 36,
        activePlayer: true,
        position: 'forward',
        strengths: 'Ball Control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'blah blah blah blah'
    }
]

function generateTeamCards(){
const teamCardsContainer = document.getElementById('teamCards')

teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-4')
    card.innerHTML = `
    <div class="card">
        <div class="card-header">
        ${member.name}
        </div>
    </div>
    `
teamCardsContainer.appendChild(card)

});



}

window.onload = generateTeamCards()