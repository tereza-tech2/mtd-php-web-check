function requireTable(parameter, arx, ary) {    
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'key3kOt1aJ3uyzQYX' }).base('appnCdpmVNMgcpvw8');

    var katalogPant = function() {
        var v = 1;
        base('vyrobci').select({
            sort: [
                {field: 'pozice', direction: 'asc'}
            ]
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                        var $parentBox = $('<div class="flea quart '+v+'">');
                        var $pantndBox = $('<div>');
                        $parentBox.append($pantndBox);
                        var imgUrls = JSON.stringify(record.get('logo'));

                        if(typeof imgUrls !== "undefined") {
                           var count = ((imgUrls.match(/,/g) || []).length);
                           for (var i = 0; i < (count/14); i++) {
                                var src_src = imgUrls.split(",")[(i*14)+1];
                                var src_sr = src_src.replace('"url":"', "").replace('"', '');
                                $pantndBox.append($('<img>').attr('src', src_sr));

                           }
                        }
                        var $descr = $('<div class="lparagr">').html('<b>' + record.get('zvyrazneni') + '</b> ' + record.get('popis'));
                        var $refBtn = $('<button class="btn-1"><a class="forename" href="' + record.get('odkaz') + '">' + 'Web ' + record.get('vyrobce_kratce') + '</a></button>');
                        var $refBtn2 = $('<button class="btn-1 fa"><a class="forename" href="' + record.get('odkaz') + '">' + record.get('vyrobce_nazev') + '</a></button>');
                
                        //var $pantBtn = $('<button class="btn-2" onclick="loadKatalog('+ record.get('id')+ ', null)">').text('produkty');
                        var $pantBtn = $('<button class="btn-2" onclick="redirectPage('+ "'" + record.getId() + "'" + ', null)">').text('produkty');
                /*var $parentBox = $('<div class="flea quart" id="'+ record.getId() +'" onclick="redirectPage(null,'+ record.getId() +')">');*/
                        var $pantBtn2 = $('<button class="btn-2 far" onclick="loadKatalog('+ record.get('id')+ ', null)">').text('produkty');
                        $pantBtn.append('<div class="btn-shadow">');
                        $pantndBox.append($descr);
                        if (record.get('vyrobce') == 'Future Automation' || record.get('vyrobce') == 'Subwoofer Invisibass') {
                            $pantndBox.append($refBtn2);
                            $pantndBox.append($pantBtn2);
                        } else {$pantndBox.append($refBtn); $pantndBox.append($pantBtn);}
                        
                        $('#computed-body').append($parentBox);
                v = v+1;
            });

            fetchNextPage();
            
        }, function done(error) {
            console.log(error);
        });
    }

    var katalogCatg = function() {
        var q = 0;
        base('kategorie').select({
            sort: [
                {field: 'pozice', direction: 'asc'}
            ]
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                        var $parentBox = $('<div class="flea quart" id="'+ record.getId() +'" onclick="redirectPage(null,'+ record.getId() +')">');
                        var $childBox_1 = $('<div>');
                        var $childBox_2 = $('<div class="flea-h">');
                        $parentBox.append($childBox_1);
                        $parentBox.append($childBox_2);
                        var imgUrls = JSON.stringify(record.get('cover'));

                        if(typeof imgUrls !== "undefined") {
                           var count = ((imgUrls.match(/,/g) || []).length);
                           for (var i = 0; i < (count/14); i++) {
                                var src_src = imgUrls.split(",")[(i*14)+1];
                                var src_sr = src_src.replace('"url":"', "").replace('"', '');
                                $childBox_1.append($('<img class="cg-image">').attr('src', src_sr));
                           }
                        }
                        var $descr = $('<div>').text(record.get('kategorie_nazev'));
                        $childBox_2.append($descr);
                        var $count = $('<div>').text(record.get('count'));
                        $childBox_2.append($count);
                        if (q>1) {$('#computed-body').append($parentBox);}
                        q=q+1;
            });

            fetchNextPage();
        }, function done(error) {
            console.log(error);
        });
    }
    
    if (parameter == 'katalog') { loadKatalog(arx, ary);
                                 
    } else if (parameter == 'parent') { katalogPant();
        
    } else if (parameter == 'category') { katalogCatg();
        
    } else { console.log(' Error occured. Paramter is undefined or invalid.');
            
    }
}

var loadKatalog = function(znacka, kategorie) {
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'key3kOt1aJ3uyzQYX' }).base('appnCdpmVNMgcpvw8');

        $('#computed-body').empty();
        base('Katalog').select({
        }).eachPage(function page(records, fetchNextPage) {
            var n = 0;
            records.forEach(function(record) {
                var airCategory = record.get('catg');
                var airProducer = record.get('pant');
                if (znacka !== null) {
                    if (airProducer == znacka) {
                        var $katalogBox = $('<div class="flea sfv" onclick="productPage(' + "'" + record.getId() + "'" + ')" pro="' + airProducer + '" cag="' + airCategory + '" nth="' + n + '">');
                            var $katalogCov = $('<div class="flea-box">');
                            $katalogBox.append($katalogCov);
                            var imgUrls = JSON.stringify(record.get('Obrazek_Hlavni'));
                                if(typeof imgUrls !== "undefined")
                                {
                                  var count = ((imgUrls.match(/,/g) || []).length);
                                  for (var i = 0; i < (count/14); i++) {
                                      var src_src = imgUrls.split(",")[(i*14)+1];
                                      var src_sr = src_src.replace('"url":"', "").replace('"', '');
                                      $katalogCov.append($('<img>').attr('src', src_sr));
                                  }
                                }
                            var $katalogLab = $('<div class="flea-m">');
                            $katalogLab.append($('<div class="auto" onload="someParents()">').html(record.get('Nadpis').replace(/\*\*(.+?)\*\*/, '<p class="autoFat">$1</p>')));
                            $katalogLab.append($('<h5 class="h5">').text(record.get('Price')));
                            $katalogBox.append($katalogLab);
                        $katalogBox.attr('data-record-id', record.getId());
                        $('#computed-body').append($katalogBox);
                    }                     
                }
                if (kategorie !== null) {
                    if (airCategory == kategorie) {
                       var $katalogBox = $('<div class="flea sfv" onclick="productPage(' + "'" + record.getId() + "'" + ')">');
                       var $katalogCov = $('<div class="flea-box">');
                       $katalogBox.append($katalogCov);
                       var imgUrls = JSON.stringify(record.get('Obrazek_Hlavni'));

                       if(typeof imgUrls !== "undefined") {
                           var count = ((imgUrls.match(/,/g) || []).length);
                           for (var i = 0; i < (count/14); i++) {
                                var src_src = imgUrls.split(",")[(i*14)+1];
                                var src_sr = src_src.replace('"url":"', "").replace('"', '');
                                $katalogCov.append($('<img>').attr('src', src_sr));

                           }
                       }
                       var $katalogLab = $('<div class="flea-m">');
                       $katalogLab.append($('<div class="auto">').text(record.get('Nadpis'))); 
                       $katalogLab.append($('<h5 class="h5">').text(record.get('Price')));
                       $katalogBox.append($katalogLab);

                        $katalogBox.attr('data-record-id', record.getId());
                        $('#computed-body').append($katalogBox);
                    }

                }
                n = n+1;
            });

            fetchNextPage();
        }, function done(error) {
            console.log(error);
        });
    };

var productLoad = function() {
    var x = (window.location.hash).replace("#", "");
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'key3kOt1aJ3uyzQYX' }).base('appnCdpmVNMgcpvw8');
    base('katalog').find(x, function(err, record) {
    if (err) { console.error(err); return; }
        
     var $div = $('<div>')
     $('#computed-body').append($div);
        
     var $diver = $('<div class="rightdiver">');
     $div.append($diver);
     var imgUrls = JSON.stringify(record.get('Obrazek_Hlavni'));
     
     if(typeof imgUrls !== "undefined") {
        var count = ((imgUrls.match(/,/g) || []).length);
        for (var i = 0; i < (count/14); i++) {
            var src_src = imgUrls.split(",")[(i*14)+1];
            var src_sr = src_src.replace('"url":"', "").replace('"', '');
            var pattern = /neni_k_dis/;
            if (pattern.test(src_sr)) {
            } else {
            var $left = $('<div class="leftsider">');
            if (JSON.stringify(record.get('Obrazek_Hlavni')) == null) {
            } else {$diver.append($left);}
            $left.append($('<img class="product-image">').attr('src', src_sr));
            }
        }
         
     }
     var imgUrlsD = JSON.stringify(record.get('Obrazky_Dalsi'));
     if(typeof imgUrlsD !== "undefined") {
        var countD = ((imgUrlsD.match(/,/g) || []).length);
        for (var i = 0; i < (countD/14); i++) {
            var src_srcD = imgUrlsD.split(",")[(i*14)+1];
            var src_srD = src_srcD.replace('"url":"', "").replace('"', '');
            $left.append($('<img class="other-images" onclick="rotateGlr(this)">').attr('src', src_srD));
        }
     }
     $diver.append($('<h1>').text(record.get('Nadpis')));   
     $diver.append($('<div>').html(record.get('Popis')));
     
     var $descr = $('<div>').text(record.get('kategorie'));   
     if (record.get('Cena') !== 0) {
        $diver.append($('<div class="pricer">').text("Cena od: " + record.get('Price')));   
     }
     var $rester = $('<div class="rester">');
     $diver.append($rester);
     
     for (var u=1; u < 31; u++) {
        if (record.get('Info_' + u) !== undefined) {
            $rester.append($('<div>').append($('<p>').text(record.get('Info_' + u))));
        }
     }
     var tableUrl = JSON.stringify(record.get('Tabulka'));
     if(typeof tableUrl !== "undefined") {
        var count = ((tableUrl.match(/,/g) || []).length);
        for (var i = 0; i < (count/14); i++) {
            var tbl_src = tableUrl.split(",")[(i*14)+1];
            var tbl_sr = tbl_src.replace('"url":"', "").replace('"', '');
               /* console.log(tbl_sr + ' width:' + tableUrl.split(",")[9].split(":")[1] + ' height: ' + tableUrl.split(",")[10].split(":")[1]);*/
           // $diver.css({top: "70px"});
            $diver.append($('<img class="product-table">').attr('src', tbl_sr).css({bottom: i*120+"px"}));
        }
     }
     if (typeof(record.get('PDF')) !== "undefined") {
         var pdfRef = JSON.stringify(record.get('PDF'));
            var hrefPDF = pdfRef.substring(
            pdfRef.indexOf("https"), 
            pdfRef.indexOf("pdf")
         );
        var $btnPdf = $('<a class="pdfBtn" href="'+hrefPDF+'pdf">').text("Otevřít produktový list");
        console.log(hrefPDF);
        $diver.append($btnPdf);
     }
    });
}

var productPage = function(x) {
    window.location = "detail_prospect.html#" + x;
}

var revealSrc = function(x) {
    var z = (window.location.hash).replace("#", "");
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'key3kOt1aJ3uyzQYX' }).base('appnCdpmVNMgcpvw8');
    if (x == 'cg') {
        base('kategorie').select({
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                if(record.get('kategorie') == z) {
                    requireTable('katalog', null, record.get('id'))
                }
            });
            fetchNextPage();
        }, function done(error) {
            console.log(error);
        });
    } else if (x == 'pt') {
        base('vyrobci').select({
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                if(record.get('vyrobce') == z) {
                    requireTable('katalog', record.get('id'), null)
                }
            });
            fetchNextPage();
        }, function done(error) {
            console.log(error);
        });
    }
}

var redirectPage = function(x, y) {
    var z = (window.location.hash).replace("#", "");
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'key3kOt1aJ3uyzQYX' }).base('appnCdpmVNMgcpvw8');
    if (x == null && y !== null) {
        if (y[0] !== undefined) {
            base('kategorie').find(y[0].getAttribute('id'), function(err, record) {
            if (err) { console.error(err); return; }
                window.location = "products_cg.html#" + record.get('kategorie');
            });
        } else {
            base('kategorie').find(y.getAttribute('id'), function(err, record) {
            if (err) { console.error(err); return; }
                window.location = "products_cg.html#" + record.get('kategorie');
            });
        }     
    } else if (x !== null && y == null) {
        base('vyrobci').find(x, function(err, record) {
        if (err) { console.error(err); return; }
            window.location = "products_by.html#" + record.get('vyrobce');
        });
    } else { console.log(' Error occured. Paramter is undefined or invalid.');}
}

/*var sideFind = function(s) {
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'key3kOt1aJ3uyzQYX' }).base('appnCdpmVNMgcpvw8');
    var t = s.getAttribute('table');
    if (t == 'pt') {
        base('kategorie').find(s.getAttribute('id'), function(err, record) {
        if (err) { console.error(err); return; }
            console.log(s);
        });
    } else if (t == 'cg') {
        var n;
        if (s.firstElementChild.innerHTML !== null) {
            n = s.firstElementChild.innerHTML;
        } else if (s.innerHTML !== null) {
            n = s.innerHTML;
        }
        console.log(n);
    }
}*/

var namePage = function() {
    window.location.hash.replace("#", "");
}

var searchAir = function() {
    var inputVal = document.getElementById("myInput").value;
    window.location = "searching.html#" + inputVal;
    $('#computed-body').empty();
}

var findAir = function() {
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'key3kOt1aJ3uyzQYX' }).base('appnCdpmVNMgcpvw8');
    
    
    /*base('katalog').select({
        filterByFormula: 'OR(SEARCH("DLA", Nazev), SEARCH("DLA", Nadpis), SEARCH("INVISIBASS", Popis), SEARCH("INVISIBASS", Info_1), SEARCH("INVISIBASS", Info_2), SEARCH("INVISIBASS", Info_3), SEARCH("INVISIBASS", Info_4), SEARCH("INVISIBASS", Info_5), SEARCH("INVISIBASS", Info_6), SEARCH("INVISIBASS", Info_7), SEARCH("INVISIBASS", Info_8), SEARCH("INVISIBASS", Info_9), SEARCH("INVISIBASS", Info_10), SEARCH("INVISIBASS", Info_11), SEARCH("INVISIBASS", Info_12), SEARCH("INVISIBASS", Info_13), SEARCH("INVISIBASS", Info_14), SEARCH("INVISIBASS", Info_15), SEARCH("INVISIBASS", Info_16), SEARCH("INVISIBASS", Info_17), SEARCH("INVISIBASS", Info_18), SEARCH("INVISIBASS", Info_19), SEARCH("INVISIBASS", Info_20), SEARCH("INVISIBASS", Info_21), SEARCH("INVISIBASS", Info_22), SEARCH("INVISIBASS", Info_23), SEARCH("INVISIBASS", Info_24), SEARCH("INVISIBASS", Info_25), SEARCH("INVISIBASS", Info_26), SEARCH("INVISIBASS", Info_27), SEARCH("INVISIBASS", Info_28), SEARCH("INVISIBASS", Info_29), SEARCH("INVISIBASS", Info_30), SEARCH("INVISIBASS", Price))'    
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                console.log(record.get('Nazev'));
            });
    });*/
    
   //for (var k = 1; k < x.length; k++) {
    let x = ["INVISIBASS", "INVISIBASS", "INVISIBASS","INVISIBASS"];
    for (var k = 1; k < 3; k++) {
    base('katalog').select({
            /*filterByFormula: 'OR(SEARCH('+ x[k] +', Nazev), SEARCH('+ x[k] +', Nadpis), SEARCH('+ x[k] +', Popis), SEARCH('+ x[k] +', Info_1), SEARCH('+ x[k] +', Info_2), SEARCH('+ x[k] +', Info_3), SEARCH('+ x[k] +', Info_4), SEARCH('+ x[k] +', Info_5), SEARCH('+ x[k] +', Info_6), SEARCH('+ x[k] +', Info_7), SEARCH('+ x[k] +', Info_8), SEARCH('+ x[k] +', Info_9), SEARCH('+ x[k] +', Info_10), SEARCH('+ x[k] +', Info_11), SEARCH('+ x[k] +', Info_12), SEARCH('+ x[k] +', Info_13), SEARCH('+ x[k] +', Info_14), SEARCH('+ x[k] +', Info_15), SEARCH('+ x[k] +', Info_16), SEARCH('+ x[k] +', Info_17), SEARCH('+ x[k] +', Info_18), SEARCH('+ x[k] +', Info_19), SEARCH('+ x[k] +', Info_20), SEARCH('+ x[k] +', Info_21), SEARCH('+ x[k] +', Info_22), SEARCH('+ x[k] +', Info_23), SEARCH('+ x[k] +', Info_24), SEARCH('+ x[k] +', Info_25), SEARCH('+ x[k] +', Info_26), SEARCH('+ x[k] +', Info_27), SEARCH('+ x[k] +', Info_28), SEARCH('+ x[k] +', Info_29), SEARCH('+ x[k] +', Info_30), SEARCH('+ x[k] +', Price))'*/
        
        filterByFormula: 'SEARCH('+ 'DLA' + ', Nazev)',
                                
            
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                console.log(record.get('Nazev'));
            });
    });
       }
}

        /*base('katalog').select({
            filterByFormula: `Nazev = "${q}"`
        }).firstPage(function(err, records) {
            if (err) { console.error(err); }

            records.forEach(function(record) {
                console.log(record.get('Another Column'));

        });*/
     /*   base('katalog').select({
            sort: [
                {field: 'pozice', direction: 'asc'}
            ]
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                console.log(k);
        });
    });*/


function srchScript() {
        var array = [];
        var inputed = (window.location.hash).replace("#", "");;
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
        findAir(inputed, uniqueItems);
}