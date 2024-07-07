<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];

    $to = 'admin@seruniputih.sch.id'; // Ganti dengan email admin
    $subject = 'Pendaftaran PPDB Seruni Putih';
    $message = "Nama: $name\nEmail: $email\nTelepon: $phone\nAlamat: $address";
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'Pendaftaran berhasil. Data telah dikirim ke email admin.';
    } else {
        echo 'Gagal mengirim email. Silakan coba lagi.';
    }
} else {
    echo 'Invalid request method.';
}
