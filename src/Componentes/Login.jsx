import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import data from "../Data/db.json";
// import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    username: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = data.usuarios.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      if (user.password === password) {
        setErrorMessages({ username: "", password: "" });
        onLogin();
      }
    } else {
      setErrorMessages({
        username: "Usuario o Contraseña incorrecta",
        password: "Usuario o Contraseña incorrecta",
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="login">
        <h2 className="mb-3">Login</h2>
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="form-group was-validated mb-2">
            <label htmlFor="user" className="form-label">
              Usuario
            </label>

            <input
              type="text"
              className={`form-control ${
                errorMessages.username ? "is-invalid" : ""
              }`}
              placeholder="Ingresar usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="invalid-feedback">{errorMessages.username}</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control ${
                  errorMessages.password ? "is-invalid" : ""
                }`}
                placeholder="Ingresar contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="invalid-feedback">{errorMessages.password}</div>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
