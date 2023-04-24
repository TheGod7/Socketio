const io = io();

/**
 *
 * @param {Document} element
 * @returns
 */
const $ = (element) => document.querySelector(element);

const SearchI = $("#SearchInput"); // Search form
const SearchF = $("#SearchForm"); // search input
SearchF.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.value);
  console.log(e);
});
