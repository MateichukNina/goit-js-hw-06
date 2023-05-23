const allCategories = document.querySelectorAll("ul#categories li.item");
console.log("Categories:", allCategories.length);

allCategories.forEach((category) => {

    const categoryTitle = category.querySelector("h2").textContent;
    console.log("Category:", categoryTitle);

    const categoryCount = category.querySelectorAll("li").length;
    console.log("Element:", categoryCount);
});