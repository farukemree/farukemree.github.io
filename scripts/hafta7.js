// Sayfa Yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('btnTheme');
    const labForm = document.getElementById('labForm');
    const resultArea = document.getElementById('resultArea');

    // 1. Etkileşim: Tema Değiştirme [cite: 44, 57]
    themeBtn.addEventListener('click', () => {
        const body = document.body;
        if (body.classList.contains('bg-light')) {
            body.classList.replace('bg-light', 'bg-dark');
            body.classList.add('text-white');
            themeBtn.innerText = "Aydınlık Temaya Geç";
            themeBtn.classList.replace('btn-outline-light', 'btn-light');
        } else {
            body.classList.replace('bg-dark', 'bg-light');
            body.classList.remove('text-white');
            themeBtn.innerText = "Koyu Temaya Geç";
            themeBtn.classList.replace('btn-light', 'btn-outline-light');
        }
    });

    // 2. Etkileşim: Form Gönderme ve Özet Üretme [cite: 44, 56, 68]
    labForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Sayfa yenilenmesini engelle [cite: 54]

        // Değerleri al [cite: 25]
        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const session = document.getElementById('sessionSelect').value;
        const terms = document.getElementById('checkTerms').checked;

        // Eksik alan kontrolü [cite: 55, 69]
        if (!name || !email || !session || !terms) {
            alert("Lütfen tüm alanları doldurunuz ve onay kutusunu işaretleyiniz!");
            return;
        }

        // Başarılı durumda özet kartı oluştur [cite: 56, 70]
        resultArea.classList.remove('bg-info-subtle', 'text-info-emphasis');
        resultArea.classList.add('bg-white', 'text-dark', 'shadow-sm');
        
        resultArea.innerHTML = `
            <h4 class="text-success fw-bold">✔ Başvuru Başarılı!</h4>
            <hr>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Seçilen Oturum:</strong> ${session}</p>
            <p class="small text-muted">Kayıt işleminiz başarıyla tamamlanmıştır.</p>
        `;
    });
});
