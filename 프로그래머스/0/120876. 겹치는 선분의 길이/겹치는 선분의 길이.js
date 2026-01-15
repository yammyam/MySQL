function solution(lines) {
    let cnt1 = 0;
    let cnt2 = 0;
    let cnt3 = 0;
    let answer = 0;
    for(let i = -100 ; i <= 100 ; i++){
        if(lines[0][0] === i){
            cnt1 = cnt1+1
        }
        if(lines[0][1] === i){
            cnt1 = cnt1-1
        }
        if(lines[1][0] === i){
            cnt2 = cnt2+1
        }
        if(lines[1][1] === i){
            cnt2 = cnt2-1
        }
        if(lines[2][0] === i){
            cnt3 = cnt3+1
        }
        if(lines[2][1] === i){
            cnt3 = cnt3-1
        }
        if(cnt1+cnt2+cnt3 >=2)
            answer++;
        
    }
    
    return answer;
}