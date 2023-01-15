import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "/styles/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState({
    nameErr: "",
    emailErr: "",
    messageErr: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (e) => {
    setError(false);
    setSuccess(false);
    setErrMessage({
      nameErr: "",
      emailErr: "",
      messageErr: "",
    });
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrMessage({
      nameErr: "",
      emailErr: "",
      messageErr: "",
    });
    setLoading(true);

    if (formData.name == "") {
      setLoading(false);
      return setErrMessage({ ...errMessage, nameErr: "NAME is Required" });
    }
    if (formData.email == "") {
      setLoading(false);
      return setErrMessage({ ...errMessage, emailErr: "EMAIL is Required" });
    }
    if (!validateEmail(formData.email)) {
      setLoading(false);
      return setErrMessage({ ...errMessage, emailErr: "Enter a valid EMAIL" });
    }
    if (formData.message == "") {
      setLoading(false);
      return setErrMessage({
        ...errMessage,
        messageErr: "Message is Required",
      });
    }

    const res = await fetch(`${process.env.BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const dbData = await res.json();
    console.log(dbData);
    if (!dbData.err) {
      setLoading(false);
      setSuccess(true);
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);
      setLoading(false);
    }
  };
  return (
    <div className={styles.container} id="contact">
      <div className={styles.curve}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L120,90.7C240,85,480,75,720,85.3C960,96,1200,128,1320,144L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      <Image
        src={"/images/contact/map.png"}
        width={1800}
        height={400}
        alt="Map Image"
        className={styles.background}
      />

      <div className={styles.left}>
        <h1 className={styles.heading}>CONTACT US</h1>
        <p className={styles.para}>
          If you have any questions or queries a member of staff will always be
          happy to help. Feel free to contact us by this Contact us form
        </p>
      </div>
      <div className={styles.right}>
        <form
          className={styles.form}
          onSubmit={(e) => handleSubmit(e)}
          method="POST"
        >
          {success && (
            <div className={`${styles.floatingMessage} ${styles.success}`}>
              Form Sent Successfully!
            </div>
          )}
          {error && (
            <div className={`${styles.floatingMessage} ${styles.error}`}>
              Something Went Wrong
            </div>
          )}
          <div className={styles.inputGroup}>
            {errMessage.nameErr !== "" ? (
              <label
                className={`${styles.label} ${styles.labelErr}`}
                for="name"
              >
                {errMessage.nameErr}
              </label>
            ) : (
              <label className={styles.label} for="name">
                NAME
              </label>
            )}
            <div className={styles.inputWrapper}>
              <div className={styles.icon}>
                <i class="bx bx-user"></i>
              </div>
              <input
                className={styles.input}
                type={"name"}
                id="name"
                name="name"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            {errMessage.emailErr !== "" ? (
              <label
                className={`${styles.label} ${styles.labelErr}`}
                for="email"
              >
                {errMessage.emailErr}
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
                className={styles.input}
                type={"name"}
                id="email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            {errMessage.subjectErr !== "" ? (
              <label
                className={`${styles.label} ${styles.labelErr}`}
                for="subject"
              >
                {errMessage.subjectErr}
              </label>
            ) : (
              <label className={styles.label} for="subject">
                SUBJECT
              </label>
            )}
            <div className={styles.inputWrapper}>
              <div className={styles.icon}>
                <i class="bx bx-align-left"></i>
              </div>
              <input
                className={styles.input}
                type={"name"}
                id="subject"
                name="subject"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            {errMessage.messageErr !== "" ? (
              <label
                className={`${styles.label} ${styles.labelErr}`}
                for="message"
              >
                {errMessage.messageErr}
              </label>
            ) : (
              <label className={styles.label} for="message">
                Message
              </label>
            )}
            <div className={styles.inputWrapper}>
              <textarea
                className={`${styles.textarea} ${styles.input}`}
                name="message"
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            {loading ? (
              <button disabled className={styles.button}>
                <i class="bx bx-loader-alt bx-spin"></i>
              </button>
            ) : (
              <button className={styles.button} type="submit">
                SEND
              </button>
            )}
          </div>

          <div className={styles.socialContainer}>
            <Link className={styles.socialIcon} href={"/"}>
              <i class="bx bxl-instagram"></i>
            </Link>
            <Link className={styles.socialIcon} href={"/"}>
              <i class="bx bxl-facebook-square"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
