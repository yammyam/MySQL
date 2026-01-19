function solution(numer1, denom1, numer2, denom2) {
    function common(a,b){
        return b === 0 ? a : common(b,a%b);
    }
    let up = numer1*denom2 + numer2*denom1;
    let down = denom1*denom2;
    let d = common(up,down)
    return [up/d,down/d]
}