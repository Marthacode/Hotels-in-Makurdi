var json_url="http://www.json-generator.com/api/json/get/ceZJNsgSiG?indent=2";
$.getJSON( json_url, function(data)
{
  $.each(data.hotel, function(i,item){
  

    $(`<div class="col-lg-4 sm-6 card ml-3 mb-3" >
      <img src="${item.photo}">
      <h5>${item.name}</h5>
      <h6>${item.location}</h6>
      <p>${item.description}</p>
      </div>`).appendTo(".hotels");



  });
});  