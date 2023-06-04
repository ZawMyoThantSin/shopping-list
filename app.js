const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];

let productId =1;

const handleChange = (e)=>{
  const inputValue = e.target.value;
  const productContainer = document.createElement("div");
  productContainer.classList.add("productContainer");
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("productName");
  parentDiv.addEventListener("click", () => {
    const classExit = parentDiv.classList.contains("purchased");
    if(classExit){
      parentDiv.classList.remove("purchased");
     
    }else{
      parentDiv.classList.add("purchased");
    }
   
  });
  const spanTag = document.createElement("span");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("far","fa-trash-alt");
  trashIcon.addEventListener('click',(event) => {
    productContainer.remove(); 
  })

  spanTag.id = productId;
  const product = productId.toString() + ". "+inputValue;
  spanTag.append(product);
  parentDiv.append(spanTag);  
  productContainer.append(parentDiv,trashIcon);
  shoppingListTag.append(productContainer);
  inputTag.value = "";
  productId+=1; 
}

inputTag.addEventListener('change',handleChange );