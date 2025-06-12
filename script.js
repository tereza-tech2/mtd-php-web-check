/*var ifiFrame = function() {
    var iMLframe = String(window.location);
    if (iMLframe.includes("ML") == true) {
       var imlFrame = $('<iframe id="MLframe" src="http://www.neviditelnereproduktory.cz/" scrolling="no" style="width: 100%;height: 800px;overflow: hidden;border: none;"></iframe>');
       imlFrame.insertBefore( $( "#setts" ) );
    }

}*/
var productLess = function(){setTimeout(function() {
    $(".flea:contains(Sonus)").find(".btn-2").css({backgroundImage: "linear-gradient(white,white)", border: "none"});
    $(".flea:contains(Sonus)").find(".btn-shadow").remove();
    
}, 2000)};
var someParents = function(){setTimeout(function() {
    if ((window.location.href).includes("MLA") == true) {
        $(".auto").addClass("autoML");
        $(".auto").text().replace(/\*\*(.+?)\*\*/, '<i>$1</i>');
        
        var iMLframe = String(window.location);
        if (iMLframe.includes("ML") == true) {
           var imlFrame = $('<iframe id="MLframe" src="http://www.neviditelnereproduktory.cz/" scrolling="no" style="width: 100%;height: 800px;overflow: hidden;border: none;"></iframe>');
           imlFrame.insertBefore( $( "#setts" ) );
        }
    }
    
}, 2000)};
    