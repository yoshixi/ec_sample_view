  function writeHeader(rootDir){

    $.ajax({
      url: rootDir + "header.html", 
      cache: false,
      async: false, 
      success: function(html){

        html = html.replace(/\{\$root\}/g, rootDir);
        document.write(html);
      }
    });

  }

// $(function(){
//   //テキストリンクをクリックしたら
//   $("#modal-open").click(function(){
//     $("body").append('<div id="modal-bg"></div>');
//     modalResize();
//     $("#modal-bg,#modal-main").fadeIn("slow");
//     //画面のどこかをクリックしたらモーダルを閉じる
//     $("#modal-bg,#modal-main").click(function(){
//       $("#modal-main,#modal-bg").fadeOut("slow",function(){
//       //挿入した<div id="modal-bg"></div>を削除
//       $('#modal-bg').remove() ;
//       });
//     });
//     //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
//     $(window).resize(modalResize);

//     function modalResize(){
//       var w = $(window).width();
//       var h = $(window).height();
//       var cw = $("#modal-main").outerWidth();
//       var ch = $("#modal-main").outerHeight();
//       //取得した値をcssに追加する
//       $("#modal-main").css({
//         "left": ((w - cw)/2) + "px",
//         "top": ((h - ch)/2) + "px"
//       });
//      }
//    });
// });
