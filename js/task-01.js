const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
console.log('');

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('ul li');
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItems.length}`);
    console.log('');
});

