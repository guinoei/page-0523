function openTab(tabName,elmnt,color,text) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(tabName).style.display = "block";
    elmnt.style.backgroundColor = color;

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.color = "";
    }

    document.getElementById(tabName).style.display = "block";
    elmnt.style.color = text;
  }  
 
  document.getElementById("defaultOpen").click();