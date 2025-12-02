(() => {
  //variables
  const hotspots = document.querySelectorAll(".Hotspot");
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");
  const loader = document.querySelector("#loading-spinner");

  //functions
  function loadInfoBoxes() {
    loader.classList.toggle("hidden");

    fetch("https://swiftpixel.com/earbud/api/infoboxes")
      .then(response => response.json())
      .then(infoBoxes => {
        console.log(infoBoxes);

        infoBoxes.forEach((infoBox, index) => {
          let selected = document.querySelector(`#hotspot-${index + 1}`);

          const titleElement = document.createElement('h2');
          titleElement.textContent = infoBox.heading;

          const textElement = document.createElement('p');
          textElement.textContent = infoBox.description;

          selected.appendChild(titleElement);
          selected.appendChild(textElement);
        });

        loader.classList.toggle("hidden");
      })
      .catch(error => {
        console.log(error);
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Welp, something has definitely gone down. You can try again later while we try to see what the problem is. Thank you for your patience!";
        document.querySelector("#error-message").appendChild(errorMessage);
      });
      loader.classList.toggle("hidden");
  }

  loadInfoBoxes();

  function loadMaterialInfo() {
    loader.classList.toggle("hidden");

    fetch("https://swiftpixel.com/earbud/api/materials")
      .then(response => response.json())
      .then(materialListData => {
        console.log(materialListData);

        materialListData.forEach(material => {
          //clone the template li with h3 and p inside
          const clone = materialTemplate.content.cloneNode(true);

          //populate the cloned template
          const materialHeading = clone.querySelector(".material-heading");
          materialHeading.textContent = material.heading;

          const materialDescription = clone.querySelector(".material-description");
          materialDescription.textContent = material.description;

          //Append the populated template to the list
          materialList.appendChild(clone);
        });
        loader.classList.toggle("hidden");
      })
      .catch(error => {
        console.log(error);
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Welp, something has definitely gone down. You can try again later while we try to see what the problem is. Thank you for your patience!";
        materialList.appendChild(errorMessage);
        loader.classList.toggle("hidden");
      });
  }

  loadMaterialInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();