import { data } from '../database/data.js'

const list = document.querySelector(".cards")
const portraitsList = document.querySelector(".portrait")
const landscapeList = document.querySelector(".land")
const otherList = document.querySelector(".other")
const flowerList = document.querySelector(".flower")
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
    if (data[i].status == "portrait") {
        let card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <div class="card-img"><img src="${data[i].img}" alt="portrait"></div>
            <div class="card-info">
                ${data[i].name} <br> ${data[i].info}
            </div>
        `
        portraitsList.append(card);
    }
    if (data[i].status == "land") {
        let card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <div class="card-img"><img src="${data[i].img}" alt="land"></div>
            <div class="card-info">
                ${data[i].name} <br> ${data[i].info}
            </div>
        `
        landscapeList.append(card);
    }
    if (data[i].status == "other") {
        let card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <div class="card-img"><img src="${data[i].img}" alt="other"></div>
            <div class="card-info">
                ${data[i].name} <br> ${data[i].info}
            </div>
        `
        otherList.append(card);
    }
    if (data[i].status == "flower") {
        let card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <div class="card-img"><img src="${data[i].img}" alt="flower"></div>
            <div class="card-info">
                ${data[i].name} <br> ${data[i].info}
            </div>
        `
        flowerList.append(card);
    }
}