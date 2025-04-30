import bcrypt from "bcryptjs";

// Função para criptografar a senha
export const criptografarSenha = async (senha) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(senha, salt);
};

// Função para verificar a senha
export const verificarSenha = async (senha, hash) => {
  return await bcrypt.compare(senha, hash);
};