function loadGetReadyTemplate() {
	const gameBoard = document.querySelector("#gameboard");
	const template = `
    <div id="get-ready" class="get-ready">
      <h1 class="get-ready__title">Get ready...</h1>
    </div>
  `;

	gameBoard.innerHTML = template;
}
