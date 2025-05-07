import Swal from 'sweetalert2';
import style from './SweetAlert.module.css';

const SweetAlert = {
  error: (messages) => {
    const formattedMessages = Array.isArray(messages) 
      ? messages.join('<br>') 
      : messages;

      
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: `<div class="${style.swalContent}">${formattedMessages}</div>`,
      confirmButtonText: 'Entendi',
      iconColor: '#9b7cbb', // FORÇA cor roxa
      customClass: {
        popup: style.swalPopup,
        title: style.swalTitle,
        htmlContainer: style.swalContent,
        confirmButton: style.swalButton,
        icon: style.swalIcon
      },
      buttonsStyling: false,
      background: '#fff'
    });
  },

  success: (message) => {
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      html: `<div class="${style.swalContent}">${message}</div>`,
      confirmButtonText: 'OK',
      iconColor: '#9b7cbb', // FORÇA cor roxa
      customClass: {
        popup: style.swalPopup,
        title: style.swalTitle,
        htmlContainer: style.swalContent,
        confirmButton: style.swalButton,
        icon: style.swalIcon
      },
      buttonsStyling: false,
      background: '#fff',
    }).then((result) => {
      if (result.isConfirmed) {
        // Quando o botão OK for pressionado, a página será recarregada
        window.location.reload(); // Atualiza a página
      }
    });
  },


successPerfil: (messagePerfil) => {
  Swal.fire({
    icon: 'success',
    title: 'Sucesso!',
    html: `<div class="${style.swalContent}">${messagePerfil}</div>`,
    confirmButtonText: 'OK',
    iconColor: '#9b7cbb', // FORÇA cor roxa
    customClass: {
      popup: style.swalPopup,
      title: style.swalTitle,
      htmlContainer: style.swalContent,
      confirmButton: style.swalButton,
      icon: style.swalIcon
    },
    buttonsStyling: false,
    background: '#fff',
  }).then((result) => {
    if (result.isConfirmed) {
      // Quando o botão OK for pressionado, a página será recarregada
      window.location.href = '/';

    }
  });

}

};


export { SweetAlert };