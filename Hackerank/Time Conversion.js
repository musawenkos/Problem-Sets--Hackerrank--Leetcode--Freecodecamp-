function timeConversion() {
  var s = '01:00:00PM';
  var start = s.substring(0,2);
  var mid = s.substring(2,s.length-2);
  var last = s.substring(s.length-2,s.length);
  if(last == 'AM'){
    if(start == '12') return '00' + mid;
    else return start + mid;
  }else{
    if(start == '12') return start + mid;
    else return (parseInt(start) + 12).toString() + mid;
  }
}