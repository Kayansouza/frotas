import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, senha }),
      });

      const data = await response.text(); // Captura a resposta como texto
      if (!response.ok) {
        throw new Error(data || "Erro no cadastro!");
      }
      
      setMessage("Cadastro realizado com sucesso!");
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Cliente</h1>
      <form onSubmit={handleSignUp} className="w-1/3">
        <input className="border p-2 w-full" type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="border p-2 w-full my-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="border p-2 w-full" type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        {message && <p className={message.includes("sucesso") ? "text-green-500" : "text-red-500"}>{message}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full mt-3" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
