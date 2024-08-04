// form contact sweetalert2
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // ตรวจสอบว่ามีการกรอกข้อมูลครบถ้วนหรือไม่
        const allInputsFilled = [...form.querySelectorAll('input')].every(
            (input) => input.value.trim() !== ""
        );

        // ให้ SweetAlert2 แสดงข้อความหลังจากกรอกข้อมูลไม่ครบ
        if (!allInputsFilled) {
            Swal.fire({
                title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                text: 'กรุณาตรวจสอบและลองส่งใหม่อีกครั้ง',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }

        // ให้ SweetAlert2 แสดงข้อความหลังจากฟอร์มถูกส่ง
        Swal.fire({
            title: 'ส่งแบบฟอร์มสำเร็จ',
            text: 'ได้รับอีเมลแล้ว กรุณารอการตอบกลับจากแอดมิน',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            // รีหน้าหลังจากกด OK ใน SweetAlert2
            window.location.reload();
        });

        // เพิ่มการส่งฟอร์มไปยัง Formspree
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
    });
});