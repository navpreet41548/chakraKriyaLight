import React, { useState } from "react";
import styles from "/styles/Form.module.css";
import { useDispatch } from "react-redux";
import { updateForm } from "../../store/formSlice";

const Form = ({ register, isOpen }) => {
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState(register);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errMessage, setErrMessage] = useState({
    emailErr: "",
    passwordErr: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    dispatch(updateForm({ register: false, visible: false }));
  };

  const handleChange = (e) => {
    setErrMessage({
      emailErr: "",
      passwordErr: "",
    });
    setError("");
    setSuccess("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    setRegisterForm(false);
  };
  const handleRegister = () => {
    setRegisterForm(true);
  };

  const handleRegisterSubmit = async () => {
    setError("");
    setLoading(true);
    setSuccess("");
    setErrMessage({
      emailErr: "",
      passwordErr: "",
    });
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(formData.email)) {
      if (formData.password !== formData.cpassword) {
        setLoading(false);
        return setErrMessage({
          ...errMessage,
          passwordErr: "Passwords Don't Match",
        });
      } else {
        try {
          const reqBody = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };
          const data = await fetch(`${process.env.BASE_URL}/api/register`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBody),
          });
          const dbData = await data.json();

          if (dbData.err) {
            // setMessage(dbData.err);
            setLoading(false);

            setError(dbData.err);
          } else {
            setLoading(false);

            // dispatch(updateForm({ login: false, visible: false }));
            setSuccess("Registered Successfully");
          }
        } catch (err) {
          setLoading(false);

          //   setMessage(err.message);
          setError("Something Went Wrong");
        }
      }
    } else {
      setLoading(false);

      return setErrMessage({
        ...errMessage,
        emailErr: "Invalid Email",
      });
    }
  };
  const handleLoginSubmit = async () => {
    setError("");
    setLoading(true);

    setSuccess("");
    setErrMessage({
      emailErr: "",
      passwordErr: "",
    });
    const data = await fetch(`${process.env.BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const dbData = await data.json();
    if (!dbData.err) {
      setLoading(false);
      setSuccess("Logged In Successfully");
    } else {
      setLoading(false);

      setError(dbData.err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {success !== "" && (
          <div className={`${styles.floatingMessage} ${styles.success}`}>
            {success}
          </div>
        )}
        {error !== "" && (
          <div className={`${styles.floatingMessage} ${styles.error}`}>
            {error}
          </div>
        )}

        {registerForm ? (
          <h1 className={styles.heading}>REGISTER</h1>
        ) : (
          <h1 className={styles.heading}>LOGIN</h1>
        )}
        {registerForm ? (
          <p className={styles.subHeading}>Welcome to Team!!</p>
        ) : (
          <p className={styles.subHeading}>Welcome Back!!</p>
        )}

        {registerForm && (
          <div className={styles.inputGroup}>
            <label className={styles.label} for="name">
              NAME
            </label>
            <div className={styles.inputWrapper}>
              <div className={styles.icon}>
                <i class="bx bx-user"></i>
              </div>
              <input
                onChange={(e) => handleChange(e)}
                className={styles.input}
                name="name"
                id="name"
              />
            </div>
          </div>
        )}
        <div className={styles.inputGroup}>
          {errMessage.emailErr !== "" ? (
            <label className={`${styles.label} ${styles.labelErr}`} for="email">
              Invalid EMAIL
            </label>
          ) : (
            <label className={styles.label} for="email">
              EMAIL
            </label>
          )}
          <div className={styles.inputWrapper}>
            <div className={styles.icon}>
              <i class="bx bxl-gmail"></i>
            </div>
            <input
              onChange={(e) => handleChange(e)}
              className={styles.input}
              name="email"
              id="email"
            />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} for="password">
            PASSWORD
          </label>
          <div className={styles.inputWrapper}>
            <div className={styles.icon}>
              <i class="bx bx-lock-open-alt"></i>
            </div>
            <input
              onChange={(e) => handleChange(e)}
              className={styles.input}
              name="password"
              id="password"
              type="password"
            />
          </div>
        </div>
        {registerForm && (
          <div className={styles.inputGroup}>
            {errMessage.passwordErr !== "" ? (
              <label
                className={`${styles.label} ${styles.labelErr}`}
                for="cpassword"
              >
                {errMessage.passwordErr}
              </label>
            ) : (
              <label className={styles.label} for="cpassword">
                CONFIRM PASSWORD
              </label>
            )}
            <div className={styles.inputWrapper}>
              <div className={styles.icon}>
                <i class="bx bx-lock-alt"></i>
              </div>
              <input
                onChange={(e) => handleChange(e)}
                className={styles.input}
                name="cpassword"
                id="cpassword"
                type="password"
              />
            </div>
          </div>
        )}

        {registerForm ? (
          <button className={styles.button} onClick={handleRegisterSubmit}>
            {loading ? <i class="bx bx-loader-alt bx-spin"></i> : "REGISTER"}
          </button>
        ) : (
          <button className={styles.button} onClick={handleLoginSubmit}>
            {loading ? <i class="bx bx-loader-alt bx-spin"></i> : "LOGIN"}
          </button>
        )}

        {registerForm ? (
          <p className={styles.lastPara}>
            Already Registered?{" "}
            <span className={styles.diff} onClick={handleLogin}>
              Login
            </span>
          </p>
        ) : (
          <p className={styles.lastPara}>
            Not Registered?{" "}
            <span className={styles.diff} onClick={handleRegister}>
              Register
            </span>
          </p>
        )}

        <div className={styles.cross} onClick={handleClose}>
          <i class="bx bx-x"></i>
        </div>
      </div>
    </div>
  );
};

export default Form;
