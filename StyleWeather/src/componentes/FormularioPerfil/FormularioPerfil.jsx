import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import style from "./FormularioPerfil.module.css";

const FormularioPerfil = () => {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    tipoLook: "",
  });

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData({
            nome: docSnap.data().nome,
            email: user.email,
            tipoLook: docSnap.data().tipoLook || "",
          });
        }
      }
    };

    fetchUserData();
  }, [auth, db]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAtualizar = async () => {
    try {
      const user = auth.currentUser;
      const docRef = doc(db, "usuarios", user.uid);

      // Dados a serem atualizados
      const updatedData = {};

      // Verifica se há alterações no nome e tipoLook e adiciona ao updatedData
      if (userData.nome) {
        updatedData.nome = userData.nome;
      }

      if (userData.tipoLook) {
        updatedData.tipoLook = userData.tipoLook;
      }

      // Atualiza o Firestore se houver dados para atualizar
      if (Object.keys(updatedData).length > 0) {
        await updateDoc(docRef, updatedData);
        alert("Perfil atualizado com sucesso!");
      } else {
        alert("Nenhuma alteração foi feita.");
      }
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error.message);
      alert("Erro ao atualizar o perfil.");
    }
  };

  return (
    <div className={style.background}>
      <div className={style.cardPerfil}>
        <div className={style.ladoEsquerdo}>
          <h1 className={style.titulo}>PERFIL</h1>
        </div>

        <div className={style.inputs}>
          <label className={style.label}>Email:</label>
          <input
            className={`${style.inputsPerfil} ${style.email}`}
            type="email"
            name="email"
            value={userData.email}
            disabled // Campo somente leitura
          />

          <label className={style.label}>Nome:</label>
          <input
            type="text"
            name="nome"
            value={userData.nome}
            onChange={handleInputChange}
          />

          <label className={style.label}>Gênero:</label>
          <select
            name="tipoLook"
            value={userData.tipoLook}
            onChange={handleInputChange}
            className={style.select}
          >
            <option value="">Selecione um estilo:</option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="neutro">Neutro</option>
          </select>

          <button onClick={handleAtualizar}>Atualizar</button>
        </div>
      </div>
    </div>
  );
};

export { FormularioPerfil };