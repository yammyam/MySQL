function solution(participant, completion) {
    let p = participant.sort()
    let c = completion.sort()
    for(let i = 0 ; i < participant.length; i++){
        if(p[i] != c[i])
            return participant[i]
    }
    return participant[participant.length-1]
}