/* var scDiaporama={
            tab:Array(),
            init:function($imgs, delais, transition){
                var i=scDiaporama.tab.length;
                scDiaporama.tab.push({
                    $imgs:$imgs,
                    delais:delais,
                    transition:transition
                });
                window.setTimeout('scDiaporama.changement('+i+')',delais);
                return(i);
            },
            changement:function(i){
                scDiaporama.tab[i].$imgs.eq(-1).fadeout(scDiaporama.tab[i].transition, function(){
                    scDiaporama.tab[i].$imgs.parent().prepend(scDiaporama.tab[i].$imgs.eq(-1).show());
                     scDiaporama.tab[i].$imgs=$(scDiaporama.tab[i].$imgs.selector);
                     window.setTimeout('scDiaporama.changement('+i+')',scDiaporama.tab[i].delais);
                });
            }
           };
           $(document).ready(function(){
            scDiaporama.init($('#diaporama.diapoImg'), 1000,600)
           })*/