const showCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json()
    // console.log(data.data)
    const categoryContainer = document.getElementById('category-container')
    data.data.forEach(category => {
        //  console.log(category)
        const div = document.createElement('div');
        div.classList = `mx-5`
        div.innerHTML = `
        <button onclick="handleCategorys('${category.category_id}')" class="btn btn-sm">${category.category}</button>
        `;
        categoryContainer.appendChild(div)
    });
   
}

const handleCategorys = async (categoryId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
    console.log(data);
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = '';
    data.data.forEach(content =>{
         console.log(content)
        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = `

        <div class="card card-compact w-72 bg-base-100 shadow-xl">
                    <figure><img class="w-80 h-52" src="${content?.thumbnail}"
                            alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="flex">
                            <img class="w-10 h-10 rounded-full" src="${content?.authors[0].profile_picture}" alt="">
                            <h2 class="card-title ml-5">${content.title}</h2>
                        </div>
                        <div class="card-actions mx-auto">
                            <h3 class="mr-3 text-xl">${content.authors[0].profile_name}</h3>
                            <p>${content.authors[0].verified === true?"verified":""}</p>
                        </div>
                        <div class=" flex justify-center">
                            <h2 class="text-[#171717] text-xl">view: ${content.others.views}</h2>
                        </div>
                    </div>
                </div>
        
        `;
        cardContainer.appendChild(contentDiv);
    })
    // console.log(categoryId)

}

handleCategorys(1000)

showCategory();

