const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
    const title = category.querySelector('h2').textContent;
    const amount = category.querySelectorAll('ul li');

    console.log(`Category: ${title}`);
    console.log(`Elements: ${amount.length}`);
}

const headings = document.querySelectorAll('h2');
headings.forEach(h2 => {
    h2.classList.add('categories-title');
});

const subLists = document.querySelectorAll('#categories .item > ul');
subLists.forEach(ul => {
    ul.classList.add('sublist');

    ul.querySelectorAll('li').forEach(li => {
        li.classList.add('subitem');
    });
});