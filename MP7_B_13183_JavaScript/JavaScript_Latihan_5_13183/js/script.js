function fn_ValForm() {
    var sMsg = "";
    var sInfo = "";
    var sPilihan = "";

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value
    var paket = document.getElementById("kategori").value
    var bknEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (nama == "") {
        sMsg += "Nama belum diisi!";
    }

    if (email == "") {
        sMsg += "Email belum diisi!";
    } else if (!bknEmail.test(email)) {
        sMsg += "Format Email tidak valid";
    }

    if (umur == "") {
        sMsg += "Umur belum diisi";
    } else if (isNan(umur)){
        sMsg += "Umur harus berupa angka";
    } else {
        var umur = parseInt(umur);
        if (umur > 65) {
            sMsg += "Umur harus diantara 17 sampai 65 tahun";
        } else if (umur >= 17) {
            if (umur > 25) {
                sInfo = "Paket Umum";
            } else {
                sInfo = "Paket Pelajar";
            }
        } else {
            sMsg += "Umur harus diantara 17 sampai 65 tahun";
        }
    }

    if (paket == "") {
        sMsg += "Paket member belum dipilih";
    }

    if (sMsg != "") {
        alert("Peringatan:" +sMsg);
        return false;
    }

    switch (paket) {
        case "S":
            sPilihan="Silver";
            break
        case "G":
            sPilihan="Gold";
            break
        case "P":
            sPilihan="Platinum";
            break
    }

    alert("Terima Kasih" +nama+ "!Anda terdaftar di paket" +paket+ "("+sInfo+").");
    return true;
    
}