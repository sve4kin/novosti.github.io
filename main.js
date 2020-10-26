// var source,dest,len,now=0,delay=300,letters=2;
// function show_text()
// {
//     source = document.getElementById("pageTextSource");
//     dest = document.getElementById("pageText");
//     len = source.innerHTML.length;
//     show();
// }

// function show()
// {
// dest.innerHTML += source.innerHTML.substr(now,letters);
// now+=letters;

// if(now<len)
//   setTimeout("show()",delay);
// }

// show_text();



jQuery(document).ready(function ($) {
  
  window.onload = function () {
    jQuery("#user-city").text(ymaps.geolocation.city);
  };

  
  var num = 0;

  var que =[
    { 
      message:'Привет) Не против пообщаться?)',
      btn1:'Да',
      btn2:'Нет',
      btn3:'',
    },
    { 
      message:'Как думаешь поцелуй на первом свидании это хорошо или плохо?)',
      btn1:'Хорошо',
      btn2:'Плохо',
      btn3:'',
    },
    { 
      message: 'Я люблю "обычных" мужчин, без пафоса. Ты такой?',
      btn1:'Да',
      btn2:'Я пафосный',
      btn3:'',
    },
    { 
      message:'Если интересно дальше пообщаться - регистрируйся, найдешь меня в поиске',
      btn1:'',
      btn2:'',
      btn3:'Зарегистрироваться и продолжить общение',
    },
  ];
  updateMessage();

  function updateMessage(){
    // console.log(que[num])
    let activeQue = que[num];

    if(activeQue.btn1){
      $('.btn1').show();
      $('.btn1').text(activeQue.btn1);
    }
    else{
      $('.btn1').hide();
    }
    if(activeQue.btn2){
      $('.btn2').show();
      $('.btn2').text(activeQue.btn2);
    }
    else{
      $('.btn2').hide();
    }

    if(activeQue.btn3){
      $('.btn3').show();
      $('.btn3').text(activeQue.btn3);
    }
    else{
      $('.btn3').hide();
    }

    sourceText = activeQue.message;
    len = sourceText.length;
    nowText = 0;
    $('.que').text('');
    printText();
   

    $('.image-'+num).css({'opacity':1});

    num++;
  }


  


  $('.btn-resp').on('click',function(event){
    event.preventDefault;
    // console.log('click');
    updateMessage();
  });

});


var sourceText,dest,len,nowText=0,delay=200,letters=2;
function printText()
  {
    let oldText = $('.que').text();
    $('.que').text(oldText + sourceText.substr(nowText,letters));
    nowText+=letters;

    if(nowText<len){
      setTimeout("printText()",delay);
    }
  }