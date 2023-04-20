import { data } from '../database/data.js'

const list = document.querySelector(".cards")

for (let i = 0; i < data.length; i++) {
    if (data[i].sale == true) {
        const number = data[i].img.split('/').at(-1).split('.')[0]
        let card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
        <div class="card-main">
            <div class="card-main__name">${data[i].name} <br> ${data[i].info}</div>
            <div class="card-main__picture"><img src="${data[i].img}" alt="${data[i].status}"></div>
        </div>
        `
        let imgs = document.createElement('div')
        imgs.className = 'card-more__pictures'
        for (let j = 0; j < 4; j++) {
            if (data[i].status != 'all') {
                $.ajax({
                    url: `../assets/img/${data[i].status}/sale-${number}/${j+1}.jpg`,
                    type: 'HEAD',
                    success: function () {
                        imgs.insertAdjacentHTML('beforeend', `<img src="../assets/img/${data[i].status}/sale-${number}/${j+1}.jpg" alt="${data[i].status}">`)
                    }
                })
            } else {
                $.ajax({
                    url: `../assets/img/sale-${number}/${j+1}.jpg`,
                    type: 'HEAD',
                    success: function () {
                        imgs.insertAdjacentHTML('beforeend', `<img src="../assets/img/sale-${number}/${j+1}.jpg" alt="${data[i].status}">`)
                    }
                })
                
            }
            
        }
        card.append(imgs)
        list.append(card);
    }
}