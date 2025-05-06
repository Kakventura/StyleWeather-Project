import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { SwitchAlert } from "../SwitchAlert"; // Importando o SwitchAlert
import style from "./FormularioPerfil.module.css";


const FormularioPerfil = () => {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    tipoLook: "",
    profileImage: "",
    originalNome: "",
    originalTipoLook: "",
    originalProfileImage: ""
  });

  const [profileImage, setProfileImage] = useState('');
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserData({
            nome: userData.nome,
            email: user.email,
            tipoLook: userData.tipoLook || "",
            profileImage: userData.profileImage || "",
            originalNome: userData.nome,
            originalTipoLook: userData.tipoLook || "",
            originalProfileImage: userData.profileImage || ""
          });
          setProfileImage(userData.profileImage || "");
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

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAtualizar = async () => {
    try {
      const user = auth.currentUser;
      const docRef = doc(db, "usuarios", user.uid);

      // Verificar se houve alterações nos dados
      const updatedData = {};

      if (userData.nome !== userData.originalNome) updatedData.nome = userData.nome;
      if (userData.tipoLook !== userData.originalTipoLook) updatedData.tipoLook = userData.tipoLook;
      if (profileImage !== userData.originalProfileImage) updatedData.profileImage = profileImage;

      // Se houver alterações, realizar a atualização
      if (Object.keys(updatedData).length > 0) {
        await updateDoc(docRef, updatedData);
        SwitchAlert.success("Perfil atualizado com sucesso!"); 
      } else {
        SwitchAlert.error("Nenhuma alteração foi feita.");
      }
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error.message);
      SwitchAlert.error("Erro ao atualizar o perfil.");
    }
  };

  return (
    
    <div className={style.background}>
      <div className={style.cardPerfil}>
        <div className={style.ladoEsquerdo}>
          <h1 className={style.titulo}>PERFIL</h1>



          <div className={style.imagemPerfilContainer}>
            <img
              src={profileImage || "/logo.png"}
              alt=""
              className={style.imagemPerfil}
            />
            <label htmlFor="fileUpload" className={style.uploadButton}>
              Escolher imagem
            </label>
            <input
              type="file"
              id="fileUpload"
              name="profileImage"
              accept="image/*"
              onChange={handleFotoChange}
              className={style.uploadInput}
            />
          </div>
        </div>

        <div className={style.inputs}>
          <label className={style.label}>Email:</label>
          <input
            className={`${style.inputsPerfil} ${style.email}`}
            type="email"
            name="email"
            value={userData.email}
            disabled
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
