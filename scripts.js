// 計算階乘
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

// 計算排列
function calculatePermutation(n, r) {
    let result = 1;
    for (let i = 0; i < r; i++) {
        result *= n - i;
    }
    return result;
}

// 計算組合
function calculateCombination(n, r) {
    return calculatePermutation(n, r) / factorial(r);
}

// 驗證輸入
function isValidInput(n, r) {
    if (n < 0 || isNaN(n)) {
        alert("Invalid value for n. Please enter a non-negative integer.");
        return false;
    }
    if (r < 0 || isNaN(r)) {
        alert("Invalid value for r. Please enter a non-negative integer.");
        return false;
    }
    if (r > n) {
        alert("r cannot be greater than n.");
        return false;
    }
    return true;
}

// 計算 P(n, r)
function clickPerm() {
    const n = parseInt(document.getElementById("n").value, 10);
    const r = parseInt(document.getElementById("r").value, 10);

    if (!isValidInput(n, r)) return;

    document.getElementById("resPermutation").innerText = calculatePermutation(n, r);
}

// 計算 C(n, r)
function clickComb() {
    const n = parseInt(document.getElementById("n").value, 10);
    const r = parseInt(document.getElementById("r").value, 10);

    if (!isValidInput(n, r)) return;

    document.getElementById("resCombination").innerText = calculateCombination(n, r);
}

// 計算 n^r
function clickArra() {
    const n = parseInt(document.getElementById("n").value, 10);
    const r = parseInt(document.getElementById("r").value, 10);

    if (!isValidInput(n, r)) return;

    document.getElementById("resArrangement").innerText = Math.pow(n, r);
}

// 計算 C(r + n - 1, r)
function clickSele() {
    const n = parseInt(document.getElementById("n").value, 10);
    const r = parseInt(document.getElementById("r").value, 10);

    if (!isValidInput(n, r)) return;

    document.getElementById("resSelectrofn").innerText = calculateCombination(n + r - 1, r);
}

// 計算三角數
function computeTriangular(n) {
    return Array.from({ length: n }, (_, i) => ((i + 1) * (i + 2)) / 2);
}

// 計算諧和數
function computeHarmonic(n) {
    return Array.from({ length: n }, (_, i) => {
        let sum = 0;
        for (let j = 1; j <= i + 1; j++) {
            sum += 1 / j;
        }
        return sum.toFixed(2);
    });
}

// 計算斐波那契數列
function computeFibonacci(n) {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci.slice(0, n);
}

// 計算 Lucas 數列
function computeLucas(n) {
    const lucas = [2, 1];
    for (let i = 2; i < n; i++) {
        lucas.push(lucas[i - 1] + lucas[i - 2]);
    }
    return lucas.slice(0, n);
}

// 計算 Catalan 數
function computeCatalan(n) {
    return Array.from({ length: n }, (_, i) =>
        factorial(2 * i) / (factorial(i + 1) * factorial(i))
    );
}

// 計算 Eulerian 數列
function computeEulerian(m) {
    const eulerian = Array.from({ length: m + 1 }, () => Array(m).fill(0));

    eulerian[0][0] = 1; // 初始化邊界條件

    for (let i = 1; i <= m; i++) {
        for (let j = 0; j < i; j++) {
            eulerian[i][j] =
                (j + 1) * eulerian[i - 1][j] +
                (i - j) * (j - 1 >= 0 ? eulerian[i - 1][j - 1] : 0);
        }
    }

    return eulerian[m].slice(0, m); // 返回第 m 行的數列
}

// 顯示特殊數列結果
function displayResults() {
    const n = parseInt(document.getElementById("n").value, 10);
    if (n <= 0 || isNaN(n)) {
        alert("Please enter a valid positive integer for n.");
        return;
    }

    document.getElementById("triangularResult").innerText = computeTriangular(n).join(", ");
    document.getElementById("harmonicResult").innerText = computeHarmonic(n).join(", ");
    document.getElementById("fibonacciResult").innerText = computeFibonacci(n).join(", ");
    document.getElementById("lucasResult").innerText = computeLucas(n).join(", ");
    document.getElementById("catalanResult").innerText = computeCatalan(n).join(", ");

    const eulerianResult = computeEulerian(n);
    document.getElementById("eulerianResult").innerText = eulerianResult.join(", ");
}
