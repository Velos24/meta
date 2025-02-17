<?php
// login.php

// إعداد الرد الافتراضي
$response = [
    'status' => 'error',
    'message' => 'حدث خطأ أثناء معالجة الطلب.',
    'data' => []
];

// التحقق من وجود بيانات POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // استلام بيانات تسجيل الدخول
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // التحقق من صحة البيانات
    if (!empty($username) && !empty($password)) {
        // تخزين البيانات في مصفوفة
        $response['status'] = 'success';
        $response['message'] = 'تم تسجيل الدخول بنجاح.';
        $response['data'] = [
            'username' => $username,
            'password' => $password
        ];
    } else {
        $response['message'] = 'يرجى ملء جميع الحقول.';
    }
}

// إرسال الرد بصيغة JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
