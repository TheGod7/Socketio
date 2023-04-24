import algolia from "algoliasearch";
import {
  ALGOLIA_ADMIN_KEY,
  ALGOLIA_APPLICATION,
  ALGOLIA_INDEX,
} from "../configs/env.js";

// Databases
import NewsSchema from "./../models/News.js";

// const client = algolia(ALGOLIA_APPLICATION, ALGOLIA_ADMIN_KEY);
// const index = client.initIndex(ALGOLIA_INDEX);

// index
//   .saveObject(NewsMap)
//   .then((ids) => console.log({ ids }))
//   .catch((err) => console.error({ err }));
