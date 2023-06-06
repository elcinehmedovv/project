let loadMoreBtn = document.querySelector("#albums .load-more");
let row = document.querySelector("#albums .row");
loadMoreBtn.onclick = ()=>{
 for (let i = 0; i < albums.length; i++) {
    let column= document.createElement("div");
    column.classList.add("col-md-6", "col-lg-4")

    let wrapper = document.createElement("div");
    wrapper.classList.add("album-item");

    let img = document.createElement("img");
    img.setAttribute("src","images/" + albums[i].img)
    
    let p= document.createElement("p");
    p.classList.add("title");
    p.innerText=albums[i].title;

    let pprice= document.createElement("p");
    pprice.classList.add("price");
    pprice.innerText=albums[i].price;

    wrapper.append(img,p,pprice)
    column.append(wrapper);
    row.append(column);
    
    
 }
 loadMoreBtn.classList.add("d-none")
}