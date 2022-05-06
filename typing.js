function ready(){
  document.getElementById("btn").addEventListener('click',() =>{
    let readyTime = 3;
    document.getElementById("btn").style.visibility = "hidden";
    document.getElementById("start").innerHTML = "";
    let readyTimer = setInterval(function(){
      document.getElementById("timer").innerHTML=readyTime;
      readyTime--;
      if(readyTime < 0){
        clearInterval(readyTimer);
        gameStart();
      };
    },1000);
  });
};

function gameStart(){
  let timeLimit = 90;
  typing();
  let timeRead = timeLimit;
  let gameTimer = setInterval(function(){
    document.getElementById("timer").innerHTML = "残り時間：" + timeRead;
    timeRead--;
    if (timeRead < 0){
      finish();
      clearInterval(gameTimer);
    };
  },1000);
};

function finish(){
  document.getElementById("japanese").innerHTML = "";
  document.getElementById("start").innerHTML = "";
  document.getElementById("btn").style.visibility = "visible";
  window.alert("終了!")
};

function typing(){
  const Q = ["ishinouenimo3nenn","aaiebakoiu","berurinnokabe","uousaou","keizokuhatikaranari","saisyusyokusaki","taihusekkintyu","puroguraminguwobenkyoutyu","namamuginamagomenamatamago","ikkyuunyukon","sushi","tekkukyanpu","onigiri","gya-!","ko-hi-bureiku","yujuhudan",
              "nihonnkokukenpou","amazonsyoppingu","merukari","rakuten","yu-tyu-ba-","tanjoubiomedetou!","oninoinumanisentaku","shinrigakuwosenkosuru","hayaokihasanmonnotoku","arubaitobosyutyu","kansaikokusaikukou","nantekotta","koukiatsu","saidaikouyakusu","ra-men","tenkiyoho","shiori",
                "wareomou,yueniwareari","syonnenyo,taishiwoidake","saikokeieisekininsya","saiyuki","suisankanatoriumusuiyoeki","mikakuninhikobuttai","usotsukihadorobonohajimaridesu","nihonnosyutohatokyo","apurike-syonera-desu","modameda,kosansiyo","shitarayondemosinbunshi","uekarayondemoshinbunshi",
                "saikokyunoomotenashi","kannukokusaieigasai","syogaibutsukyoso","kyosesyuryo","kasejinsyurai","rodokijunho","kanzennensyo","yukyukyuka","hikarifaiba-","sekenkotai","soranooja","dosokai","taionke","shinhakken","shinritesuto","mitinimayou","buyuden","kamakurabakuhu","zannensyo","gohantabeta?","tengokutojigoku"];

  const Q_j = ["石の上にも3年","ああ言えばこう言う","ベルリンの壁","右往左往","継続は力なり","再就職先","台風接近中","プラグラミングを勉強中","生麦生米生卵","一球入魂","寿司","テックキャンプ","おにぎり","ぎゃー!","コーヒーブレイク","優柔不断",
                  "日本国憲法","アマゾンショッピング","メルカリ","楽天","ユーチューバー","誕生日おめでとう!","鬼の居ぬ間に洗濯","心理学を専攻する","早起きは三文の徳","アルバイト募集中","関西国際空港","なんてこった","高気圧","最大公約数","ラーメン","天気予報","詩織",
                    "我思う、ゆえに我あり","少年よ、大志を抱け","最高経営責任者","西遊記","水酸化ナトリウム水溶液","未確認飛行物体","嘘つきは泥棒の始まりです","日本の首都は東京","アプリケーションエラーです","もうダメだ,降参しよう","下から読んでも新聞紙","上から読んでも新聞紙",
                    "最高級のおもてなし","カンヌ国際映画祭","障害物競争","強制終了","火星人襲来","労働基準法","完全燃焼","有給休暇","光ファイバー","政権交代","空の王者","同窓会","体温計","新発見","心理テスト","道に迷う","武勇伝","鎌倉幕府","残念賞","ご飯食べた？","天国と地獄"];

  // 配列にある要素のうち一つを取り出す
  let Q_No = Math.floor(Math.random()* Q.length);
  let Q_i = 0;//解答初期値・現在単語はどこまであっているのか
  let Q_l = Q[Q_No].length;//取得した文字の長さ
  document.getElementById("japanese").innerHTML = Q_j[Q_No].substring(Q_i,Q_l);
  document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i,Q_l);

  window.addEventListener("keydown",(event) =>{
    const KeyCode = event.key;
      if (Q_l == Q_l - Q_i){
        document.getElementById("japanese").innerHTML = Q_j[Q_No].substring(Q_i,Q_l);
        document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i,Q_l);
      };
      if (Q[Q_No].charAt(Q_i) == KeyCode){ 
        Q_i++;
        document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i,Q_l);
        if (Q_l - Q_i === 0){ //全問正解したら

          new Audio('ok.mp3').play();

          Q_No = Math.floor(Math.random() * Q.length);
          Q_i = 0;
          Q_l = Q[Q_No].length
          document.getElementById("japanese").innerHTML = Q_j[Q_No].substring(Q_i,Q_l)
          document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i,Q_l);
        }else{
          new Audio('good.mp3').play();
        }
      };
    });
};

window.addEventListener('load',ready)