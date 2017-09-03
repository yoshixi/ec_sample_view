$(function() {
  var itemsCounter = 1;
  var container = document.getElementById('main');

  AOS.init({
    easing: 'ease-in-out-sine'
  });

  function addItem (i,val) {

    var image =  val.image.url ? val.image.url : "http://blogimg.goo.ne.jp/user_image/6e/c1/937e422464b59321ed1dd29523fb143b.jpg"

    $('.product-image').css('background-image',`url(${image})`);

    var item = document.createElement('div');
    item.classList.add('aos-item');
    item.setAttribute('data-aos', 'fade-up');
    item.innerHTML = `<a href="javascript:void(0);" data="${val.id}" class="product-show"><div class="aos-item__inner"><p class="productImage" style="background-image: url('${image}');"></p><p>${val.name}</p><p>${val.price}</p></div></a>`;
    container.appendChild(item);
  }

 function indexAjax() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/v1/products',
      dataType: 'json',
      timeout: 10000,
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data[0]);
      $.each(data,addItem)
    })
    .fail(function(){
        alert('error');
     });
 }
 function showAjax() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/v1/products',
      dataType: 'json',
      timeout: 10000,
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data[0]);
      $.each(data,addItem)
    })
    .fail(function(){
        alert('error');
     });
 }
 


 $("#main").on("click",".product-show", function(){
    var data =  $(this).attr('data')

 });


 indexAjax();

});


