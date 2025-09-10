const cardContainer = document.querySelector(".container");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let cards="";
for (let i=0; i<teamMembers.length; i++){
    const teamMember = teamMembers[i];
    createNewCard(teamMember)
}

cardContainer.innerHTML = cards;

function createNewCard(member){
    const {name, role, email, img} = member;
    cards+=`
    <div class="card">
        <div class="card-img">
            <img src=${img} alt=${name}>
        </div>
        <div class="card-content">
            <h3>${name}</h3>
            ${role} <br>
            <a href=${email}>
                ${email}
            </a>
        </div>

    </div>
    `;
}