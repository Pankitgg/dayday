function  reloadImg2() {
    document.getElementById("manage_vcode").src = "/getVerificationCode?" + "radom="
        + Math.random();
}

function login(){
    var userName=document.getElementById("userName").value;
    var password=document.getElementById("password").value;
    var key="12345678abcdefgh";
    if(userName==null||userName==""){
        alert("用户名不能为空");
        return;
    }
    if(password==null||password==""){
        alert("密码不能为空");
        return;
    }
    var utf8Key=CryptoJS.enc.Utf8.parse(key);
    var uft8Password=CryptoJS.enc.Utf8.parse(password);
    var cryptoJsPassword=CryptoJS.AES.encrypt(uft8Password,utf8Key,{mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    password=cryptoJsPassword.toString();
    /*document.getElementById("password").value=password;
    document.getElementById("key").value=key;
    document.getElementById("form_login").action="/login";
    document.getElementById("form_login").submit();*/
    $.ajax({
        async : false,
        cache:false,
        type:'POST',
        data:{"userName":userName,"password":password,"key":key},
        contentType:"application/x-www-form-urlencoded",
        url:"/localLogin",
        dataType: "json",
        error: function(){
            alert("请求失败");
        },
        success: function(data){
            var obj=eval(data);
            if(obj.code=="1"){
                window.location.href="/index.html";
            }else if(obj.code=="0"){
                alert(obj.errorMsg);
            }
        }
    });
}