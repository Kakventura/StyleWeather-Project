import { useEffect } from 'react';

const VLibras = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;

    script.onload = () => {
      setTimeout(() => {
        if (window.VLibras) {
          try {
            new window.VLibras.Widget('https://vlibras.gov.br/app');
          } catch (error) {
            console.error('Erro ao iniciar o widget VLibras:', error);
          }
        } else {
          console.error('VLibras não foi carregado corretamente.');
        }
      }, 2000);
    };

    script.onerror = () => {
      console.error('Erro ao carregar o script do VLibras.');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default VLibras;