function solution(dots) {
    function s(a,b,c,d){
        return (b[1]-a[1])*(d[0]-c[0]) === (d[1]-c[1])*(b[0]-a[0]);
    }
    // 교점이 있는 직선끼리는 계산에서 제외됨. 이미 교차되는순간 평행과는 관련없기때문
    // 0과1 2와3 
    if(s(dots[0],dots[1],dots[2],dots[3]))
        return 1
    // 0과2 1과3
    if(s(dots[0],dots[2],dots[1],dots[3]))
        return 1
    // 0과3 1과2
    if(s(dots[0],dots[3],dots[1],dots[2]))
        return 1
    return 0;
}