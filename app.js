window.onload=()=>{
  loadDoc('https://newsapi.org/v2/everything?q=tesla&from=2021-04-26&sortBy=publishedAt&apiKey=397f11cdcd8841c59d79d457f2167198');

}




function loadDoc(url) {
  $.ajax({
    url: "https://api.allorigins.win/raw?url="+encodeURIComponent(url),
    beforeSend: function() {
      
      $("#gif").attr("style", "display: block");
    }
  })
  .done(function(data) {
    
    console.log( "Sample of data:", data);
    $("#gif").attr("style", "display: none");
    showArticles(data);
    // $.each(data.articles, (i)=>{
    //   showArticles(data.articles[i]);
    // });

  });
}

function showArticles(data){
  mydiv= $("<div id= 'mydiv'></div>");
  container = $("#container");
  $.each(data.articles, (i)=>{
    mydiv.append("<li>"+data.articles[i].title+"</li>");

    !data.articles[i].urlToImage? $("img").attr("href", "error.png"): $("<img id='img'></img>").attr("src", data.articles[i].urlToImage).appendTo(mydiv);


    $("<button id='btn' class= 'btn'>Show more</button>").appendTo(mydiv);
    $("#btn").text("Mas informacion");
    
  //Place the event listener out of the bucle
  
    $(document).ready(function(){
      btn = $('.btn');
      btn.click(function(){
       showDetails(data.articles[i]);

     } );
    });
    mydiv.appendTo(container);
  });
    
  }
//Funcion para esconder Modal
function hideModal(){
  
    $('.close').click(function(){
      
      $('#myModal').css('display', 'none');
    } );  
}


function showDetails(details)  
{
  
  modal = $("#myModal");
  modal.css('display', 'inline-block');

  
  !details.author? $("<p id='author'>").text("No hay autor"): $(".author").text("Author is: " +details.author)
  $(".description").text("Description: " +details.description)
  $(".content").text("Content: "+details.content)
  $(".published").text("Published: "+details.publishedAt)
  $(".link" ).text("Link: "+details.url)
  $(".link").attr("href", details.url);

  
}
 
// {
//     modal = $("#modalDetalle");
//     enlace=$(".url");

//     !details.author? $('.autor').text("No hay autor"): $('.autor').text(details.author);
//     !details.content? $('contenido').text("No hay contenido"):$('.contenido').text(details.content);   
//     !details.description? $('descripcion').text("No hay descripcion"):$('descripcion').text(details.description);
//     //contenido.text(details.contenido);
//     $('.publicado').text(details.publishedAt);
//     enlace.attr("href", details.url);
//     //$('.w3-modal').style.display = "block";
    

//  }





