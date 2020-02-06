(function($){
   

    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }
    
    function ready() {
        var removeCartItemButtons = document.getElementsByClassName('btn-danger')
        for (var i = 0; i < removeCartItemButtons.length; i++) {
            var button = removeCartItemButtons[i]
            button.addEventListener('click', removeCartItem)
        }
    
        var quantityInputs = document.getElementsByClassName('cart-quantity-input')
        for (var i = 0; i < quantityInputs.length; i++) {
            var input = quantityInputs[i]
            input.addEventListener('change', quantityChanged)
        }
    
        var addToCartButtons = document.getElementsByClassName('shop-item-button')
        for (var i = 0; i < addToCartButtons.length; i++) {
            var button = addToCartButtons[i]
            button.addEventListener('click', addToCartClicked)
        }
    
        document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    }
    
    function purchaseClicked() {
        alert('Achat effectué avec succés ')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
    }
    
    function removeCartItem(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }
    
    function quantityChanged(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }
    
    function addToCartClicked(event) {
        var button = event.target
        var shopItem = button.parentElement.parentElement.parentElement
        var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
        var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
        console.log(title);
        addItemToCart(title, price, imageSrc)
       
        updateCartTotal()
    }
    
    function addItemToCart(title, price, imageSrc) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText == title) {
                alert('Ce produit existe deja dans votre panier')
                return
            }
        }
        var cartRowContents = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
    
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
               <button class="btn btn-danger" type="submit">Supp</button>
            </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    }
    
    function updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-row')
        var total = 0
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            var price = parseFloat(priceElement.innerText.replace('DA', ''))
            var quantity = quantityElement.value
            total = total + (price * quantity)
        }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('cart-total-price')[0].innerText = total +'  DA' 
    }















    $('#categoryFilter').keyup(function(event){  //on prend le focus sur se champs directement à l'affichage de la page
        var input = $(this);
        var val = input.val();

        if(val == ''){   //si la valeur du champs est vide il va faloire nettoyer un peut se qu'on a fait
           $('.filter div').show();
           $('.filter #span1').removeClass('highlighted');
           return true; //pour empecher la fct d'aller plus loin
        }

        var regexp = '\\b(.*)';
            for(var i in val){
                 regexp += '('+val[i]+')(.*)';
            }
            regexp += '\\b';

        $('.filter div').show();
        $('.filter ').find('button>#span1').each(function(){
            var span = $(this);
            var resultats = span.text().match(new RegExp(regexp,'i'));
            if(resultats){
                var string = '';
                for(var i in resultats){
                    if(i > 0){
                        if( i%2 == 0){
                            string += '<span id="span1" class="highlighted">'+resultats[i]+'</span>';
                        }else{
                            string += resultats[i];
                        }
                     
                    }
                }
                span.empty().append(string);
            }else{
                span.parent().parent().parent().hide();
               
            }

            
        })
       
    });

    
    $('#scannFilter').focus().keyup(function(event){  //on prend le focus sur se champs directement à l'affichage de la page
        var input = $(this);
        var val = input.val();

        if(val == ''){   //si la valeur du champs est vide il va faloire nettoyer un peut se qu'on a fait
           $('.filter div').show();
           $('.filter #span2').removeClass('highlighted');
           return true; //pour empecher la fct d'aller plus loin
        }

        var regexp = '\\b(.*)';
            for(var i in val){
                 regexp += '('+val[i]+')(.*)';
            }
            regexp += '\\b';

        $('.filter div').show();
        $('.filter').find('button>#span2').each(function(){
            var span = $(this);
            var resultats = span.text().match(new RegExp(regexp,'i'));
            if(resultats){
                var string = '';
                for(var i in resultats){
                    if(i > 0){
                        if( i%2 == 0){
                            string += resultats[i];
                        }else{
                            string += resultats[i];
                        }
                     
                    }
                }
                
                span.empty().append(string);
                
                
            }else{
                span.parent().parent().parent().hide();
               
            
            }
        
        })
        
    });
         
    //     var element1 = document.getElementById('scannFilter');
    //     element1.addEventListener('keypress', function() {
    //     document.querySelector('.shop-item-details button').focus();
    //     });
   
   
})(jQuery);