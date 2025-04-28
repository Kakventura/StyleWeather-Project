const LayoutCadastrado = () => {
     return (
        <>
        <div className={styles.container}>
          <NavbarLogin />
          <main className={styles.main}>{children}</main>
          <Rodape />
        </div>
      </>
     );
};
export {LayoutCadastrado};