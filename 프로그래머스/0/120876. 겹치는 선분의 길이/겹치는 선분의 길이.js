//나의 풀이
// function solution(lines) {
//     let cnt1 = 0;
//     let cnt2 = 0;
//     let cnt3 = 0;
//     let answer = 0;
//     for(let i = -100 ; i <= 100 ; i++){
//         if(lines[0][0] === i){
//             cnt1 = cnt1+1
//         }
//         if(lines[0][1] === i){
//             cnt1 = cnt1-1
//         }
//         if(lines[1][0] === i){
//             cnt2 = cnt2+1
//         }
//         if(lines[1][1] === i){
//             cnt2 = cnt2-1
//         }
//         if(lines[2][0] === i){
//             cnt3 = cnt3+1
//         }
//         if(lines[2][1] === i){
//             cnt3 = cnt3-1
//         }
//         if(cnt1+cnt2+cnt3 >=2)
//             answer++;
        
//     }
    
//     return answer;
// }
// ------------------
// **좋은풀이**
let solution = (lines) => {
    // let arr = []
    // // 배열 변환
    // lines.map((item)=>{
    //     arr.push([item[0],+1])
    //     arr.push([item[1],-1])
    // })
    let arr = lines.flatMap(item =>
        [[item[0],+1],[item[1],-1]]
    )
    let event = arr.sort((a,b) => {
        if(a[0]!==b[0])
            return a[0]-b[0];
        return a[1]-b[1];
    })
    let s = 0;
    let count = 0;
    for(let i = 0 ; i< event.length-1 ; i++){
        count += event[i][1]; // 겹쳐진 선분수 
        let current = event[i][0];
        let next = event[i+1][0];
        if(count >= 2){ //겹쳐진 선분이 2개이상이라면 길이재기
            s += next - current
        }
    }
    return s;
}