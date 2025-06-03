// 
// Array que contém os emojis a serem utilizados no jogo.
// Cada emoji é repetido duas vezes para formar pares.
//
const emojis = [
    "🤓",
    "🤓",
    "💀",
    "💀",
    "☝",
    "☝",
    "🤡",
    "🤡",
    "🤥",
    "🤥",
    "😎",
    "😎",
    "🤨",
    "🤨",
    "🥵",
    "🥵"
  ];
  
  // 
  // Array que armazena as cartas abertas pelo jogador.
  //
  let openCards = [];
  
  // 
  // Embaralha os emojis utilizando o método sort() e uma função de comparação aleatória.
  //
  let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
  
  // 
  // Cria os elementos HTML para representar as cartas do jogo.
  //
  for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
  }
  
  // 
  // Função que é chamada quando uma carta é clicada.
  // Adiciona a classe "boxOpen" à carta e a adiciona ao array openCards.
  // Se dois cartas forem abertas, chama a função checkMatch após 500ms.
  //
  function handleClick() {
    if (openCards.length < 2) {
      this.classList.add("boxOpen");
      openCards.push(this);
    }
  
    if (openCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
  
    console.log(openCards);
  }
  
  // 
  // Função que verifica se as duas cartas abertas formam um par.
  // Se forem um par, adiciona a classe "boxMatch" às cartas.
  // Se não forem um par, remove a classe "boxOpen" das cartas.
  // Verifica se todas as cartas foram encontradas e exibe uma mensagem de vitória.
  //
  function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
    } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }
  
    openCards = [];
  
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
      alert("Você venceu !");
    }
  }