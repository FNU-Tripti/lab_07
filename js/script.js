function init(){
  //add your javascrip between these two lines of code
  function listnerFunction(){
    var entryInputValue = document.getElementById("entryinput").value;
    alert("FNU Tripti: "+ entryInputValue);
    var textboxRef =  document.getElementById("textoutput");
    textboxRef.innerHTML = entryInputValue;
  }
  // adding the click event listener on the click of entrybutton div
  var listenerReference = document.getElementById("entrybutton");
  listenerReference.addEventListener('click', listnerFunction); 
}   
        
window.addEventListener('load', init);