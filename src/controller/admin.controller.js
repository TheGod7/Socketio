import NewsSchema from "./../models/News.js";
// import WorksSchema from "./../models/Works.js";

export const controller = (req, res) => {
  res.render("pages/admin/controller", {
    layout: "./layouts/admin",
    title: "Controller Panel",
  });
};

export const NewsControl = async (req, res) => {
  const news = await NewsSchema.find().sort({ date: "desc" }).lean();

  res.render("pages/Admin/news", {
    layout: "./layouts/admin",
    title: "News Control",
    News: news,
  });
};

export const DeleteNewsControl = async (req, res) => {
  const id = req.params.id; // the id of the news
  await NewsSchema.findByIdAndDelete(id);
  req.flash("done", "Delete correctly");

  res.redirect("/controller/news");
};

export const AddNewsControl = async (req, res) => {
  const { title, content } = req.body;
  console.log(content);

  try {
    const News = new NewsSchema({ title, content });

    await News.save();

    req.flash("done", "added the new correctly");
    res.redirect("/controller/news");
  } catch (err) {
    req.flash("error", err);
    console.log(err);
    res.redirect("/controller/news");
  }
};

export const WorksControl = (req, res) => {
  res.render("pages/News/works", {
    layout: "./layouts/admin",
    title: "Works Control",
  });
};
