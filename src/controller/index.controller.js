import NewsSchema from "./../models/News.js";
// import WorksSchema from "./../models/Works.js";

export const renderIndex = (req, res) => {
  res.render("pages/index/index", { title: "Home" });
};

export const renderNews = async (req, res) => {
  const news = await NewsSchema.find().sort({ date: "desc" }).lean();

  res.render("pages/news/news", { title: "News", news });
};

export const renderNewsId = async (req, res) => {
  const { id } = req.params;
  const news = await NewsSchema.findById(id).lean();

  res.render("pages/news/newsOne", { title: "News", news });
};
