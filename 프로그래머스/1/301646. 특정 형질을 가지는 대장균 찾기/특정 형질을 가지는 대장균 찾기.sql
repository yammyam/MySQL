-- 코드를 작성해주세요
SELECT
COUNT(*) AS COUNT
FROM ECOLI_DATA WHERE (GENOTYPE & 2) = 0      -- 2번 형질 없음
  AND ((GENOTYPE & 1) != 0 OR (GENOTYPE & 4) != 0) 