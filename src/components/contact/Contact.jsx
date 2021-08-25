/** @jsxImportSource @emotion/react */
import { useState } from "react";
import tw, { css } from "twin.macro";
import bgimg from "./background.jpg";
import validator from "validator";

export const Contact = (props) => {
  const [color, setColor] = useState("yellow");
  const [isloading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("abc@example.ext");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [reply, setReply] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDefault(email)) {
      return false;
    }
    const data = { name, email, subject, message };
    const url = "https://pbvictor.herokuapp.com/api/contact";
    fetch(url, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
       },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Did not get data from server");
        }
        return res.json();
      })
      .then((data) => {
        setReply((prevReply) => data);
        setLoading((prevLoading) => false);
        setError((prevError) => null);
        setEmail((prevEmail) => "abc@example.ext");
        setMessage((prevMessage) => "");
        setName((prevName) => "");
        setSubject((prevSubject) => "");
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("aborted");
        } else {
          setLoading((prevLoading) => false);
          setError((prevError) => error.message);
        }
      });
  };

  const isDefault = (email) => {
    if (email === "abc@example.ext") {
      setErrorMessage(
        (prevErrorMessage) => "Please double check the email field"
      );
      return true;
    }
    return false;
  };

  const validateMail = (email) => {
    if (validator.isEmail(email)) {
      setColor((prevColor) => "yellow");
    } else {
      isDefault(email);
      setColor((prevColor) => "red");
      return false;
    }
  };

  const background = css`
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-image: url(${bgimg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: blue;
    background-blend-mode: color; 
  `;
  const inputsParent = css`
    ${tw`flex w-screen md:(w-full) h-auto`}
  `;
  const labels = css`
    ${tw`align-self[flex-start] w-full p-5 text-white text-xl`}
  `;
  const regularInputs = css`
    ${tw`align-self[flex-end] mb-3`}
  `;

  // const large = css `
  // @media (max-width: 350px)
  // `
  const inputs = css`
    :focus {
      outline: none;
      resize: none;
      border: 1px solid;
      border-color: ${color};
    }
    ${tw`rounded bg-transparent text-white bg-opacity-50 opacity-50 md:(p-1.5) border border-gray-400
  `}
  `;
  const button = css`
    ${tw`px-2 py-1 mx-5 rounded-md text-white bg-transparent border-2 border-green-600
  hover:(bg-green-600 transition ease-in-out duration-700)
  `}
  `;

  return (
    <div
      className="main"
      tw="absolute flex items-center md:(grid grid-cols-4 items-center h-screen ) h-full top-0 left-0 w-screen"
      css={background}
    >
      <div tw="w-auto md:(w-auto col-start-2 col-end-4)">
        <form onSubmit={handleSubmit}>
          <div tw="" css={inputsParent}>
            <label htmlFor="name" tw="" css={labels}>
              Name:
            </label>
            <span tw="p-3 " css={regularInputs}>
              <input
                type="text"
                name="name"
                css={inputs}
                required
                value={name}
                onChange={(e) => setName((prevName) => e.target.value)}
              />
            </span>
          </div>

          <div css={inputsParent}>
            <label htmlFor="email" css={labels}>
              Email:
            </label>
            <span css={regularInputs} tw="p-3 ">
              <input
                type="email"
                name="email"
                css={inputs}
                required
                value={email}
                onFocus={(e) => {
                  setEmail((prevEmail) => "");
                  validateMail(email);
                  setErrorMessage((prevErrorMessage) => "");
                }}
                onChange={(e) => {
                  setEmail((prevEmail) => e.target.value);
                  validateMail(email);
                }}
                onBlur={(e) => setColor((prevColor) => "yellow")}
              />
              <p tw="text-red-600">{errorMessage}</p>
            </span>
          </div>

          <div css={inputsParent}>
            <label htmlFor="subject" css={labels}>
              Subject:
            </label>
            <span css={regularInputs} tw="p-3 ">
              <input
                type="text"
                name="subject"
                css={inputs}
                required
                value={subject}
                onChange={(e) => setSubject((prevSubject) => e.target.value)}
              />
            </span>
          </div>

          <div css={inputsParent}>
            <label htmlFor="message" css={labels}>
              Text:
            </label>
            <span css={regularInputs} tw="p-0">
              <textarea
                name="message"
                cols="30"
                rows="5"
                css={inputs}
                //tw="px-7 py-0.5"
                tw="px-0"
                required
                value={message}
                onChange={(e) => setMessage((prevMessage) => e.target.value)}
              ></textarea>
            </span>
          </div>

          <div css={inputsParent} tw="justify-end">
            {!isloading && !error && !reply && (
              <button css={button}>Submit</button>
            )}
            {isloading && (
              <button disabled css={button}>
                Sending ...
              </button>
            )}
            {!isloading && !error && reply && (
              <button css={button}>{reply}</button>
            )}
            {!isloading && error && !reply && (
              <button css={button}>{error}</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
