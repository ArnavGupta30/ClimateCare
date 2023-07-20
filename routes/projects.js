var game = require("../game.js");

module.exports = (app, db) => {
  app.get("/project/video", (req, res) => {
    res.render("projects/video");
  });

  app.get("/project/blog", (req, res) => {
    res.render("projects/blog");
  });

  app.get("/project/carbon", (req, res) => {
    res.render("projects/carbon");
  });

  app.get("/project/solar", (req, res) => {
    res.render("projects/solar");
  });

  app.get("/project/game", (req, res) => {
    var pollution = req.cookies.pollution;
    var scenario = req.cookies.scenario;
    var description = req.cookies.description;
    var hs = req.cookies.highscore;

    if (pollution == undefined) {
      pollution = game.pollution_level
    }

    if (description == undefined) {
      description = game.description
    }

    if (hs == undefined) {
      hs = 0;
    }

    res.render("projects/game", {
      level: pollution,
      finish: req.cookies.finish,
      highScore: hs,
      scenario: scenario,
      description: description
    });
  });

  app.get("/project/game/start", (req, res) => {
    res.cookie("pollution", game.pollution_level);
    res.cookie("scenario", game.scenarios[0]);
    res.cookie("description", game.scenarios[0].description);
    res.redirect("/project/game");
  })

  app.get("/project/game/option-:option", (req, res) => {
    var option = req.params.option;
    var pollution = req.cookies.pollution;
    var scenario = req.cookies.scenario;

    if (!game.scenarios[scenario.id]){
      res.cookie("finish", true);
      res.redirect("/project/game");
    }

    res.cookie("pollution", parseInt(pollution) + scenario.options[parseInt(option)].pollution_change);
    res.cookie("scenario", game.scenarios[scenario.id]);
    res.cookie("description", game.scenarios[scenario.id].description);

    res.redirect("/project/game");
  })

  app.get("/project/game/reset", (req, res) => {
    var hs = req.cookies.highscore > req.cookies.pollution ? req.cookies.highscore : req.cookies.pollution;
    res.clearCookie("pollution");
    res.clearCookie("scenario");
    res.clearCookie("description");
    res.clearCookie("finish");
    res.cookie("highscore", hs);
    res.redirect("/project/game");
  })
}