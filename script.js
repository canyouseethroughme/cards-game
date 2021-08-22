document.addEventListener(
  "DOMContentLoaded",
  () => {
    const cardsArr = [
      { no: 1, color: "#6F98A8" },
      { no: 2, color: "#2B8EAD" },
      { no: 3, color: "#2F454E" },
      { no: 4, color: "#2B8EAD" },
      { no: 5, color: "#2F454E" },
      { no: 6, color: "#BFBFBF" },
      { no: 7, color: "#BFBFBF" },
      { no: 8, color: "#6F98A8" },
      { no: 9, color: "#2F454E" },
    ];

    const updateView = (cardsArr) => {
      return cardsArr.map((card, index) => {
        const div = document.getElementById(`card-${index}`);
        const mobileDiv = document.getElementById(`mobile-${index}`);
        const p = document.getElementById(`p-${index}`);
        div.style.backgroundColor = card.color;
        p.innerHTML = card.no;
        mobileDiv.style.backgroundColor = card.color;
      });
    };

    const shuffleArr = () => {
      const newArray = cardsArr.sort(() => {
        return 0.5 - Math.random();
      });
      return updateView(newArray);
    };

    const sortArr = () => {
      const newArray = cardsArr.sort((a, b) => a.no - b.no);
      return updateView(newArray);
    };

    const title = document.createElement("h3");
    title.id = "title";
    title.innerHTML = "Shuffle and Sort";
    document.body.appendChild(title);

    const container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);

    const cardsWrapper = document.createElement("div");
    cardsWrapper.id = "cards-wrapper";
    container.appendChild(cardsWrapper);

    cardsArr.map((card, index) => {
      const div = document.createElement("div");
      const mobileDiv = document.createElement("div");
      const p = document.createElement("p");
      div.id = `card-${index}`;
      div.className = "card";
      mobileDiv.id = `mobile-${index}`;
      mobileDiv.className = "mobile";
      p.id = `p-${index}`;

      p.innerHTML = card.no;
      div.style.backgroundColor = card.color;
      mobileDiv.style.backgroundColor = card.color;

      div.appendChild(p);
      div.appendChild(mobileDiv);
      cardsWrapper.appendChild(div);
    });

    const buttonsWrapper = document.createElement("div");
    buttonsWrapper.id = "buttons-wrapper";
    container.appendChild(buttonsWrapper);

    const shuffleButton = document.createElement("button");
    shuffleButton.id = "shuffle-button";
    shuffleButton.innerHTML = "SHUFFLE";
    shuffleButton.onclick = shuffleArr;
    buttonsWrapper.appendChild(shuffleButton);

    const sortButton = document.createElement("button");
    sortButton.id = "sort-button";
    sortButton.onclick = sortArr;
    sortButton.innerHTML = "SORT";
    buttonsWrapper.appendChild(sortButton);

    const footer = document.createElement("h5");
    footer.id = "footer";
    footer.innerHTML = "Shuffle and Sort by Andrei Stefan Atudorei";
    container.appendChild(footer);
  },
  false
);
