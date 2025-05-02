import { useEffect } from 'react';

const VLibras = () => {
  useEffect(() => {
    // Carregar o script do VLibras
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;

    script.onload = () => {
      console.log('Script VLibras carregado com sucesso');
      
      // Tentar inicializar o widget após um breve atraso
      setTimeout(() => {
        if (window.VLibras) {
          console.log('Iniciando widget VLibras...');
          try {
            new window.VLibras.Widget('https://vlibras.gov.br/app');
          } catch (error) {
            console.error('Erro ao iniciar o widget VLibras: ', error);
          }
        } else {
          console.error('VLibras não foi carregado corretamente.');
        }
      }, 2000); // Atraso de 2 segundos
    };

    script.onerror = () => {
      console.error('Erro ao carregar o script do VLibras.');
    };

    // Adiciona o script no corpo da página
    document.body.appendChild(script);

    // Cleanup ao desmontar o componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;  // Não renderiza nada diretamente no JSX
};

export default VLibras;
