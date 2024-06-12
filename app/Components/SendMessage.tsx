"use client";
import axios from "axios";
import React from "react";
export default function SendMessage() {
  const [infomis, setinfomis] = React.useState("");
  async function handleSubmit(e: any) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const body = e.target.body.value;
    let error = false;
    if (name === "") {
      e.currentTarget.name.className = "inputEroor";
      error = true;
    }
    if (email === "") {
      e.currentTarget.email.className = "inputEroor";
      error = true;
    }
    if (subject === "") {
      e.currentTarget.subject.className = "inputEroor";
      error = true;
    }
    if (body === "") {
      e.currentTarget.body.className = "inputEroor w-full";
      error = true;
    }
    if (error) {
      return;
    }
    console.log(name, email, subject, body);
    await axios
      .post("/api/message", { name, email, subject, body })
      .catch((err) => {
        console.log(err);
      })
      .then((response: any) => {
        if (response.data.success) {
          e.target.name.value = "";
          e.target.email.value = "";
          e.target.subject.value = "";
          e.target.body.value = "";
          setinfomis("Message sent successfully");
        }
      });
  }
  return (
    <form onSubmit={handleSubmit} className="p-10">
      <h1 className="text-3xl pb-10">Send a message</h1>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="input"
        onClick={(e) => {
          e.currentTarget.className = "input";
        }}
      />
      <input
        name="email"
        id="email"
        placeholder="Email"
        className="input"
        onClick={(e) => {
          e.currentTarget.className = "input";
        }}
      />
      <input
        type="subject"
        name="subject"
        id="subject"
        placeholder="Subject"
        className="input"
        onClick={(e) => {
          e.currentTarget.className = "input";
        }}
      />

      <textarea
        name="body"
        id="body"
        cols={10}
        rows={3}
        placeholder="Message"
        className="input w-full"
        onClick={(e) => {
          e.currentTarget.className = "input w-full";
        }}
      />
      <h2 className="text-green-600">{infomis}</h2>
      <button className="mt-4 inline-block text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-700 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out w-28 text-center">
        Send
      </button>
    </form>
  );
}
