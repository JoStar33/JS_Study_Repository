function solution(s)
{
    let arr = [];
    //문자 s의 길이만큼.
    for(let i = 0; i < s.length; i++){
        if(arr[arr.length-1] != s[i]){
            arr.push(s[i]);
        }else{
            arr.pop();
        }
        console.log(arr);
    }
    return (arr.length > 0) ? 0:1;
}
solution("baabaa")