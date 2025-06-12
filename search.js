function srchScript() {
    var myInput = js_variable;
    function productInfo(){
        var array = [];
        var inputed = js_variable;
        var trimmed = inputed.trim(" ");
        var strl = trimmed.replace(/ /gi, "");
        var wdslng = strl.length;
        var word = trimmed.split(" ");
        var wds = word.length;
        var sorted = [];
               
        if (wds>1) {
            var garray = [];
            var gstr = word[0];
            for (var p = 0; p < wds; p++) {
                if (word[p].length>1) {
                    garray.push(word[p]);
                }
            }
            var nwga = garray.toString();
            var nwa = nwga.replace(/,/g, " ");           
        }      
        for (var u = 0; u < wds; u++) {
            if (word[u].length==2) {
                for (var i = 0; i<(word[u].length)-1;i++) {
                    var s1 = word[u].charAt(0+i);
                    var s2 = word[u].charAt(1+i);
                    var v1 = s1.match(/[0,1,2,3,4,5,6,7,8,9]/g);
                    var v2 = s2.match(/[0,1,2,3,4,5,6,7,8,9]/g);
                    var string = v1 + v2;
                    sorted.push(string);                  
                }
            }           
            if (word[u].length==3) {
                for (var i = 0; i<(word[u].length)-2;i++) {
                    var s1 = word[u].charAt(0+i);
                    var s2 = word[u].charAt(1+i);  
                    var s3 = word[u].charAt(2+i);  
                    var string = s1 + s2 + s3;
                    sorted.push(string);
                    
                }               
            }
            if (word[u].length==4) {
                for (var i = 0; i<(word[u].length)-2;i++) {
                    var s1 = word[u].charAt(0+i);
                    var s2 = word[u].charAt(1+i);  
                    var s3 = word[u].charAt(2+i);
                    var s4 = word[u].charAt(3+i);
                    var string = s1 + s2 + s3 + s4;
                    var string2 = s1 + s2 + s3;
                    sorted.push(string);
                    sorted.push(string2);
                }
                
            }
            if (word[u].length==5) {
                for (var i = 0; i<(word[u].length)-2;i++) {
                    var s1 = word[u].charAt(0+i);
                    var s2 = word[u].charAt(1+i);  
                    var s3 = word[u].charAt(2+i);
                    var s4 = word[u].charAt(3+i);
                    var s5 = word[u].charAt(4+i);
                    var string = s1 + s2 + s3 + s4 + s5;
                    var string1 = s1 + s2 + s3 + s4;
                    var string2 = s1 + s2 + s3;
                    sorted.push(string);
                    sorted.push(string1);
                    sorted.push(string2);
                }
                
            }
            if (word[u].length>5) {
                for (var i = 0; i<5;i++) {
                    var s1 = word[u].charAt(0+i);
                    var s2 = word[u].charAt(1+i);  
                    var s3 = word[u].charAt(2+i);
                    var s4 = word[u].charAt(3+i);
                    var s5 = word[u].charAt(4+i);
                    var s6 = word[u].charAt(5+i);
                    var string = s1 + s2 + s3 + s4 + s5 + s6;
                    sorted.push(string);        
                }
                for (var i = 0; i<5;i++) {
                    var s1 = word[u].charAt(0+i);
                    var s2 = word[u].charAt(1+i);  
                    var s3 = word[u].charAt(2+i);
                    var s4 = word[u].charAt(3+i);
                    var s5 = word[u].charAt(4+i);
                    var s6 = word[u].charAt(5+i);
                    var string1 = s1 + s2 + s3 + s4 + s5+ s6;
                    sorted.push(string1);
                }
                for (var i = 0; i<5;i++) {
                    var s1 = word[u].charAt(0+i);
                    var s2 = word[u].charAt(1+i);  
                    var s3 = word[u].charAt(2+i);
                    var s4 = word[u].charAt(3+i);
                    var s5 = word[u].charAt(4+i);
                    var s6 = word[u].charAt(5+i);
                    var string2 = s1 + s2 + s3 + s4 + s5+ s6;
                    sorted.push(string2);
                }
                for (var i = 0; i<5;i++) {
                    var s1 = word[u].charAt(0+i);
                    var s2 = word[u].charAt(1+i);  
                    var s3 = word[u].charAt(2+i);
                    var s4 = word[u].charAt(3+i);
                    var s5 = word[u].charAt(4+i);
                    var s6 = word[u].charAt(5+i);
                    var string3 = s1 + s2 + s3 + s4 + s5+ s6;
                    sorted.push(string3);
                }
            }
        }
        sorted.unshift(nwa);
        var uniqueItems = Array.from(new Set(sorted));
        alert(uniqueItems);
    }
    
    productInfo();
}