async function fetchData() {
    let response = await fetch('data.json');
    let json = await response.json();

    let AllData = json.AllData;
    
    renderhome(AllData.home);
    renderData(AllData.data);
    renderabout(AllData.about);
    
}
function renderhome(home) {
    let homeContainer = document.getElementById('home');
    homeContainer.innerHTML = `
        <h2>${home.title}</h2>
        <p>${home.content}</p>
        <a href="#" class="btn">Learn More</a>
    `;
}
function renderData(cardsData) {
    let dataSection = document.getElementById('data');
    dataSection.innerHTML = ''; // Clear existing content

    cardsData.forEach(item => {
        const container = document.createElement('div');
        container.classList.add('container');
        container.innerHTML = `
            <div class="card-inner">
                <div class="front" style="background-image: url('${item.image}')"></div>
                <div class="back">
                    <h1>${item.title}</h1>
                    <p>${item.content}</p>
                    <button>Learn More</button>
                </div>
            </div>
        `;
        dataSection.appendChild(container);
    });
}

function renderabout(about) {
    let aboutContainer = document.getElementById('about');
    aboutContainer.innerHTML = `
        <h2>${about.title}</h2>
        <p>${about.content}</p>
        <a href="#">Learn More</a>
    `;
}
fetchData();