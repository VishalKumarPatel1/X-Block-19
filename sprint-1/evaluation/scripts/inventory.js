function showproducts() {
    let productArray=JSON.parse(localStorage.getItem('data'))||[]
    let productContainer=document.querySelector('products_data')
    productContainer.innerHTML = null

     productArray.forEach(function(el,index){
        let div=document.createElement('div')
        let barnds=document.createElement('p')
        barnds.innerText=el.brand
        let names=document.createElement('p')
        names.innerText=el.name
        let prices=document.createElement('p')
        prices.innerText=el.price
        let images=document.createElement('img')
        images.src=el.image

        let btn=document.createElement('button')
        btn.innerText='Remove'
        btn.addEventListener('click', function(){
            removeProduct(index)
        })
        div.append(brands,names,prices,images,btn)
        productContainer.append(div)

     })


}
showproducts()
function removeProduct(index){
   let productArray=JSON.parse(localStorage.getItem('data'))||[]
   console.log(index)
   let newdata=productArray.filter(function(el,ind){
       return ind !==index
   })
   localStorage.setItem('data',JSON.stringify(newdata))
   showproducts()
}
