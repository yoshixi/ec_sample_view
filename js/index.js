$(function() {
  var itemsCounter = 1;
  var container = document.getElementById('main');
  var indexData;

  AOS.init({
    easing: 'ease-in-out-sine'
  });

  function addItem (i,val) {

    var image =  val.image.url ? val.image.url : "http://blogimg.goo.ne.jp/user_image/6e/c1/937e422464b59321ed1dd29523fb143b.jpg"

    $('.product-image').css('background-image',`url(${image})`);

    var item = document.createElement('div');
    item.classList.add('aos-item');
    item.setAttribute('data-aos', 'fade-up');
    item.innerHTML = `<a href="javascript:void(0);" data_idx ="${i}" class="product-show"><div class="aos-item__inner"><p class="productImage" style="background-image: url('${image}');"></p><p>${val.name}</p><p>${val.price}</p></div></a>`;
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
      indexData = data;
      $.each(data,addItem)
    })
    .fail(function(){
        alert('error');
     });
 }

 $('form.put-form').on('submit', function(e) {
    e.preventDefault();
    var $form = $(this);
    var fd = new FormData($form[0]);
    var productId = $('#product-id').val();
    var url = 'http://localhost:3000/api/v1/products/' + productId;
    console.log(url);
    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/api/v1/products',
      data: fd,
      dataType: 'json',
      timeout: 10000,
      crossDomain : true,
      processData: false,
      contentType: false
    })
    .done(function(data){
      location.reload()
    })
    .fail(function(){
        alert('error');
     });
    return false;
  });

 $("#main").on("click",".product-show", function(){
    var idx =  $(this).attr('data_idx')
    var productData = indexData[idx];
    $('#product-name').val(productData.name);
    $('#product-price').val(productData.price);
    $('#product-id').val(productData.id);
    $('#product-shop').val(productData.shop_id);
    $('.modal-image').css('background-image',`url(${productData.image.url})`);
    $('#showModal').modal();
 });


 indexAjax();

});


