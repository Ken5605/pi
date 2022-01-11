var firstset = 3000; 'firstset= 초기설정 초로 수업시간은 3000초 쉬는시간은 600초 점심시간은 3300초임 '
const CT= new Date(); 'CurrentTime현재시간가져오기'
function repeat() {
    function calulate() {
      if (firstset > 0) {
        countdown = --firstset 
      }
      else {
        countdown = 0
      }
      var leftmin = Math.floor(countdown / 60);
      var leftsec = Math.floor(countdown % 60);
      document.getElementById('minutes').innerText = leftmin; 'leftmin값을 html파일의 minutes라는 id를 가진태그에 (innertext=)넣는다'
      document.getElementById('seconds').innerText = leftsec;
    }
  setInterval(calulate, 1000)
} 'repeat함수는 안에있는 calulate함수를 반복실행시켜주는것이고 caluate함수는 시간계산'
 '매초마다 firstset에서 1씩뺴고 이값을 countdown이라고 정의, 즉 남은 초를 뜻함 그리고 leftmin은 남은초를 60으로 나는 몫이고 leftsec는 남은 초를 60으로나누고 남은 나머지임'
  'setInterval뜻은 계속반복시키는건데 1000밀리초 즉 1초마다 calulate를 반복시킴'


function reset(){
  
  document.getElementById('minutes').innerText = 1;
  document.getElementById('seconds').innerText = 1;
} '이거는 학교에있는 시간이 아닐떄 그냥 분과 초를 1로 고정시키는것'


if ((CT.getHours()== 8 || CT.getHours()== 9|| CT.getHours()==10|| CT.getHours()== 11 )&& CT.getMinutes() ==12 ) {
    var firstset = 3000; '초기값으로 3000초설정'
    repeat()
    '오전수업타이머'
} 
else if((CT.getHours()== 9 ||CT.getHours()==10|| CT.getHours()==11) && CT.getMinutes() ==35 ) {
    var firstset = 600; '초기값으로 600초설정'
    repeat()
    '오전쉬는시간타이머'
} 
else if (CT.getHours()== 12 && CT.getMinutes() ==35 ){
    var firstset = 3300; '초기값으로 3300초설정'
    repeat()
    '점심시간타이머'
}
else if ((CT.getHours()== 13 ||CT.getHours()==14|| CT.getHours()==15) && CT.getMinutes() ==30 ){
    var firstset = 3000; '초기값으로 3000초설정'
    repeat()
    '오후수업타이머'
} 
else if ((CT.getHours()== 2 ||CT.getHours()==15||CT.getHours()== 16) && CT.getMinutes() ==53 ) {
    var firstset = 600; '초기값으로 600초설정'
    repeat()
    '오후쉬는시간타이머'
}
else {
    reset()
}'위경우들에 다 해당안되면=즉 학교의 시간이 아니면 reset함수를 실행'

