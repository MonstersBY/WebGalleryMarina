const data = [
    {
        name: `"Autumn with dark clouds"`,
        info: "40*30 cm. 2022",
        status: "all"
    },
    {
        name: `"Autumn with beauty clouds"`,
        info: "40*30 cm. 2022",
        status: "all"
    },
    {
        name: `"Summer morning"`,
        info: "30*40 cm. 2022",
        status: "all"
    },
    {
        name: `"Flowers"`,
        info: "25*20 cm. 2022",
        status: "all"
    },
    {
        name: `"Pansies"`,
        info: "25*20 cm. 2022",
        status: "all"
    },
    {
        name: `"Roses"`,
        info: "25*20 cm. 2022",
        status: "all"
    },
    {
        name: `"Summer oaks"`,
        info: "25*20 cm. 2022",
        status: "all"
    },
    {
        name: `"Pelargonium"`,
        info: "25*20 cm. 2022",
        status: "all"
    },
    {
        name: `"Primula"`,
        info: "25*20 cm. 2022",
        status: "all"
    },
    {
        name: `"Forget-me-not"`,
        info: "25*20cm. 2022",
        status: "all"
    },
    {
        name: `"Autumn evening"`,
        info: "30*20 cm. 2021",
        status: "all"
    },
    {
        name: `"Oak"`,
        info: "50*60 cm. 2021",
        status: "all"
    },
    {
        name: `"Early evening"`,
        info: "30*20 cm. 2021",
        status: "all"
    },
    {
        name: `"November"`,
        info: "25*20cm. 2022",
        status: "all"
    },
    {
        name: `"Lonely house"`,
        info: "30*20cm. 2021",
        status: "all"
    },
    {
        name: `"Sandy river bank"`,
        info: "60*40 cm. 2021",
        status: "all"
    },
    {
        name: `"River Neman"`,
        info: "30*20cm. 2021",
        status: "all"
    },
    {
        name: `"Pond at sunset"`,
        info: "30*20cm. 2021",
        status: "all"
    },
    {
        name: `"Summer evening"`,
        info: "30*40 cm. 2021",
        status: "all"
    },
    {
        name: `"Field and blooming_meadow"`,
        info: "50*40 cm. 2021",
        status: "all"
    },
    {
        name: `"Forest river"`,
        info: "50*40 cm. 2021",
        status: "all"
    },
    {
        name: `"Hot afternoon"`,
        info: "40*30 cm. 2021",
        status: "all"
    }
]
const list = document.querySelector(".cards")
for (let i = 0; i < data.length; i++) {
    if (data[i].status == "all") {
        let card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <div class="card-img"><img src="../assets/img/img${i+1}.jpg" alt="art"></div>
            <div class="card-info">
                ${data[i].name} <br> ${data[i].info}
            </div>
        `
        list.append(card);
    }
}