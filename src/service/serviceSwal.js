import Swal from 'sweetalert2';
import "../css/AppModal.css";

export const serviceSwal = (icon, title, text, showConfirmButton,  showCancelButton, timer) => {
    return  Swal.fire({
        icon,
        title,
        text,
        showConfirmButton,
        timer,
        showCancelButton
    })
}
