# -- 코드를 작성해주세요
# # 맥스로 각 연도별 을 구해야되나 ?

# WHERE DIFFERENTIATION_DATE  BETWEEN '2019-01-31' AND'2019-
WITH maxcolony AS (
    SELECT
        YEAR(DIFFERENTIATION_DATE) AS year,
        MAX(SIZE_OF_COLONY) AS maxcolony
    FROM ECOLI_DATA
    GROUP BY YEAR(DIFFERENTIATION_DATE)
)
SELECT
    YEAR(e.DIFFERENTIATION_DATE) AS YEAR,
    (m.maxcolony - e.SIZE_OF_COLONY) AS YEAR_DEV,#대장균 편차 = 그해 가장큰대장균 크기 - 각대장균크기
    e.ID
FROM ECOLI_DATA AS e
JOIN maxcolony AS m
    ON YEAR(e.DIFFERENTIATION_DATE) = m.year
ORDER BY YEAR, YEAR_DEV;
