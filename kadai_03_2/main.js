var cart = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var json = JSON.stringify(cart, undefined ,1);
localStorage.setItem("key_name", json);
console.log(cart);


function load() {
  var mydata = "";
  if(!localStorage.getItem('mydata')) {
    mydata = "データがありません";
  } else {
    mydata = localStorage.getItem('mydata');
  }
  console.log(`mydata= ${mydata}`);
  document.getElementById("mydata_out").innerHTML = mydata;
}
// 保存
function save() {
  var mydata = document.getElementById("mydata_in").value;
  console.log(`mydata_in = ${mydata_in}`);
  localStorage.setItem('mydata', mydata);
}

$(function() {

  if (localStorage.getItem('memo')){
    $('#memo').val(localStorage.getItem('memo'));
}

$('#clear').click(function() {
    $('#memo').val('');
    localStorage.removeItem('memo');
});

$('#memo').bind('keyup', function() {
    localStorage.setItem('memo', $('#memo').val());
});

});


$("#button1").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin1 = cart[0];  //超炭酸水 商品1
  shouhin1 = shouhin1 + 1;
  cart[0] = shouhin1
  console.log(cart[0])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;
});

$("#button2").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin2 = cart[1];  //超炭酸水 商品1
  shouhin2 = shouhin2 + 1;
  cart[1] = shouhin2
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button3").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin3 = cart[2];  //超炭酸水 商品1
  shouhin3 = shouhin3 + 1;
  cart[2] = shouhin3
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button4").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin4 = cart[3];  //超炭酸水 商品1
  shouhin4 = shouhin4 + 1;
  cart[3] = shouhin4
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button5").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin5 = cart[4];  //超炭酸水 商品1
  shouhin5 = shouhin5 + 1;
  cart[4] = shouhin5
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button6").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin6 = cart[5];  //超炭酸水 商品1
  shouhin6 = shouhin6 + 1;
  cart[5] = shouhin6
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button7").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin7 = cart[6];  //超炭酸水 商品1
  shouhin7 = shouhin7 + 1;
  cart[6] = shouhin7
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button8").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin8 = cart[7];  //超炭酸水 商品1
  shouhin8 = shouhin8 + 1;
  cart[7] = shouhin8
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button9").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin9 = cart[8];  //超炭酸水 商品1
  shouhin9 = shouhin9 + 1;
  cart[8] = shouhin9
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button10").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin10 = cart[9];  //超炭酸水 商品1
  shouhin10 = shouhin10 + 1;
  cart[9] = shouhin10
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button11").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin11 = cart[10];  //超炭酸水 商品1
  shouhin11 = shouhin11 + 1;
  cart[10] = shouhin11
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button12").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin12 = cart[11];  //超炭酸水 商品1
  shouhin12 = shouhin12 + 1;
  cart[11] = shouhin12
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button13").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin13 = cart[12];  //超炭酸水 商品1
  shouhin13 = shouhin13 + 1;
  cart[12] = shouhin13
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button14").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin14 = cart[13];  //超炭酸水 商品1
  shouhin14 = shouhin14 + 1;
  cart[13] = shouhin14
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button15").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin15 = cart[14];  //超炭酸水 商品1
  shouhin15 = shouhin15 + 1;
  cart[14] = shouhin15
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button16").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin16 = cart[15];  //超炭酸水 商品1
  shouhin16 = shouhin16 + 1;
  cart[15] = shouhin16
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button17").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin17 = cart[16];  //超炭酸水 商品1
  shouhin17 = shouhin17 + 1;
  cart[16] = shouhin17
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button18").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin18 = cart[17];  //超炭酸水 商品1
  shouhin18 = shouhin18 + 1;
  cart[17] = shouhin18
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button19").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin19 = cart[18];  //超炭酸水 商品1
  shouhin19 = shouhin19 + 1;
  cart[18] = shouhin19
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button20").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin20 = cart[19];  //超炭酸水 商品1
  shouhin20 = shouhin20 + 1;
  cart[19] = shouhin20
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});

$("#button21").on("click" ,function(){
  var json = localStorage.getItem("key_name");
  cart = JSON.parse(json);

  var shouhin21 = cart[20];  //超炭酸水 商品1
  shouhin21 = shouhin21 + 1;
  cart[20] = shouhin21
  console.log(cart[1])
  var cart_total = cart.reduce(function(sum,element){return sum + element;
  }, 0);
  console.log(cart_total);
  var json = JSON.stringify(cart, undefined ,1);
  localStorage.setItem("key_name", json);
  document.getElementById("total").innerHTML = cart_total;

});