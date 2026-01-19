function solution(babbling) {
  const reg = /^(aya|ye|woo|ma)+$/;
  return babbling.filter(word => reg.test(word)).length;
}