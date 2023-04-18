import NewsSchema from "./../models/News.js";
// import WorksSchema from "./../models/Works.js";

export const controller = (req, res) => {
  res.render("pages/admin/controller", {
    layout: "./layouts/admin",
    title: "Controller Panel",
  });
};

export const NewsControl = async (req, res) => {
  const news = await NewsSchema.find().sort("desc").lean();

  res.render("pages/News/news", {
    layout: "./layouts/admin",
    title: "News Control",
    News: news,
  });
};

export const DeleteNewsControl = async (req, res) => {
  console.log(req.params);
  // const news = await NewsSchema.find();

  // res.render("pages/News/news", {
  //   layout: "./layouts/admin",
  //   title: "News Control",
  //   News: news,
  // });
};

export const WorksControl = (req, res) => {
  res.render("pages/News/works", {
    layout: "./layouts/admin",
    title: "Works Control",
  });
};
