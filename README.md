Permutations and Combinations Tool (By Zoe)

描述
本專案提供了一個全面的工具，用於計算和理解各種數學概念，例如排列、組合、特殊數列以及將物體分配到容器的方式。此工具適合教育和實用目的，並包含一個互動式網頁界面來執行計算。

功能
排列與組合：
.計算  和 。
.計算帶重複的排列 。
.計算帶重複的選擇 。

特殊數列：
計算並顯示：
.三角數
.諧和數
.費波那契數列
.Lucas 數列
.Catalan 數
.Eulerian 數

將物體分配到容器：
.處理不同類型的物體和容器（可區分或不可區分）。
.包含考慮是否有空容器的計算。

響應式設計：
.能夠在各種設備上無縫運行。

文件結構
index.html: 網頁的主 HTML 文件。
scripts.js: 包含所有計算邏輯的 JavaScript 文件。
styles.css: 外部 CSS 文件，用於額外的樣式設置。

使用方法
系統需求
.支援 JavaScript 和 CSS 的現代網頁瀏覽器。

操作步驟
1.在瀏覽器中打開 index.html 文件。
2.在相應的輸入框中輸入  和  的值。
3.點擊相應按鈕進行排列、組合或其他計算。
4.點擊「特殊數列」區域下的「計算」按鈕來探索特殊數列。
5.使用彈出式窗口進行物體分配的相關計算。

函數概覽
JavaScript 函數
1.階乘計算：
-factorial(num): 計算一個數字的階乘。

2.排列與組合：
-calculatePermutation(n, r): 計算 。
-calculateCombination(n, r): 計算 。

3.輸入驗證：
-isValidInput(n, r): 驗證輸入的有效性。

4.特殊數列：

-包含 computeTriangular、computeHarmonic、computeFibonacci、computeLucas、computeCatalan、computeEulerian。

5.物體分配：

-包括 computeNm、computeStirling 和 computeCombination 等函數。

CSS 特點
1.樣式設計：
.提供現代化的外觀，具有靈活且響應式的佈局。
.通過 @media 查詢確保跨設備兼容性。

2.主題設計：
-色彩方案：深色標頭與金色點綴。
-按鈕樣式具有懸停效果。

使用範例
計算排列
1.在輸入框中輸入  和 。
2.點擊  行旁的「計算」按鈕。
3.結果將顯示在「結果」欄中。

顯示費波那契數列
1.在「特殊數列」區域設置 。
2.點擊「計算」按鈕。
3.費波那契數列將顯示在「結果」欄中。
