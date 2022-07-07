var a = 2;
var b = 2;
var c = 3;

// BÀi 4
// Đảm bảo là tam giác hợp lệ so sánh với diều kiện
if (a < b + c && b < a + c && c < a + b) {
    // TAm giác vuông
    if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b)
        console.log('tam giác vuông');
    // tam giac can
    else if (a == b || a == c || b == c)
        console.log('tam giac can');
    // tam giac deu
    else if (a == b && b == c)
        console.log(' tam giac deu');
}
else
    console.log(' tam giac gì đó');


// // Bai3
// tạo hàm  q
function demChanLe(n) {
    var demChan = 0;
    var demLe = 0;
    // n phải trên 3
    while (n > 0) {
        // xet chan le
        var a = n % 10;
        if (a % 2 == 0)
            demChan++;
        else
            demLe++;
        n = Math.floor(n / 10);
    }
    // Xuất thông tin
    console.log("demChan : "
        + demChan);
    console.log("demLe : "
        + demLe);

}

var n;
n = 678; var t = demChanLe(n);







// Bài 1
// Khai báo bien
var e = parseInt(prompt("Enter num")),
    f = parseInt(prompt("Enter num")),
    g = parseInt(prompt("Enter num"));

// Khi cho e min
if (e < f && e < g) {
    document.write(e);
    // So sánh f và g khi e min
    if (f < g) {
        console.log(f);
        console.log(g);
    } else {                  // ngược lại
        console.log(g);
        console.log(f);
    }
    // khi f bé nhất
} else if (f < g && f < e) {
    console.log(f);
    // khi a lớn hơn c và f min
    if (g < e) {
        console.log(g);
        console.log(e);
    } else {                  // ngược lại
        console.log(e);
        console.log(g);
    }
} else {
    console.log(g);
    if (e < f) {
        console.log(e);
        console.log(f);
    } else {
        console.log(f);
        console.log(e);
    }
}

// bài 2
// Tạo biến
var greet = 'B';
// dùng if ,else if chia trường hợp
if (greet === 'B') {
    console.log('Hi Bố');
} else if (greet === 'M') {
    console.log('Hi mẹ');
} else if (greet === 'A') {
    console.log('Hi Anh');
} else if (greet === 'E') {
    console.log('Hi EM');
} else {
    console.log('Hi stranger')
}

