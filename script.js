document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if (username && password) {
        alert(`مرحبًا بك، ${username}!`);
        // هنا يمكنك إضافة طلب API أو معالجة تسجيل الدخول
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
});
