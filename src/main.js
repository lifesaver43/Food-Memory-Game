document.addEventListener("DOMContentLoaded", () => {
      //card options
      const cardArray = [
            {
              name: "fries",
              img: "/images/fries.png"
            },
            {
              name: 'cheeseburger',
              img: '/images/cheeseburger.png'
            },
            {
              name: 'ice-cream',
              img: '/images/ice-cream.png'
            },
            {
              name: 'pizza',
              img: '/images/pizza.png'
            },
            {
              name: 'milkshake',
              img: '/images/milkshake.png'
            },
            {
              name: 'hotdog',
              img: '/images/hotdog.png'
            },
            {
              name: 'fries',
              img: '/images/fries.png'
            },
            {
              name: 'cheeseburger',
              img: '/images/cheeseburger.png'
            },
            {
              name: 'ice-cream',
              img: '/images/ice-cream.png'
            },
            {
              name: 'pizza',
              img: '/images/pizza.png'
            },
            {
              name: 'milkshake',
              img: '/images/milkshake.png'
            },
            {
              name: 'hotdog',
              img: '/images/hotdog.png'
            }
      ]

      cardArray.sort(() => 0.5 - Math.random())
      console.log(cardArray)

      const grid = document.querySelector(".grid");
      const resultDisplay = document.querySelector("#result");

      let cardsChosen = []
      let cardsChosenIds = []
      let cardsWon = []

      function createBoard() {
        for(i = 0; i < cardArray.length; i++) {
          const card = document.createElement("img")
          card.setAttribute("src", "/images/blank.png")
          card.setAttribute("data-id", i)
          card.addEventListener("click", flipCard)
          grid.appendChild(card)
        }
      }


      function flipCard() {
        let cardId = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if(cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500)
        }
        console.log(cardsChosenIds)
      }

      function checkForMatch() {
        const cards = document.querySelectorAll("img")
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];
        let lastTxt = document.querySelector("h2")

        if(optionOneId == optionTwoId) {
          // alert("You have clicked the same image!")
          lastTxt.style.color = "red"
          lastTxt.innerHTML = "You have clicked the same image!!"
          cards[optionOneId].setAttribute("src", "/images/blank.png")
          cards[optionTwoId].setAttribute("src", "/images/blank.png")
        } else if (cardsChosen[0] === cardsChosen[1]) {
          // alert("You have found a match!")
          lastTxt.style.color = "blue"
          lastTxt.innerHTML = "You have found a match!"
          cards[optionOneId].setAttribute("src", "/images/white.png")
          cards[optionTwoId].setAttribute("src", "/images/white.png")
          cards[optionOneId].removeEventListener("click", flipCard)
          cards[optionTwoId].removeEventListener("click", flipCard)
          cardsWon.push(cardsChosen)
        } else if(cardsChosen[0] != cardsChosen[1]) {
          cards[optionOneId].setAttribute("src", "/images/blank.png")
          cards[optionTwoId].setAttribute("src", "/images/blank.png")
          // alert("Sorry, try again")
          lastTxt.style.color = "red"
          lastTxt.innerHTML = "Sorry, try again"
        }

        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.innerHTML = cardsWon.length
        if (cardsWon.length === 6) {
          resultDisplay.innerHTML = "Congratulations, You won!"
        }

        console.log(cardsChosen)
        console.log(cardsWon)
      }

      createBoard()








// stopped at 10:26
      // let cardsPot = Math.random() * cards.length
      // let cardShop = Math.floor(cardsPot)
      // const cardsNum = cards[cardShop]

});