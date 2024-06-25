<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = 'gabriellaavina24@gmail.com'; // Admin email
    $subject = 'PPDB Form Submission';
    $message = 'A new PPDB form has been submitted.';
    $headers = 'From: no-reply@yourdomain.com' . "\r\n" .
        'Reply-To: no-reply@yourdomain.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // File handling
    if (isset($_FILES['pdf']) && $_FILES['pdf']['error'] == UPLOAD_ERR_OK) {
        $file = $_FILES['pdf']['tmp_name'];
        $content = file_get_contents($file);
        $content = chunk_split(base64_encode($content));
        $uid = md5(uniqid(time()));
        $filename = $_FILES['pdf']['name'];

        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"" . $uid . "\"\r\n\r\n";
        $headers .= "This is a multi-part message in MIME format.\r\n";
        $headers .= "--" . $uid . "\r\n";
        $headers .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
        $headers .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $headers .= $message . "\r\n\r\n";
        $headers .= "--" . $uid . "\r\n";
        $headers .= "Content-Type: application/pdf; name=\"" . $filename . "\"\r\n";
        $headers .= "Content-Transfer-Encoding: base64\r\n";
        $headers .= "Content-Disposition: attachment; filename=\"" . $filename . "\"\r\n\r\n";
        $headers .= $content . "\r\n\r\n";
        $headers .= "--" . $uid . "--";

        if (mail($email, $subject, "", $headers)) {
            echo json_encode(['status' => 'success', 'message' => 'Email sent successfully.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to send email.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No file uploaded or upload error.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
