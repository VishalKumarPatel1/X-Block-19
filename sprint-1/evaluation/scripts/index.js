//store the products array in localstorage as "data"
function productobj(b,n,p,i){
    this.brand=b
    this.name=n
    this.price=p
    this.image=i


}

function submitData(){
    event.preventDefault()
    let form=document.querySelector('form')
    let brand=form.product_brand.value
    let name=form.product_name.value
    let price=form.product_price.value
    let image=form.product_image.value

    let products= new productobj(brand,name, price,image)
    console.log(products)
    let productArray=JSON.parse(localStorage.getItem('data'))||[]
    productArray.push(products)
    localStorage.setItem('data',JSON.stringify(productArray))
    window.location.reload()

}
