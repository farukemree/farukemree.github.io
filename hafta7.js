// Sayfa elementlerini seçelim
const themeBtn = document.getElementById('themeToggle');
const body = document.getElementById('mainBody');
const form = document.getElementById('registrationForm');
const resultArea = document.getElementById('resultArea');
const summaryContent = document.getElementById('summaryContent');

// 1. Etkileşim: Tema Değiştirme
themeBtn.addEventListener('click', () => {
    if (body.classList.contains('bg-light')) {
        body.classList.replace('bg-light', 'bg-secondary');
        body.classList.add('text-white');
        themeBtn.innerText = "Aydınlık Mod";
    } else {
        body.classList.replace('bg-secondary', 'bg-light');
        body.classList.remove('text-white');
        themeBtn.innerText = "Karanlık Mod";
    }
});

// 2. Etkileşim: Form İşleme ve Özet Üretme
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Sayfa yenilenmesini engelle

    // Değerleri al
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const topic = document.getElementById('topic').value;
    const terms = document.getElementById('terms').checked;

    // Form Doğrulama (Eksik alan kontrolü)
    if (!fullName || !email || !topic || !terms) {
        alert("Lütfen tüm alanları doldurun ve kullanım şartlarını onaylayın!");
        return;
    }

    // Özet Alanını Dinamik Olarak Oluştur
    summaryContent.innerHTML = `
        <p><strong>Katılımcı:</strong> ${fullName}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>İlgi Alanı:</strong> ${topic}</p>
        <p class="text-muted small">Başvurunuz başarıyla kaydedilmiştir.</p>
    `;

    // Sonuç alanını görünür yap
    resultArea.classList.remove('d-none');
    
    // Formu temizle (Opsiyonel)
    form.reset();
});
