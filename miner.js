var MINER = window.MINER || {};
$ = jQuery;

Array.prototype.unique = function () {
    var o = {}, i, l = this.length, r = [];
    for (i = 0; i < l; i += 1) o[this[i]] = this[i];
    for (i in o) r.push(o[i]);
    return r;
};
 
var stemmer = function () {
    function h() { } function i() { console.log(Array.prototype.slice.call(arguments).join(" ")) } var j = { ational: "ate", tional: "tion", enci: "ence", anci: "ance", izer: "ize", bli: "ble", alli: "al", entli: "ent", eli: "e", ousli: "ous", ization: "ize", ation: "ate", ator: "ate", alism: "al", iveness: "ive", fulness: "ful", ousness: "ous", aliti: "al", iviti: "ive", biliti: "ble", logi: "log" }, k = { icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: "" }; return function (a, l) {
        var d, b, g, c, f, e; e = l ? i : h; if (3 > a.length) return a;
        g = a.substr(0, 1); "y" == g && (a = g.toUpperCase() + a.substr(1)); c = /^(.+?)(ss|i)es$/; b = /^(.+?)([^s])s$/; c.test(a) ? (a = a.replace(c, "$1$2"), e("1a", c, a)) : b.test(a) && (a = a.replace(b, "$1$2"), e("1a", b, a)); c = /^(.+?)eed$/; b = /^(.+?)(ed|ing)$/; c.test(a) ? (b = c.exec(a), c = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, c.test(b[1]) && (c = /.$/, a = a.replace(c, ""), e("1b", c, a))) : b.test(a) && (b = b.exec(a), d = b[1], b = /^([^aeiou][^aeiouy]*)?[aeiouy]/, b.test(d) && (a = d, e("1b", b, a), b = /(at|bl|iz)$/, f = /([^aeiouylsz])\1$/, d = /^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/,
        b.test(a) ? (a += "e", e("1b", b, a)) : f.test(a) ? (c = /.$/, a = a.replace(c, ""), e("1b", f, a)) : d.test(a) && (a += "e", e("1b", d, a)))); c = /^(.*[aeiouy].*)y$/; c.test(a) && (b = c.exec(a), d = b[1], a = d + "i", e("1c", c, a)); c = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/; c.test(a) && (b = c.exec(a), d = b[1], b = b[2], c = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, c.test(d) && (a = d + j[b], e("2", c, a))); c = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
        c.test(a) && (b = c.exec(a), d = b[1], b = b[2], c = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, c.test(d) && (a = d + k[b], e("3", c, a))); c = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/; b = /^(.+?)(s|t)(ion)$/; c.test(a) ? (b = c.exec(a), d = b[1], c = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, c.test(d) && (a = d, e("4", c, a))) : b.test(a) && (b = b.exec(a), d = b[1] + b[2], b = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,
        b.test(d) && (a = d, e("4", b, a))); c = /^(.+?)e$/; if (c.test(a) && (b = c.exec(a), d = b[1], c = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, b = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$/, f = /^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/, c.test(d) || b.test(d) && !f.test(d))) a = d, e("5", c, b, f, a); c = /ll$/; b = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/; c.test(a) && b.test(a) && (c = /.$/, a = a.replace(c, ""), e("5",
        c, b, a)); "y" == g && (a = g.toLowerCase() + a.substr(1)); return a
    }
}();

(function ($) {
    (function () {

        var $this = this;
        $this.abs = [];
        $this.df = new Array();
        $this.goods = new Array();
        $this.bads = new Array();
        $this.newquery = new Array();
        $this.nqpositions = new Array();
        $this.nonstem = new Array();
        $this.corte = 1;
        $this.maxtfidf = 0;
        $this.heatmapwords = 10;

        $this.stopWords = ["a","able","about","above","abst","accordance","according","accordingly","across","act","actually","added","adj","affected","affecting","affects","after","afterwards","again","against","ah","all","almost","alone","along","already","also","although","always","am","among","amongst","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","apparently","approximately","are","aren","arent","arise","around","as","aside","ask","asking","at","auth","available","away","awfully","b","back","be","became","because","become","becomes","becoming","been","before","beforehand","begin","beginning","beginnings","begins","behind","being","believe","below","beside","besides","between","beyond","biol","both","brief","briefly","but","by","c","ca","came","can","cannot","can't","cause","causes","certain","certainly","co","com","come","comes","contain","containing","contains","could","couldnt","d","date","did","didn't","different","do","does","doesn't","doing","done","don't","down","downwards","due","during","e","each","ed","edu","effect","eg","eight","eighty","either","else","elsewhere","end","ending","enough","especially","et","et-al","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","except","f","far","few","ff","fifth","first","five","fix","followed","following","follows","for","former","formerly","forth","found","four","from","further","furthermore","g","gave","get","gets","getting","give","given","gives","giving","go","goes","gone","got","gotten","h","had","happens","hardly","has","hasn't","have","haven't","having","he","hed","hence","her","here","hereafter","hereby","herein","heres","hereupon","hers","herself","hes","hi","hid","him","himself","his","hither","home","how","howbeit","however","hundred","i","id","ie","if","i'll","im","is","immediate","immediately","importance","important","in","inc","indeed","index","information","instead","into","invention","inward","is","isn't","it","itd","it'll","its","itself","i've","j","just","k","keep","keeps","kept","kg","km","know","known","knows","l","largely","last","lately","later","latter","latterly","least","less","lest","let","lets","like","liked","likely","line","little","'ll","look","looking","looks","ltd","m","made","mainly","make","makes","many","may","maybe","me","mean","means","meantime","meanwhile","merely","mg","might","million","miss","ml","more","moreover","most","mostly","mr","mrs","much","mug","must","my","myself","n","na","name","namely","nay","nd","near","nearly","necessarily","necessary","need","needs","neither","never","nevertheless","new","next","nine","ninety","no","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","now","nowhere","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","omitted","on","once","one","ones","only","onto","or","ord","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","owing","own","p","page","pages","part","particular","particularly","past","per","perhaps","placed","please","plus","poorly","possible","possibly","potentially","pp","predominantly","present","previously","primarily","probably","promptly","proud","provides","put","q","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","respectively","resulted","resulting","results","right","run","s","said","same","saw","say","saying","says","sec","section","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sent","seven","several","shall","she","shed","she'll","shes","should","shouldn't","show","showed","shown","showns","shows","significant","significantly","similar","similarly","since","six","slightly","so","some","somebody","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","still","stop","strongly","sub","substantially","successfully","such","sufficiently","suggest","sup","sure","t","take","taken","taking","tell","tends","th","than","thank","thanks","thanx","that","that'll","thats","that've","the","their","theirs","them","themselves","then","thence","there","thereafter","thereby","thered","therefore","therein","there'll","thereof","therere","theres","thereto","thereupon","there've","these","they","theyd","they'll","theyre","they've","think","this","those","thou","though","thoughh","thousand","throug","through","throughout","thru","thus","til","tip","to","together","too","took","toward","towards","tried","tries","truly","try","trying","ts","twice","two","u","un","under","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","us","use","used","useful","usefully","usefulness","uses","using","usually","v","value","various","'ve","very","via","viz","vol","vols","vs","w","want","wants","was","wasn't","way","we","wed","welcome","we'll","went","were","weren't","we've","what","whatever","what'll","whats","when","whence","whenever","where","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","while","whim","whither","who","whod","whoever","whole","who'll","whom","whomever","whos","whose","why","widely","willing","wish","with","within","without","won't","words","world","would","wouldn't","www","x","y","yes","yet","you","youd","you'll","your","youre","yours","yourself","yourselves","you've","z","zero"];

        $this.isStopWord = function(word){
            for (var i=0, len = $this.stopWords.length; i < len; i++)
                if ($this.stopWords[i] === word) return true;
            return false;
        }

        $this.step = 160;
        $this.moveby = 2;
        $this.STYLES = {
            BOXWRAPPER: '#boxWrapper{width: 100%;position: absolute;top: 0;text-align: center;font-family:Trebuchet MS; font-size: 13px}',
            BOX: '#box{width: 960px;background-color: white;height: 620px;padding-top: 20px;margin: 70px auto;text-align: center;border-radius: 6px;box-shadow: 2px 2px 12px #ddd, -2px -2px 12px #ddd;}',
            DOCSLI: '#docsBox li{display: inline-block;margin: 20px 30px auto;text-align: center;width: 100px;vertical-align: top;}',
            DOC: '.doc:hover{cursor:pointer;border: 1px solid #aaa}.doc{display: block;border-radius: 4px;background-color: white;box-shadow: 0px 2px 2px 0px #F2F2F2;color: #666;line-height: 23px;height: 120px;border: 1px solid #eee;overflow: hidden;}.doc.good{border-bottom:6px solid #7ab800}.doc.bad{border-bottom:6px solid #DC5034}',
            DOCREF: '.docref{font-size: 13px;height: 15px;width: auto;color: #777;}',
            DOCSBOX: '#docsBox{-webkit-transition: margin-left 0.8s ease-out;width: 99000px;text-align: left;height: 180px;padding: 0;margin: 0 0 0 -6px;}',
            DOCSWRAPPER: '#docsWrapper{float:left;overflow: hidden;margin: 20px 10px;width:781px;padding: 0;border-bottom: 1px solid #eee;}',
            WORDS: '.queryWord{padding: 3px;color: white;float:left;border-radius: 5px;margin-right: 10px;display: inline-block;margin-bottom: 3px;}',
            BUTTONS: '.btn{padding: 60px 27px;border-radius: 6px;margin: 50px 9px 0px;color: white;float:left;box-shadow: 1px 1px 0px 0px #ccc;}.btn:active{box-shadow: 0 0}',
            FWORDS: '.fwords{display:none}',
            QUERIESBOX: '#queriesBox{height:140px;box-shadow: 0px 3px 6px -1px #f2f2f2}',
            TITLE: '#title{height: 30px;font-size: 22px;margin-bottom: 10px;text-decoration: underline;font-style: italic;}',
            QUERYBOX: '#queryBox{height:33px;}',
            SUGGBOX: '#suggBox{clear:both;height: 54px;overflow: hidden;}',
            OPTBOX: '#optionsBox{margin-top: 12px;}',
            LABELS: '.label{margin-bottom: 10px;color: white;padding: 3px;float: left;margin-right: 20px;width: 105px;text-align: left;}',
            HEATMAP: '.heatmapWordiv{padding-right: 10px;height:20px}#heatmapWords{text-align:right;width: 90px;position: absolute;background-color: white;height: 200px;z-index: 5;}#heatmapBox{height:0;clear: both;width: 871px;margin: 20px 10px 20px 0px;overflow: hidden;}#heatmapTable{clear:both;-webkit-transition: margin-left 0.8s ease-out;margin-left: 90px;}.heatcell{color:white;opacity:0;width:160px;height:20px}',
            COLORS: '.yellow{background-color: #F2AF00}.orange{background-color: #EE6411}.grey{background-color: #aaa}.green{background-color: #7ab800;}.green_stroke { padding: 30px 0px;border: 2px solid #7ab800;}.red {background-color: #DC5034;}.red_stroke {padding: 30px 0px;border: 2px solid #DC5034;}.blue {background-color: #0085c3;}.blue_stroke {padding: 30px 0px;border: 2px solid #0085c3;}.navyblue {background-color: #003758;}'
        };

        $this.CONTROLS = {
            next: $('<a id="prevBtn" class="btn blue">></a>'),
            prev: $('<a id="nextBtn" class="btn blue"><</a>')
        }

        $this.CONTROLS.next.bind('click', function () {
            $('#docsBox').css('margin-left', parseInt($('#docsBox').css('margin-left'), 10) - ($this.moveby * $this.step) + 'px');
            $('#heatmapTable').css('margin-left', parseInt($('#heatmapTable').css('margin-left'), 10) - ($this.moveby * $this.step) + 'px');
        });
        $this.CONTROLS.prev.bind('click', function () {
            $('#docsBox').css('margin-left', parseInt($('#docsBox').css('margin-left'), 10) + ($this.moveby * $this.step) + 'px');
            $('#heatmapTable').css('margin-left', parseInt($('#heatmapTable').css('margin-left'), 10) + ($this.moveby * $this.step) + 'px');
        });

        $this.init = function () {
            //include CSSs:
            var styles = document.createElement('style');

            for (var style in $this.STYLES) {
                styles.innerHTML += $this.STYLES[style];
            }
            $("head").append(styles);

            //blur page
            $('#LayoutWrapper').css('opacity', 0.2);

            //get abstracts
            $this.getAbs();
            //count words
            $this.countWords();
            $this.TfIdf();
            //prepare box layout elements
            $this.getQuery();
            $this.createBox();

            console.warn("done");
        }

        $this.getAbs = function () {
            $(".abstract").each(function (key) {
                var words = [];
                $this.abs[key] = $(this);
                $this.abs[key].id = 'doc'+key;
                $this.abs[key].title = $($this.abs[key]).parents('.detail').find('h3').text().trim();
                $this.abs[key].txt = $this.abs[key].text().replace(/^[\s]/g, '').replace(/\s+/g, ' ').toLowerCase();
                var txt = $this.abs[key].txt;

                $this.stopWords.each(function(value){
                    var word = '\\b'+value+'\\b';
                    var regex = new RegExp(word,'ig');
                    txt = txt.replace(regex,'&&&');
                })
                words = txt.split(/\s|\→|\*|\"|\,|\.|\;|-|»|\/|\\|\(|\)|:|'|'s|&&&/ig)
                        .filter(function (value) { 
                        value = value.trim();
                            return value !== "" && value !== null && !$this.isStopWord(value);
                        });
                
                for (var wordkey in words)
                    if (words.hasOwnProperty(wordkey)){

                        var splitted = words[wordkey].split(' ');
                        var finalw = '';
                        splitted.each(function(w){
                            var stemmed = stemmer(w);
                            finalw += ' '+stemmed;
                            $this.nonstem[stemmed] = w;
                        });
                        words[wordkey] = finalw.trim();
                    }
                
                words.each(function(word,key){
                    words[key] = word.trim();
                });

                $this.abs[key].words = words;
                $this.abs[key].uniqueWords = words.unique().sort();
            });
        }

        $this.normalizeTF = function(){
            return;
            $this.abs.each(function(abs){
                var max = abs.tf[0][1]; //ordenado anteriormente
                abs.tf.each(function(word){
                    var f = word[1];
                    word[1] = f/max;
                });
            });
        }

        $this.countWords = function (coll) {

            var collection = new Array();

            if(coll){
                coll.each(function(key){
                    collection.push($this.abs[key]);
                })
            }else collection = $this.abs;

            collection.each(function (abs) {
                
                var words = abs.words;
                var positions = new Array();
                var word_counts = new Array();

                for (var i = 0; i < words.length; i++) {
                    
                    var word = " " + words[i];
                    if (!word) continue;
                    if (typeof positions[word] == 'undefined') {
                        positions[word] = word_counts.length;
                        word_counts.push([word, 1]);
                        //($this.df[word]) ? $this.df[word]++ : $this.df[word] = 1;
                        if(!$this.df[word]) $this.df[word] = new Array();
                        $this.df[word].push(abs.id);
                    } else word_counts[positions[word]][1]++;

                }
                // Put most frequent words at the beginning.
                word_counts.sort(function (a, b) { return b[1] - a[1] })
                abs.tf = word_counts;

            });

        }

        $this.TfIdf = function () {
            
            $this.normalizeTF();

            //var positions = new Array();
            $($this.abs).each(function (key, value) {
                value.tfidf = new Array();
                value.tfidfpositions = new Array();
                for (var wordkey in value.tf) {
                    if (value.tf.hasOwnProperty(wordkey) && value.tf[wordkey]) {
                        var word =  value.tf[wordkey][0];
                        var termf = value.tf[wordkey][1];
                        var df = MINER.df[word].length;
                            
                        if (typeof value.tfidf[wordkey] == 'undefined'){
                            var tfidf = Math.log((termf)*(MINER.abs.length/df));
                            if(tfidf > $this.maxtfidf) $this.maxtfidf = tfidf;
                            value.tfidf[wordkey] = [word, tfidf];
                        }
                    }
                }
                value.tfidf.sort(function (a, b) { return b[1] - a[1] });
                value.tfidf.each(function(word, key){
                    value.tfidfpositions[word[0]] = key;    
                })
                
            });
        }

        $this.createBox = function () {
            $this.box = document.createElement('div');
            $this.box.id = 'box';
            var wrapper = document.createElement('div');
            wrapper.id = 'boxWrapper';

            //box inner-html
            //queryBox
            var queryBox = document.createElement('div');
            queryBox.id = 'queryBox';
            //suggBox
            var suggBox = document.createElement('div');
            suggBox.id = 'suggBox';
            var termsBox = document.createElement('div');
            termsBox.id = 'termsBox';
            var queriesBox = document.createElement('div');
            queriesBox.id = 'queriesBox';
            var title = document.createElement('div');
            title.id = 'title';
            title.innerHTML = 'qub';
            $this.box.appendChild(title);

            var optionsBox = document.createElement('div');
            optionsBox.id = 'optionsBox';
            var labelOpt = document.createElement('span');
            labelOpt.id = 'optLabel';
            labelOpt.className = 'grey label';
            labelOpt.innerHTML = 'Options';
            optionsBox.appendChild(labelOpt);

            queriesBox.appendChild(queryBox);
            queriesBox.appendChild(suggBox);
            queriesBox.appendChild(optionsBox);

            var labelQ = document.createElement('span');
            labelQ.id = 'queryLabel';
            labelQ.className = 'grey label';
            labelQ.innerHTML = '<i>String</i> de busca';
            queryBox.appendChild(labelQ);

            var labelSQ = document.createElement('span');
            labelSQ.id = 'queryLabel';
            labelSQ.className = 'grey label';
            labelSQ.innerHTML = 'Termos sugeridos';
            suggBox.appendChild(labelSQ);
            suggBox.appendChild(termsBox);

            $(MINER.query).each(function (key, value) {
                var newSpan = document.createElement('span');
                newSpan.id = 'word' + key;
                newSpan.className = 'queryWord blue';
                newSpan.innerHTML = value;
                queryBox.appendChild(newSpan);
            });

            $this.box.appendChild(queriesBox);

            //docsBox
            var docsWrapper = document.createElement('div');
            docsWrapper.id = 'docsWrapper';

            var docsBox = document.createElement('ul');
            docsBox.id = 'docsBox';
            docsWrapper.appendChild(docsBox);

            $(MINER.abs).each(function (key, value) {
                var newLi = document.createElement('li');

                var newId = document.createElement('div');
                newId.className = 'docref';
                newId.innerHTML = '-'+(key+1)+'-';

                var newSpan = document.createElement('span');
                newSpan.id = 'doc' + key;
                newSpan.className = 'doc';
                newSpan.innerHTML = value.title;
                $(newSpan).bind('click',function(){ $this.flipDoc(newSpan); });
                
                var newFWordsSpan = document.createElement('span');
                newFWordsSpan.id = 'fwords' + key;
                newFWordsSpan.className = 'fwords';

                for (var i = 0; i < 5; i++) {
                    newFWordsSpan.innerHTML += value.tfidf[i][0].trim()+'</br>';
                }
                
                var newWordList = document.createElement('div');
                newWordList.id = 'wl' + key;

                newLi.appendChild(newId);
                newLi.appendChild(newSpan);
                newLi.appendChild(newFWordsSpan);
                docsBox.appendChild(newLi);
            });

            //carouselBox
            var carouselBox = document.createElement('div');
            carouselBox.id = 'carouselBox';
            $(carouselBox).append($this.CONTROLS.prev);
            carouselBox.appendChild(docsWrapper);
            $(carouselBox).append($this.CONTROLS.next);

            $this.box.appendChild(carouselBox);

            //heatmap
            var heatmapBox = document.createElement('div');
            heatmapBox.id = 'heatmapBox';
            heatmapBox.className = 'heatmapBox';
            $this.box.appendChild(heatmapBox);

            var heatmapWords = document.createElement('div');
            heatmapWords.id = 'heatmapWords';
            for(var i=0;i<$this.heatmapwords;i++){
                var wordiv = document.createElement('div');
                wordiv.className = 'heatmapWordiv';
                wordiv.id = 'heatmapWord-'+i;
                heatmapWords.appendChild(wordiv);
            }
            heatmapBox.appendChild(heatmapWords);

            var heatmapTable = document.createElement('table');
            heatmapTable.id = 'heatmapTable';
            heatmapTable.className = 'yellow';
            heatmapTable.style.width = $this.abs.length*160+'px';

            for(var i=0; i<$this.heatmapwords; i++){
                var tr = document.createElement('tr');
                $this.abs.each(function(v, k){
                    var td = document.createElement('td');
                    td.id = 'heatcell'+i+'-'+k;
                    td.className = 'heatcell red';
                    tr.appendChild(td);
                });
                heatmapTable.appendChild(tr);
            }            
            heatmapBox.appendChild(heatmapTable);

            $(wrapper).append($this.box);
            $('body').append(wrapper);
        }

        $this.colorizeHeatmap = function(){
            $this.newquery.each(function(word,wkey){
                if(word[1]/$this.goods.length < $this.corte || wkey >= $this.heatmapwords){
                    console.warn(wkey+" - "+$this.heatmapwords)
                    $("#heatmapBox").css('height',(wkey*20)+'px');
                    for(var y=wkey;y<=$this.heatmapwords;y++){
                        console.log($("#heatmapWord-"+y));
                        $("#heatmapWord-"+y).html('');
                    }
                    throw $break;

                }
                //if(wkey>=10) return;
                $("#heatmapWord-"+wkey).html($this.nonstem[word[0].trim()]);

                $this.abs.each(function(abs,akey){
                    $('#heatcell'+wkey+'-'+akey).css('opacity',0);

                    var pos = abs.tfidfpositions[word[0]];
                    if(typeof pos == 'undefined') return; 
                    var wtfidf = abs.tfidf[pos][1];
                    if(wtfidf <= 0) return;
                    var relevancy = (wtfidf+1)/($this.maxtfidf+1);
                    //opacity calc
                    //var rlog = Math.log(relevancy,2)*-1;//Math.log(relevancy)*-1;
                    //var irlog = 1/rlog;
                    var fopac = relevancy.toFixed(2);///Math.log($this.maxtfidf,2);
                    $('#heatcell'+wkey+'-'+akey).css('opacity',fopac)
                                                .html(wtfidf.toFixed(2));

                    
                });
            });
        }

        $this.getQuery = function () {
            var queryText = window.location.search.parseQuery('&')['queryText'] || $('.search-term').text().trim();
            $this.query = queryText.split('+');
        }

        $this.flipDoc = function(docn) {
            if($(docn).hasClass('bad')){
                $(docn).removeClass('bad');
                $this.bads.splice($this.bads.indexOf(docn.id), 1);
                $this.newQ(docn.id,0);
            }else if(!$(docn).hasClass('good')){
                $(docn).addClass('good');
                $this.goods.push(docn.id);
                $this.newQ(docn.id,1);
            }else{
                $(docn).removeClass('good');
                $(docn).addClass('bad');
                $this.goods.splice($this.goods.indexOf(docn.id), 1);
                $this.bads.push(docn.id);
                $this.newQ(docn.id,-1);
            }
            //$this.newQ();
        }

        $this.newQ = function(docid, state){
            var absid = docid.replace('doc','');
            var tfidfs = $this.abs[absid].tfidf;

            for(var i=0;i<tfidfs.length-1;i++){
                if (typeof $this.nqpositions[tfidfs[i][0]] == 'undefined') {
                    $this.nqpositions[tfidfs[i][0]] = $this.newquery.length;
                    $this.newquery.push(new Array(tfidfs[i][0],tfidfs[i][1]));
                } else {
                    var modifier = 0;
                    switch(state){
                        default:
                        case 0:
                        case 1:
                            modifier = tfidfs[i][1];
                            break;
                        case -1:
                            modifier = (-2*tfidfs[i][1]);
                            break;
                    }
                    $this.newquery[$this.nqpositions[tfidfs[i][0]]][1] += modifier;
                }
            }

            $this.newquery.sort(function (a, b) { return b[1] - a[1] });
            $this.newquery.each(function(val,key){
                $this.nqpositions[val[0]] = key;
            });
            $this.updateNQ();
            $this.colorizeHeatmap();
        }
        $this.updateCorte = function(ncorte){
            $this.corte = ncorte;
            $this.updateNQ();
            $this.colorizeHeatmap();
        }

        $this.updateNQ = function(){
            $("#termsBox").html('');
            if(!$this.newquery.length) return;
            if(!$this.goods.length) return;

            $this.newquery.each(function(wobj, key){
                
                var wordspan = document.createElement('span');
                var splitted = wobj[0].trim().split(' ');
                var finalword = '';
                splitted.each(function(w){
                    finalword += ' '+$this.nonstem[w];
                });
                var finaltfidf = wobj[1]/$this.goods.length;
                //var finaltfidf = wobj[1];//wobj[1]/$this.df[wobj[0]] : wobj[1];
                if(finaltfidf < $this.corte) return;

                wordspan.innerHTML = finalword.trim();//$this.newquery[i][0].trim();//$this.nonstem[$this.newquery[i][0].trim()];
                wordspan.innerHTML += ' ('+finaltfidf.toFixed(2)+')';
                wordspan.className = 'queryWord green';
                $("#termsBox").append(wordspan);
            });
            
        }

        this.init();

    }).call(MINER);
})(jQuery);
