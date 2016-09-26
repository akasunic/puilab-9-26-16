var showImage = function(which){
    if (which == "great"){
        var source = "images/awesome.jpeg";
    }
    else if (which == "terrible"){
        var source = "images/cry.jpeg";
    }
    var pic = document.createElement("img");
    pic.setAttribute("src", source);
    pic.setAttribute("id", "image");
    document.querySelector('#imgContainer').appendChild(pic);
    document.querySelector('#imgContainer').appendChild(addReset());
    
    
}

var addReset = function () {
    var btn = document.createElement("BUTTON");
    var txt = document.createTextNode("Reset");
    btn.setAttribute("id", "reset");
    btn.appendChild(txt);
    btn.addEventListener('click', deleteImage);
    return btn;
}

var deleteImage = function() {
    var l = this.parentElement.id;
    var divId = "#".concat(this.parentElement.id);
    var imageDiv = document.querySelector(divId);
    console.log(imageDiv);
    var btnID = "#".concat(this.id);
    var btn = document.querySelector(btnID);
    var pic = document.querySelector("#image");
    imageDiv.removeChild(btn);
    imageDiv.removeChild(pic);
}