"use client";
export default function SendMessage() {
  return (
    <div className="p-10">
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Name"
        className="input"
      />
      <input
        type="email-"
        name="email"
        id="email"
        placeholder="Email"
        className="input"
      />
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Subject"
        className="input"
      />

      <textarea
        name="Message"
        id="Message"
        cols={10}
        rows={3}
        placeholder="Message"
        className="input w-full s"
      />
      <button
        onClick={() => console.log("send")}
        className="mt-4 inline-block text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-700 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out w-28 text-center"
      >
        Send
      </button>
    </div>
  );
}
