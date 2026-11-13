<?php
    // 1. file koneksi.php
    require 'koneksi.php';

    // 2. ambil id
    $id = $_GET['id'] ?? '';

    // 3. validasi id
    if (empty($id) || !ctype_digit($id)) {
        echo  '<p style="color:red;">!! ID tidak valid. !!</p>';
    } else {
        // 4. jika id valid
        // a. query DELETE
        $query = "DELETE FROM buku WHERE id = ?";

        // b. query dengan mysqli_prepare()
        $stmt = mysqli_prepare($conn, $query);

        // c. mysqli_stmt_bind
        mysqli_stmt_bind_param($stmt, "i", $id);

        // d. mysqli_stmt_execute()
        mysqli_stmt_execute($stmt);

        // 5. cek hasil
        if (mysqli_stmt_affected_rows($stmt) == 1) {
            // jika nilai 1
            echo '<p>Data berhasil dihapus.</p>';
        } else {
            // jika tidak 1
            echo '<p>Data tidak ditemukan.</p>';
        }
    }

    // 6. tampilkan link kembali
    echo '<a href="index.php">Kembali</a>';
?>