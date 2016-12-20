function hide_numbers(s){
  var result = ""
  //함수를 완성해주세요
  var s_length = s.length;
  var show_s = s.substring(s_length-4,s_length);
  var star_num = s.length-4;
  var star = ""; 
  for( var i = 0; i < star_num ; i++)
  {
     star += '*';
  }  
  //result = star+show_s; 
    result = "";

  for(var i = 0 ; i < s_length; i++){
  	if( i < s_length-4)
      result.concat("*");
    else 
      result.concat(s.charAt(i));
  }
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));