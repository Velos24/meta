document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if (username && password) {
        // إرسال البيانات إلى ملف PHP باستخدام Fetch API
        fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert(`مرحبًا بك، ${data.data.username}!`);
                console.log('بيانات تسجيل الدخول:', data.data);
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('حدث خطأ:', error);
            alert('حدث خطأ أثناء معالجة الطلب.');
        });
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
});
