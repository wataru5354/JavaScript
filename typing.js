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
  document.getElementById("timer").innerHTML="ここに時間が表示されます"
  document.getElementById("japanese").innerHTML = "";
  document.getElementById("start").innerHTML = "";
  document.getElementById("btn").style.visibility = "visible";
  window.alert("終了!")
};

function typing(){
  const Q = [["ishinouenimo3nenn","石の上にも3年"],
              ["aaiebakoiu","ああ言えばこう言う"],
              ["berurinnokabe","ベルリンの壁"],
              ["uousaou","右往左往"],
              ["keizokuhatikaranari","継続は力なり"],
              ["saisyusyokusaki","再就職先"],
              ["taihusekkintyu","台風接近中"],
              ["puroguraminguwobenkyoutyu","プラグラミングを勉強中"],
              ["namamuginamagomenamatamago","生麦生米生卵"],
              ["ikkyuunyukon","一球入魂"],
              ["sushi","寿司"],
              ["tekkukyanpu","テックキャンプ"],
              ["onigiri","おにぎり"],
              ["gya-!","ぎゃー!"],
              ["ko-hi-bureiku","コーヒーブレイク"],
              ["yujuhudan","優柔不断"],
              ["nihonnkokukenpou",,"日本国憲法"],
              ["amazonsyoppingu","アマゾンショッピング"],
              ["merukari","メルカリ"],
              ["rakuten","楽天"],
              ["yu-tyu-ba-","ユーチューバー"],
              ["tanjoubiomedetou!","誕生日おめでとう!"],
              ["oninoinumanisentaku","鬼の居ぬ間に洗濯"],
              ["shinrigakuwosenkosuru","心理学を専攻する"],
              ["hayaokihasanmonnotoku","早起きは三文の徳"],
              ["arubaitobosyutyu","アルバイト募集中"],
              ["kansaikokusaikukou","関西国際空港"],
              ["nantekotta","なんてこった"],
              ["koukiatsu","高気圧"],
              ["saidaikouyakusu","最大公約数"],
              ["ra-men","ラーメン"],
              ["tenkiyoho","天気予報"],
              ["shiori","詩織"],
              ["wareomou,yueniwareari","我思う、ゆえに我あり"],
              ["syonnenyo,taishiwoidake","少年よ、大志を抱け"],
              ["saikokeieisekininsya","最高経営責任者"],
              ["saiyuki","西遊記"],
              ["suisankanatoriumusuiyoeki","水酸化ナトリウム水溶液"],
              ["mikakuninhikobuttai","未確認飛行物体"],
              ["usotsukihadorobonohajimaridesu","嘘つきは泥棒の始まりです"],
              ["nihonnosyutohatokyo","日本の首都は東京"],
              ["apurike-syonera-desu","アプリケーションエラーです"],
              ["modameda,kosansiyo","もうダメだ,降参しよう"],
              ["shitarayondemosinbunshi","下から読んでも新聞紙"],
              ["uekarayondemoshinbunshi","上から読んでも新聞紙"],
              ["saikokyunoomotenashi","最高級のおもてなし"],
              ["kannukokusaieigasai","カンヌ国際映画祭"],
              ["syogaibutsukyoso","障害物競争"],
              ["kyosesyuryo","強制終了"],
              ["kasejinsyurai","火星人襲来"],
              ["rodokijunho","労働基準法"],
              ["kanzennensyo","完全燃焼"],
              ["yukyukyuka","有給休暇"],
              ["hikarifaiba-","光ファイバー"],
              ["sekenkotai","政権交代"],
              ["soranooja","空の王者"],
              ["dosokai","同窓会"],
              ["taionke","体温計"],
              ["shinhakken","新発見"],
              ["shinritesuto","心理テスト"],
              ["mitinimayou","道に迷う"],
              ["buyuden","武勇伝"],
              ["kamakurabakuhu","鎌倉幕府"],
              ["zannensyo","残念賞"],
              ["gohantabeta?","ご飯食べた？"],
              ["tengokutojigoku","天国と地獄"]
            ];

  // 配列にある要素のうち一つを取り出す
  let Q_No = Math.floor(Math.random()* Q.length);
  let Q_i = 0;//解答初期値・現在単語はどこまであっているのか
  let Q_l = Q[Q_No][0].length;//取得した文字の長さ
  document.getElementById("japanese").innerHTML = Q[Q_No][1].substring(Q_i,Q_l);
  document.getElementById("start").innerHTML = Q[Q_No][0].substring(Q_i,Q_l);

  window.addEventListener("keydown",(event) =>{
    const KeyCode = event.key;
      if (Q_l == Q_l - Q_i){
        document.getElementById("japanese").innerHTML = Q[Q_No][1].substring(Q_i,Q_l);
        document.getElementById("start").innerHTML = Q[Q_No][0].substring(Q_i,Q_l);
      };
      if (Q[Q_No][0].charAt(Q_i) == KeyCode){ 
        Q_i++;
        document.getElementById("start").innerHTML = Q[Q_No][0].substring(Q_i,Q_l);
        if (Q_l - Q_i === 0){ //全問正解したら

          new Audio('ok.mp3').play();

          Q_No = Math.floor(Math.random() * Q.length);
          Q_i = 0;
          Q_l = Q[Q_No][0].length
          document.getElementById("japanese").innerHTML = Q[Q_No][1].substring(Q_i,Q_l)
          document.getElementById("start").innerHTML = Q[Q_No][0].substring(Q_i,Q_l);
        }else{
          new Audio('good.mp3').play();
        }
      };
    });
};

window.addEventListener('load',ready)