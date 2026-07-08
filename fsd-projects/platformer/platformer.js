$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 650, 200, 20, "red");
    createPlatform(550, 600, 200, 20, "blue");
    createPlatform(950, 550, 200, 20, "green");
    createPlatform(1200, 450, 200, 20, "pink");
    createPlatform(100, 350, 1000, 20, "black");
    createPlatform(150, 250, 50, 100, "red");
    createPlatform(475, 250, 50, 100, "red");
    createPlatform(850, 250, 50, 100, "red");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 150, 200);
    createCollectable("steve", 475, 200);
    createCollectable("max", 850, 200);

    // TODO 4 - Create Cannons
    createCannon("top", 235, 2000);
    createCannon("top", 560, 2000);
    createCannon("top", 935, 2000);
    createCannon("top", 1250, 2000);
    createCannon("right", 275, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
