

// // Le dùng để khai báo biến và thay thế một số nhược điểm của var

// // Let sẽ hiểu là 2 biến khác nhau nên consolog nó ra là 5 chứ không phải là 10 giống như khai báo bằng var
// // Let dùng để hạn chế vấn về việc đặt trùng biến 
let isNum = 5;
if(true){
    let isNum = 10;
}
 console.log(isNum);
// // conts hằng số là số  không đổi - conts = 5 nên không thể gán lại giá trị cho nó
// // không gán được object khác nhưng có thể gán lại thành phần bên trong object 
const object ={HoTen:'nguyen van a ',Tuoi:19};
object.HoTen ='nguyen van c'; // nhưng chấp nhận giá trị thuộc tính của nó
object.Tuoi=20; 

object ={HoTen:'nguyen van b ',Tuoi:18}; // không được gán object lại 

// //Hoisting var let const /- ngăn chặn mình 

a = 10;
console.log = a;
var a =20;
// // sử dụng trước khi khai báo 

// // let va const ngăn chặn việc sử dụng trước khi khai báo
a = 10;
console.log = a;
let a =20;
// // sẽ báo lỗi , vì vậy lúc run console log bị lỗi vì chưa có giá trị


// function scope
(function () {
	var a = 0;
	console.log(a);

// })
// phạm vi biến bên trong 1 hàm, bên ngoài ko sử dụng được biến bên trong nhưng bên trong lại sử dụng được bên ngoài
// nhưng lại lấy biến từ bên ngoài sử dụng 
/**
 * làm sao cho mỗi nút button đề có onlick khác nhau 
 */
var  mangButton = document.getElementsByTagName('button');
for (var i = 0 ; i < 3; i++){ 
    mangButton[i].onclick = function () {
        alert(i);
    };
}
// kết quả tất cả bằng 3 , nhưng chuyển let thì show ra lần lượt là 0, 1, 2
//lí do vì let ko bị gán trùng 
// var sử dụng trước khi khai báo  khi i = 3 thi var i =3 , còn let thì khai báo rùi mới được sử dụng
var  mangButton = document.getElementsByTagName("button");
for (let i = 0 ; i < 3; i++){ 
    mangButton[i].onclick = function () {
        alert(i);
    };
}

// var i = 0  - function mangButton[i].onclick   () - i = 3 // i đã mang giá trị 3 
// Arrow function : xử lý tốt trong hướng đối tượng
//window.hoten="abc122";

let hocvien = {
    hoten: 'nguyen van a',
    lop: 'fontend xxx',
    laythongtinhocvien: function() {
        function hienthongtin(){
            console.log('Ho ten: ' +this.hoten + 'Lop : ' + this.lop);
        }
        hienthongtin(); // this này trỏ đến windown
    }
    // hàm này không tin ra giá trị

}

 hocvien.laythongtinhocvien();
 
 //sau khi sử dụng arrow function (hiểu được ngữ cảnh trọ this là đối tượng là học viên)
 // sử dụng trong việc hàm lồng hàm
 let hocvien = {
    hoten: 'nguyen van a',
    lop: 'fontend xxx',
    laythongtinhocvien: function() {
        let hienthongtin = () => {
            console.log('Ho ten: ' +this.hoten + 'Lop : ' + this.lop);
        }
        hienthongtin(); // this này trỏ đến object 
    }
    // hàm này lấy được giá trị 
 }
 //  RESPARAMETER (hàm chồng )
 javascript ko co khái niệm hàm chồng 
RESPARAMETER (mở rộng tham số tùy ý )

function tinhtong(a,b){
 	return a+b;
}

function tinhtong(a,b,c){
 	return a+b+c;
}

function tinhtong(...resParam){

	let tong = 0;
	for(let i=0; i<resParam.lenght;i++){
 		tong +=resParam[i];
	}
console.log(tong);
    return tong;
}

tinhtong(1,2);

tinhtong(1,2,3);

tinhtong(1,2,3,4,5,6);
//SPREADOPERATOR (toán tử 3 chấm )


let mangsonguyen =[1,2,3,4,5,6,7];

let mangmoi = [...mangsonguyen,2,3,4,...mangsonguyen];

console.log(mangmoi);
// khi thao tác mảng mới không làm thay đổi mảng cũ

// hỏi phỏng vấn 
let mangA = [1,2,3,4];
let mangB = mangA; // ...tính chất con trọ
mangB.push(5,6);
console.log(mangA);// ==> mangA = [1,2,3,4]; //giữ nguyên vì mình thay đổi trên B 

let a = 5;
let b = a;
b=10;
console.log(a);=.> a = 5
//> ngược lại bên mảng thì khác, object


// hỏi phỏng vấn 
let mangA = [1,2,3,4];
let mangB = mangA; // ...
mangB.push(5,6);
console.log(mangA); //==> mangA = [1,2,3,4,5,6]; mảng A thay đổi
//=> tính chất con trọ trong lập trình vùng nhớ mảng A trỏ vào mảng B nên B thay đổi thì kéo theo A thay đổi

//> khi bạn muốn thay đổi B nhưng không muốn mảng A thay đổi thì dùng SPREADOPERATOR
let mangA = [1,2,3,4];
let mangB = [...mangA]; // ... , vùng nhớ bị cấp phát khác
mangB.push(5,6);
console.log(mangA); //==> mangA = [1,2,3,4];, mangB = [1,2,3,4,5,6];

let hs1 = {Mahs:1, Tenhs:'nguyen van a'}; 
let hs1 = {...hs1,tuoi:'19'}; 


//DEFAULT PARAMETER
function tinhtong(a=5,b=10){
	console.log (a+b);
	return a+b;
}
//=>ketqua : 20 
tinhtong(10); // khi truyền vào 1 tham số thì nó sẽ lấy tham số đó thay thế cho a và b trong hàm tính tổng

function tinhtong(a,b=10){
	console.log (a+b);
	return a+b;
}
tinhtong(100); //> ketqua: 110  // tham số mặc định là bên phải 

function tinhtong(a =10 ,b){
	console.log (a+b);
	return a+b;
}
tinhtong(100); //> NaN => lỗi trả về bằng null

function tinhtong(a =10 ,b=5, c=a+b){
	console.log (a+b+c);
	return a+b;
}// cho tham số thứ 3 có quyền lấy cái cộng 2 tham số trước còn lại 
tinhtong(100,100,100); // return  : 300

//for .. in  : chỉ số duyệt các phần tử , duyệt mảng index

let arrName =['khai','hieu','van','tuan','truc'];

let arrName =[{name:'khai',age:18},{name:'hieu',age:8}];

for(let index in arrName){
	console.log(index); // lấy vị trí phần tử

	console.log(index, arrName[index]);
}

// For .. of duyệt mảng theo từng phần tử

 for(let item of arrName){
	console.log(item); // lấy về đối tượng , dùng trong mảng đối tượng
	console.log(item.tuoi, item.name);
	
}

//ES6 - OOP -- tạo lớp đối tượng 1 cách tường mình hơn 
function Hocsinh () {
	this.Mahs ='';
	this.Hoten='';
	this.xuatthongtin = function(){
		console.log(this.this.Mahs ,this.this.Hoten)
	}
}
//khởi tạo : let hs = new Hocsinh (1,'nguyen a')

class hocsinh_ {
	MaHS;
	HoTen;
	// hàm khởi tạo 
	constructor(mahs,tenhs){
		this.MaHS = mahs;
		this.HoTen = tenhs;
	}
	xuatthongtin = () => {
		console.log(this.this.Mahs ,this.this.Hoten);
	}
	//xuatthongtin() {
	//	console.log(this.this.Mahs ,this.this.Hoten)
	//}
}

let hs1 = new hocsinh_(1,'nguyen b');
hs1.xuatthongtin();
//OOP -OOP EXTENDS (kế thừa)(thằng con sẽ kế thừa thằng cha tất cả các thuộc tính từ thằng cha) -- tính đa hình ()
class NhanVien {
	maNV;
	tenNV;
	constructor (mavn,tennv){
		this.mavn = maNV;
		this.tennv = tenNV;
	}
	tinhluong(){
	return 1000;
	}
}

class QuanLy extends NhanVien{
	dsPhongBan =[];
	constructor (mavn,tennv, mangPhongBan ){
		super(mavn,tennv) // gọi lại bằng từ khóa super
		this.dsPhongBan = mangPhongBan;
	}
	tinhluong(){
	return super().tinhtong()+1000;
	}
}

let qly = new QuanLy (1,'nguyenvan a',[{maPB:1,tenPB:'phong CNTT'}]);
console.log(qly);

// OOP IMPORT EXPORT file   scripts đọc từ trên xuống
// ES6 cho phép tách những file ra khi nào cần sài thì import vào // exmport defaut thì có thể change được tên

//FIND -- trả về 1 đối tượng nếu trùng nhau chỉ trả dối tượng đầu tiên , nếu ko tìm thấy thì trả về undefined
//FILTER
// FINDINDEX : trả về vị trí trong mảng (vị trí  0,1,2,... ) - dùng để xóa
// FOREACH :  duyet mang dùng no khi log ra và : duyệt tự động dựa trên chiều dài của mảng
// MAP : (bắt buộc phải có return) : tương tự foreach , nhưng nó nhận giá trị return và có giá trị trả về là 1 mảng mới được tạo ra từ các đối tượng return trong callback function
//return để tạo ra mảng mới , dùng khi bạn muốn tạo ra mảng nội dung mới từ mảng nội dung cũ -> dung rejact 

//REDUCE: 

// REVERSE: inra mảng ngược , mảng đảo ngược dùng trong sắp xếp nếu bạn muôn duyệt ngược lại
//SORT : sắp xếp mảng theo , xếp sếp chuỗi và số lấy thuộc tính ra sét điều kiện rùi sắp xếp  