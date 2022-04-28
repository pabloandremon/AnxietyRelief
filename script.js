const btn = document.getElementById('btn');
document.getElementById("breathe").style.display ="none";

function openTest() {
    
    const initialText = 'Breath Ball';
    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.textContent = 'hide';
        document.getElementById("breathe").style.display = "block";   
    } 
    else {
        btn.textContent = initialText;
        document.getElementById("breathe").style.display ="none";       
    }
    
}
//tooltip
btn.addEventListener('click', openTest);
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip().on('click', function () {
        $(this).tooltip('hide')
    });   
  });

  
