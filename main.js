const para = "This is my first page";
	var mat = document.getElementById('match');
	mat.innerHTML = para;

	txt = document.getElementById('txt')
    txt.addEventListener('keyup', function(){
    var data = txt.value ;
    var content = document.getElementById('content');
    content.innerHTML = data;

    document.getElementById('btn');

    btn.addEventListener('click',function(){
    	 if (para === data){
   		txt.style.border = "1px solid green";
   		txt.style.boxShadow = "5px 10px 20px -10px rgba(0,200,0,0.7)";
   }
   else{
   	txt.style.border = "1px solid pink";
   	txt.style.boxShadow = "5px 10px 20px -10px rgba(200,0,0,0.7)";
   }

    })

});