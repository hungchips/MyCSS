// JS Đẳng Cấp by Hưng Nguyễn IT Dev phiên bản 3.9

$.fn.titlePage = (namepage) => {
    nametitle = ''
    if (namepage == 'Default' || namepage == "/") nametitle = "Trang chủ"
    if (namepage == 'QuanLySanPham') nametitle = "Quản lý Sản phẩm"
    if (namepage == 'NhapHang') nametitle = "Hóa đơn nhập"
    if (namepage == 'XuatHang') nametitle = "Hóa đơn xuất"
    if (namepage == 'QuanLyTaiKhoan') nametitle = "Quản lý Tài Khoản"
    if (namepage == 'QuanLyKhachHang') nametitle = "Quản lý Khách hàng"
    if (namepage == 'XemDonDatHang') nametitle = "Quản lý Đơn hàng"
    if (namepage == 'DatMuaSanPham') nametitle = "Đặt mua Sản phẩm"
    if (nametitle == '') nametitle = "Hưng Nguyễn IT Dev"
    $(document).prop('title', nametitle)
}
$(document).on('DOMSubtreeModified', $('div[id^="RELOAD"]'), () => {
    $("center").each(() => {
        if ($(this).html() == '<a href="http://somee.com">Web hosting by Somee.com</a>') {
            $(this).next().remove();
            $(this).next().next().remove();
            $(this).next().next().next().remove();
            $(this).remove();
            return false;
        }
    })
})

$.fn.kiemTraNull = (stringcankiemtra) => {
    if (stringcankiemtra == '') return false;
    return true;
}

function layFullDateBayGio() {
    let homnay = new Date()
    homnay = homnay.getUTCFullYear() + '-' +
        ('00' + (homnay.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + homnay.getUTCDate()).slice(-2) + ' ' +
        ('00' + homnay.getUTCHours()).slice(-2) + ':' +
        ('00' + homnay.getUTCMinutes()).slice(-2) + ':' +
        ('00' + homnay.getUTCSeconds()).slice(-2)
    return homnay
}

function chuyenDateSangSQLServer(date) {
    let homnay = date
    homnay = homnay.getUTCFullYear() + '-' +
        ('00' + (homnay.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + homnay.getUTCDate()).slice(-2) + ' ' +
        ('00' + homnay.getUTCHours()).slice(-2) + ':' +
        ('00' + homnay.getUTCMinutes()).slice(-2) + ':' +
        ('00' + homnay.getUTCSeconds()).slice(-2)
    return homnay
}

function xoaThoiGianDate(date) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    )
}

function bodyClick() {
    document.addEventListener("click", () => {
        alert('xxxx');
    })
}

function Random_Math() {
    a = Math.floor(Math.random() * 10) + 1; //Ngẫu nhiên từ 1 -> 10
    document.write(a);
}

function MoNoiDung(id, Screen) {
    x = document.getElementById(id); y = document.getElementById(Screen);
    if (x.style.display == "block") x.style.display = y.style.display = "none"
    else x.style.display = y.style.display = "block"
}

function menuMobile(id, Screen) {
    x = document.getElementById(id); y = document.getElementById(Screen);
    if (x.style.display == "inline-flex") x.style.display = y.style.display = "none"
    else { x.style.display = "inline-flex"; y.style.display = "block" }
}

function Screen(id, Screen) {
    x = document.getElementById(id); y = document.getElementById(Screen);
    window.onclick = (z) => { if (z.target == y) y.style.display = x.style.display = "none" }
}

//menuHide Đẳng Cấp S phiên bản 102 by Đẳng Cấp Hưng Nguyễn IT Dev
function menuDangCapS(idscroll, idthanhdieuhuong) {
    vitri = window.pageYOffset || document.documentElement.scrollTop
    window.addEventListener("scroll", () => {
        vitriscroll = window.pageYOffset || document.documentElement.scrollTop
        if (vitriscroll > vitri) {//Dưới
            if (window.scrollY > ($('.DauTrang').height() + $('.TieuDeDauTrang').height()) || document.documentElement.scrollTop > ($('.TieuDeDauTrang').height())) {
                document.getElementById(idscroll).style.position = "unset"
                if (document.getElementById('chotDau').offsetWidth >= 1024) document.getElementById(idthanhdieuhuong).style.position = "relative"
                else document.getElementById(idthanhdieuhuong).style.position = "absolute"
            }
        } else {//Trên
            if (window.scrollY > ($('.TieuDeDauTrang').height()) || document.documentElement.scrollTop > ($('.TieuDeDauTrang').height())) {
                document.getElementById(idscroll).style.position = document.getElementById(idthanhdieuhuong).style.position = "fixed"
                document.getElementById(idscroll).style.left = document.getElementById(idscroll).style.top = 0
                document.getElementById(idthanhdieuhuong).style.left = document.getElementById(idthanhdieuhuong).style.top = 0
                document.getElementById(idthanhdieuhuong).style.top = $('.MenuCapS').height() + 'px'
            } else {
                document.getElementById(idscroll).style.position = "unset"
                if (document.getElementById('chotDau').offsetWidth >= 1024) document.getElementById(idthanhdieuhuong).style.position = "relative"
                else document.getElementById(idthanhdieuhuong).style.position = "absolute"
                document.getElementById(idthanhdieuhuong).style.left = document.getElementById(idthanhdieuhuong).style.top = ""
            }
        }
        vitri = vitriscroll <= 0 ? 0 : vitriscroll
    }, false);
}

function KhiBoi() {
    laynutboilen = document.getElementById("IDBoiLen")
    window.onscroll = () => { scrollFunction() }
    function scrollFunction() {
        if (window.scrollY >= 789 || document.documentElement.scrollTop >= 789) laynutboilen.style.display = "block"
        else laynutboilen.style.display = "none"
    }
}

function BoiLen() {
    //document.location.href="#MENU"
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function boiXuong() {
    scrollingElement = (document.scrollingElement || document.body)
    scrollingElement.scrollTop = scrollingElement.scrollHeight
}

function ClickView(id, Screen, Close, Closed) {
    MoNoiDung(id, Screen)
    x = document.getElementById(Close); y = document.getElementById(Closed)
    y.style.display = "none"; x.style.display = "none"
}

function ClickClose(Close, Closed) {
    x = document.getElementById(Close); y = document.getElementById(Closed)
    y.style.display = "none"; x.style.display = "none"
}

function kiemTraOnLoad(fullchuoi) {
    if (layGiaTriCookie(fullchuoi) == 1) {
        $('#DOINEN').attr('class', 'fas fa-lightbulb').css('color', 'rgb(255,152,0)')
        document.getElementById('thantrang').style.backgroundColor = "#696969";
        document.getElementById('thantrang').style.color = "black";
    } else {
        $('#DOINEN').attr('class', 'far fa-lightbulb').css('color', 'black')
        document.getElementById('thantrang').style.backgroundColor = "#282c34";
        document.getElementById('thantrang').style.color = "#8eb2bf";
    }
}

function kiemTraCookies(fullchuoi) {
    if (document.cookie.indexOf(fullchuoi) == -1) taoCookies(0)
    kiemTraOnLoad(fullchuoi)
}

function ajaxGuiYeuCau(id, url) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(id).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function jsLayTen(id) {
    return layten = document.getElementById(id).value;
}

function kiemTra(chieudai, idIner) {
    dem = 0;
    for (i = 1; i <= chieudai; ++i) {
        if (!document.querySelector("input[name='cau" + i + "']:checked")) alert("Bạn chưa chọn đáp án câu " + i + "!\nVui lòng chọn đáp án và thực hiện lại!");
        if (document.querySelector("input[name='cau" + i + "']:checked").value == "ok") {
            document.getElementById("ok" + i).parentElement.style.backgroundColor = "Green";
            document.getElementById("ok" + i).parentElement.style.color = "White";
            ++dem;
        }
        else {
            document.querySelector("input[name='cau" + i + "']:checked").parentElement.style.backgroundColor = "#bc76d8";
            document.querySelector("input[name='cau" + i + "']:checked").parentElement.style.color = "White";
            document.getElementById("ok" + i).parentElement.style.backgroundColor = "Green";
            document.getElementById("ok" + i).parentElement.style.color = "White";
        }
    }
    diem = 0;
    if (dem == chieudai) diem = 10;
    else diem = (10 / chieudai) * dem;
    document.getElementById(idIner).insertAdjacentHTML("afterend", "<p style='color:#fa8751;margin:0.2em;font-size:21px;font-weight:bold'>" + diem.toFixed(2) + " Điểm!</p>" + "<p style='color:white;font-size:18px'>Bạn trả lời đúng " + dem + "/" + chieudai + " câu.<br>Cuộn lên trên để xem lại đáp án<br>Hoặc tải lại trang để làm lại!</p>");
}

function lamMoiTrang() {
    window.location.href = window.location.href;
}

function dangODay(chieudai, idhientai) {
    if (idhientai == chieudai) {
        for (i = 1; i < idhientai; ++i) {
            if (document.getElementById("P" + i).style.color != "white") document.getElementById("P" + i).style.color = "white";
        }
    } else if (idhientai < chieudai) {
        for (i = 1; i < idhientai; ++i) {
            if (document.getElementById("P" + i).style.color != "white") document.getElementById("P" + i).style.color = "white";
        }
        for (i = idhientai + 1; i <= chieudai; ++i) {
            if (document.getElementById("P" + i).style.color != "white") document.getElementById("P" + i).style.color = "white";
        }
    }
    document.getElementById("P" + idhientai).style.color = "#fa8751";
}

function dongHoDemNguoc(idhienthi, idketthuc, ngay, thang, nam) {
    // Khởi tạo thời gian đếm ngược ở đây
    thoigiandemnguoc = new Date(nam, thang - 1, ngay).getTime();
    x = setInterval(() => {
        // Lấy thời gian bây giờ
        baygio = new Date().getTime();
        // Tìm khoảng cách giữa bây giờ và thời gian đếm ngược
        khoangcach = thoigiandemnguoc - baygio;
        // Lấy giờ phút giây để hiển thị
        layngay = Math.floor(khoangcach / (1000 * 60 * 60 * 24));
        laygio = Math.floor((khoangcach % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        layphut = Math.floor((khoangcach % (1000 * 60 * 60)) / (1000 * 60));
        laygiay = Math.floor((khoangcach % (1000 * 60)) / 1000);
        // Hiển thị kết quả trong phần tử id
        document.getElementById(idhienthi).innerHTML = "<p style='color:#8fd15b;display:inline'>" + layngay + " ngày " + laygio + " giờ " + layphut + " phút " + laygiay + " giây!</p>";

        // Khi quá trình đếm ngược kết thúc, làm gì đó ở đây Okay?
        if (khoangcach < 0) {
            clearInterval(x);
            document.getElementById(idketthuc).style.display = "none";
        }
    }, 1000);
}

function copyText(phantu) {
    vanbanrac = document.createElement("textarea")
    vanbanrac.value = phantu.textContent
    document.body.appendChild(vanbanrac)
    vanbanrac.select()
    document.execCommand("copy")
    document.body.removeChild(vanbanrac)
    vanbanrac.remove()
    thongbao = document.createElement("p"); thongbao.textContent = "Đã copy!"; thongbao.className = "copySuccess"
    phantu.appendChild(thongbao)
    thongbao.style.display = "block"
    check = setInterval(() => {
        thongbao.style.display = "none"
        phantu.removeChild(thongbao)
        thongbao.remove()
        clearInterval(check)
        // .catch(error => {})
    }, 1402)
}

function oBoxScreen() {
    document.getElementById("boxScreen").style.display = document.getElementById("XScreen").style.display = document.getElementById("traiScreen").style.display = document.getElementById("phaiScreen").style.display = "block"
}
function cBoxScreen() {
    document.getElementById("boxScreen").style.display = document.getElementById("XScreen").style.display = document.getElementById("traiScreen").style.display = document.getElementById("phaiScreen").style.display = "none"
}
function cEscNutX() {
    window.addEventListener("keydown", (nut) => {
        if (nut.key == "Escape") {
            if (document.getElementById("boxScreen").style.display == "block")
                document.getElementById("boxScreen").style.display = document.getElementById("XScreen").style.display = document.getElementById("traiScreen").style.display = document.getElementById("phaiScreen").style.display = "none"
        }
    })
}