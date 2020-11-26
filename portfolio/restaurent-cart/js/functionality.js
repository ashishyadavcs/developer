//split checkout
document.querySelector('.split .switch').addEventListener('click',function(){
   var checkbox=document.querySelector('.split .switch input');
   if(checkbox.checked){
       //to hide checkout on split toggle button click and set productContainer width 100%
       document.querySelector('.checkout').classList.toggle('hide')
       document.querySelector('section.products-container .items').classList.add('toogleWidth');
       document.querySelector('section.products-container .checkout').style.height="0";
 
   }else{
     
     document.querySelector('section.products-container .items').classList.remove('toogleWidth')
     document.querySelector('section.products-container .checkout').style.height="auto"
   }
 })

 
 
 //functionality
 
 //checkout.js
 $(document).ready(function() {
     var Arrays = new Array();
      
 //on click of puls button in item
    $('.tabs .item .selector .select.plus').click(function(){
       var thisID = $(this).parent().parent().parent().attr('id');
       var itemname  = $(this).parent().parent().find('.name').html();
       var itemprice = $(this).parent().parent().find('.price').html();
       
       //to check wether item is in cart or not
       if(isItemExist(Arrays,thisID)){
          //if item is in cart
          var price = $('#each-'+thisID).children(".shopp-price").find('em').html();
          var quantity = $('#each-'+thisID).children().children(".shopp-quantity").html();
          console.log(quantity)
          quantity = parseInt(quantity)+parseInt(1);
          var total = parseFloat(itemprice)*parseInt(quantity);
          total=total.toFixed(2);
          
          
          $('#'+thisID+' .item-details .selector .select.zero').html(quantity)
 
          $('#each-'+thisID).children(".shopp-price").find('em').html(total);
          $('#each-'+thisID).children().children(".shopp-quantity").html(quantity);
 
          var prev_charges = $('#subtotal').html();
          prev_charges = parseFloat(prev_charges)-parseFloat(price);
          prev_charges = parseFloat(prev_charges)+parseFloat(total);
          prev_charges=prev_charges.toFixed(2)
          $('#categoryTotal').html((prev_charges))
          $('#subtotal').html(prev_charges);
          $('#taxes').html((prev_charges*8.50/100).toFixed(2));
 
          var subtotal=$('#subtotal').html()
          var tax=$('#taxes').html()
          var discount=$('#discount').html()
          var totalP=parseFloat(subtotal)+parseFloat(tax)-parseFloat(discount)
         //toFixed - for limit numer of digit after decimal
          $('#payAmount').html(totalP.toFixed(2));   
          
          
       } else {
          //if item is not in cart
          Arrays.push(thisID);
          
          var prev_charges = $('#subtotal').html();
          $('#'+thisID+' .item-details .selector .select.zero').html(1)
          
          prev_charges = parseFloat(prev_charges)+parseFloat(itemprice);
 
          $('#categoryTotal').html(prev_charges)
          $('#subtotal').html(prev_charges);
          
          $('#taxes').html(prev_charges*8.50/100);
          var discount=$('#discount').html()
          var tax=$('#taxes').html()
          let totalP=parseFloat(prev_charges)+parseFloat(tax)-parseFloat(discount)
          $('#payAmount').html(totalP.toFixed(2));
          
          
          //apending items to the checkout table 
 
          $('#products').append(`
             <tr class = "shopp" id = "each-${thisID}">
                <td class = "label">${itemname}</td>
                <td>$${itemprice}x<span class="shopp-quantity">1<span></td>
                <td class = "shopp-price">$<em>${itemprice}</em></td>
             </tr>`);
 
          
       }
 
       
    });	
 
    
    
 
 $('.tabs .item .selector .select.minus').click(function(){
     var thisID = $(this).parent().parent().parent().attr('id');
      
       var itemprice = $(this).parent().parent().find('.price').html();
       
     //check wether item exists in the cart or not
       if(isItemExist(Arrays,thisID)){
          var price = $('#each-'+thisID).children(".shopp-price").find('em').html();
          var quantity = $('#each-'+thisID).children().children(".shopp-quantity").html();
          
          if(quantity>0){
             quantity = parseInt(quantity)-parseInt(1);
             $('#'+thisID+' .item-details .selector .select.zero').html(quantity)
          }else{
              //to prevent negative quantity
              quantity=0;
             
          }
          
          
          var total = parseFloat(itemprice)*quantity;
          
 
          $('#each-'+thisID).children(".shopp-price").find('em').html(total);
          $('#each-'+thisID).children().children(".shopp-quantity").html(quantity);
 
         
         var prev_charges = $('#subtotal').html();
          prev_charges = parseFloat(prev_charges)-parseFloat(price);
          prev_charges = parseFloat(prev_charges)+parseFloat(total);
          $('#categoryTotal').html(prev_charges)
          $('#subtotal').html(prev_charges);
          $('#taxes').html((prev_charges*8.50/100).toFixed(2));
 
          var subtotal=$('#subtotal').html()
          var tax=$('#taxes').html()
          var discount=$('#discount').html()
          var totalP=parseFloat(subtotal)+parseFloat(tax)-parseFloat(discount)
         
          $('#payAmount').html(totalP.toFixed(2));
 
         //
         
       } 
 
 })
 
 //on clicking minus
    
 }); // document .ready ends
  
 
 
 function isItemExist(arr, obj) {
    for(var i = 0; i<arr.length; i++) {
       if (arr[i] == obj) return true;
    }
 }
 