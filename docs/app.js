var btn = document.getElementById('btn');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var mousex, mousey; // 直前のマウス座標用
var state = false; // 現在クリックしているかどうか
var color = 0; // 線のカラー

// スクロールバーが表示されるので少し小さく表示
canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 2;

// 線の両端に丸みを付けてスムーズな描画にする
ctx.lineCap = 'round';


canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', mouseUp);
btn.addEventListener('click', clearBtn);


// クリアボタンをクリックしたら描画内容を消す
function clearBtn() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function mouseDown(e) {
  // クリックした座標位置を取得
  mousex = e.clientX;
  mousey = e.clientY;
  state = true; // クリック状態をON
}
function mouseUp() {
  state = false; // クリック状態をOFF
}

function mouseMove(e) {
  if(!state) return; // クリックされてなかったら実行しない
 
  // 線の幅(太さ)をランダムに変化させる
  var w = Math.random() * 51;
  
  ctx.lineWidth = w;

  // 線のカラーを1ずつ変化させる
  color++;
  ctx.strokeStyle = 'hsl('+color+', 100%, 50%)';
  ctx.beginPath();
  ctx.moveTo(mousex, mousey); // 線の書き始めの位置
  ctx.lineTo(e.clientX, e.clientY); // 書き始めの位置からマウスの位置まで線を引く
  ctx.stroke();
  
  // 直前のマウス座標を更新
  mousex = e.clientX;
  mousey = e.clientY;
}
