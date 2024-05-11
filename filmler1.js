
var model = "";

document.getElementById('myBtn').onclick = function() {
 
   modal = document.getElementById("parasite");
   modal.style.display = "block";

}

document.getElementById('meterBtn').onclick = function() {

   modal = document.getElementById("meterdiv");
   modal.style.display = "block";

}


document.getElementById('teenBtn').onclick = function() {

   modal = document.getElementById("teenwolfdiv");
   modal.style.display = "block";

}

document.getElementById('papelBtn').onclick = function() {

   modal = document.getElementById("papeldiv");
   modal.style.display = "block";

}

document.getElementById('tomBtn').onclick = function() {

   modal = document.getElementById("tomdiv");
   modal.style.display = "block";

}

document.getElementById('deadBtn').onclick = function() {

   modal = document.getElementById("deaddiv");
   modal.style.display = "block";

}

document.getElementById('lucyBtn').onclick = function() {

   modal = document.getElementById("lucydiv");
   modal.style.display = "block";

}

document.getElementById('eliteBtn').onclick = function() {

   modal = document.getElementById("elitediv");
   modal.style.display = "block";

}

document.getElementById('denizBtn').onclick = function() {

   modal = document.getElementById("denizdiv");
   modal.style.display = "block";

}

document.getElementById('youBtn').onclick = function() {

   modal = document.getElementById("youdiv");
   modal.style.display = "block";

}

document.getElementById('pinokyoBtn').onclick = function() {

   modal = document.getElementById("pinokyodiv");
   modal.style.display = "block";

}

document.getElementById('aliceBtn').onclick = function() {

   modal = document.getElementById("alicediv");
   modal.style.display = "block";

}

document.getElementById('greenBtn').onclick = function() {

   modal = document.getElementById("greendiv");
   modal.style.display = "block";

}


document.getElementById('allBtn').onclick = function() {

   modal = document.getElementById("alldiv");
   modal.style.display = "block";

}

document.getElementById('wantedBtn').onclick = function() {

   modal = document.getElementById("wanteddiv");
   modal.style.display = "block";

}


document.getElementById('darkBtn').onclick = function() {

   modal = document.getElementById("darkdiv");
   modal.style.display = "block";

}

document.getElementById('bergenBtn').onclick = function() {

   modal = document.getElementById("bergendiv");
   modal.style.display = "block";

}


document.getElementById('breakingBtn').onclick = function() {

   modal = document.getElementById("breakingdiv");
   modal.style.display = "block";

}


document.getElementById('birdBtn').onclick = function() {

   modal = document.getElementById("birddiv");
   modal.style.display = "block";

}

document.getElementById('walkingBtn').onclick = function() {

   modal = document.getElementById("walkingdiv");
   modal.style.display = "block";

}



document.getElementById('cebimdekiBtn').onclick = function() {

   modal = document.getElementById("cebimdekidiv");
   modal.style.display = "block";

}



document.getElementById('wonderBtn').onclick = function() {

   modal = document.getElementById("wonderdiv");
   modal.style.display = "block";

}



document.getElementById('platformBtn').onclick = function() {

   modal = document.getElementById("platformdiv");
   modal.style.display = "block";

}



document.getElementById('mezarlikBtn').onclick = function() {

   modal = document.getElementById("mezarlikdiv");
   modal.style.display = "block";

}



document.getElementById('cizgiliBtn').onclick = function() {

   modal = document.getElementById("cizgilidiv");
   modal.style.display = "block";

}



document.getElementById('therainBtn').onclick = function() {

   modal = document.getElementById("theraindiv");
   modal.style.display = "block";

}



document.getElementById('howBtn').onclick = function() {

   modal = document.getElementById("howdiv");
   modal.style.display = "block";

}



document.getElementById('legaciesBtn').onclick = function() {

   modal = document.getElementById("legaciesdiv");
   modal.style.display = "block";

}



document.getElementById('mucizeBtn').onclick = function() {

   modal = document.getElementById("mucizediv");
   modal.style.display = "block";

}



document.getElementById('the100Btn').onclick = function() {

   modal = document.getElementById("the100div");
   modal.style.display = "block";

}


document.getElementById('close').onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modal = "";
    }
  }