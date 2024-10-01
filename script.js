const next = document.getElementById('next');
const previous = document.getElementById('previous');


const selections = [
  { id: 'selection1', src: './images/image-product-1.jpg' },
  { id: 'selection2', src: './images/image-product-2.jpg' },
  { id: 'selection3', src: './images/image-product-3.jpg' },
  { id: 'selection4', src: './images/image-product-4.jpg' },
];

const preview = document.getElementById('preview');
const modal = document.getElementById('modal');

let currentIndex = 0;

selections.forEach((selection, index) => {
  const elem = document.getElementById(selection.id);
  elem.addEventListener('click', () => {
    // Remove active class from all selection elements
    selections.forEach((sel) => {
      document.getElementById(sel.id).classList.remove('active');
    });
    // Add active class to the currently selected element
    elem.classList.add('active');
    preview.src = selection.src;
    currentIndex = index;
  });
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % selections.length;
  const nextSelection = selections[currentIndex];
  preview.src = nextSelection.src;
  const nextElem = document.getElementById(nextSelection.id);
  nextElem.classList.add('active');
  selections.forEach((sel) => {
    if (sel.id !== nextSelection.id) {
      document.getElementById(sel.id).classList.remove('active');
    }
  });
});

previous.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + selections.length) % selections.length;
  const prevSelection = selections[currentIndex];
  preview.src = prevSelection.src;
  const prevElem = document.getElementById(prevSelection.id);
  prevElem.classList.add('active');
  selections.forEach((sel) => {
    if (sel.id !== prevSelection.id) {
      document.getElementById(sel.id).classList.remove('active');
    }
  });
});

preview.addEventListener('click', () => {
  modal.style.display = "flex";
  document.getElementById('close').addEventListener('click', ()=>{
    modal.style.display = "none";   
  })
});

const modalSelections = [
  { id: 'modalselection1', src: './images/image-product-1.jpg' },
  { id: 'modalselection2', src: './images/image-product-2.jpg' },
  { id: 'modalselection3', src: './images/image-product-3.jpg' },
  { id: 'modalselection4', src: './images/image-product-4.jpg' },
];

const modalPreview = document.getElementById('modalpreview');

let modalCurrentIndex = 0;

modalSelections.forEach((modalSelection, index) => {
  const elem = document.getElementById(modalSelection.id);
  elem.addEventListener('click', () => {
    // Remove active class from all modal selection elements
    modalSelections.forEach((sel) => {
      document.getElementById(sel.id).classList.remove('active');
    });
    // Add active class to the currently selected modal element
    elem.classList.add('active');
    modalPreview.src = modalSelection.src;
    modalCurrentIndex = index;
  });
});

// Add event listeners to next and previous buttons in modal
document.getElementById('next').addEventListener('click', () => {
  modalCurrentIndex = (modalCurrentIndex + 1) % modalSelections.length;
  const nextModalSelection = modalSelections[modalCurrentIndex];
  modalPreview.src = nextModalSelection.src;
  const nextModalElem = document.getElementById(nextModalSelection.id);
  nextModalElem.classList.add('active');
  modalSelections.forEach((sel) => {
    if (sel.id !== nextModalSelection.id) {
      document.getElementById(sel.id).classList.remove('active');
    }
  });
});

document.getElementById('previous').addEventListener('click', () => {
  modalCurrentIndex = (modalCurrentIndex - 1 + modalSelections.length) % modalSelections.length;
  const prevModalSelection = modalSelections[modalCurrentIndex];
  modalPreview.src = prevModalSelection.src;
  const prevModalElem = document.getElementById(prevModalSelection.id);
  prevModalElem.classList.add('active');
  modalSelections.forEach((sel) => {
    if (sel.id !== prevModalSelection.id) {
      document.getElementById(sel.id).classList.remove('active');
    }
  });
});



let quantity = 0;

document.getElementById('add').addEventListener('click', ()=>{
    quantity++;
    document.getElementById('item-quantity').innerHTML = `${quantity}`;
    
})
document.getElementById('minus').addEventListener('click', ()=>{
    if(quantity > 0){
        quantity--;
        document.getElementById('item-quantity').innerHTML = `${quantity}`;
        
    }
})
const carts = document.getElementById('carts');
const clearCart = document.getElementById('clearCart');
const cartItems = document.getElementById('cartItems');
const addCart = document.getElementById('addToCart');

addCart.addEventListener('click', ()=>{
  if (carts.style.display == "none"){
    document.addEventListener('click', ()=>{
      carts.style.display = "block";

      
    });
    // carts.style.display = "none";
    
  } else{
    if (quantity == 0){
      cartItems.style.display = "none";
      document.getElementById('noItem').style.display = "block";
      document.getElementById('checkout').style.display = "none";
    }
    carts.style.display = "block";
    document.getElementById('counter').innerHTML = `${quantity}`;
    document.getElementById('cartQuantity').innerHTML = `${quantity}`;
    document.getElementById('total').innerHTML ="$" +`${quantity}`*125;
    

    document.getElementById('checkout').addEventListener('click', ()=>{
      alert("Hold your horses, lol")
    })
    clearCart.addEventListener('click', ()=>{
      cartItems.style.display = "none";
      document.getElementById('noItem').style.display = "block";
      document.getElementById('counter').innerHTML = 0;
    })
    document.addEventListener('click', (event) => {
      // If the click is outside the cart and the cart is open, close it
      if (!carts.contains(event.target) && !addCart.contains(event.target)) {
        carts.style.display = "none";
      }
    });


  }
})





