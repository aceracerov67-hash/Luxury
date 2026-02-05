import React, { useState } from "react";
import axios from "axios";
import travelImg from "../../assets/atir.png";

const Zapros = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const SendMessage = async (e) => {
    e.preventDefault();

    if (!name || !lastname || !phone) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    const token = "7945664430:AAFL7TIsL_ZjGEG-W3knv26wtHpXGMHn1bk";
    const chatId = 6318746325;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const text = `
🆕 New Contact Request

👤 Name: ${name}
👤 Lastname: ${lastname}
📞 Phone: ${phone}

📝 Comment:
${comment || "No comment"}
    `;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text,
      });

      alert("Message sent successfully!");
      setName("");
      setLastname("");
      setPhone("");
      setComment("");
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen px-4 py-16">
      <div className="border-2 border-pink-500 max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

     
        <div className="p-8 bg-blue-50 flex flex-col items-center">
          <img
            src={travelImg}
            alt="Perfume"
            className="w-full max-w-sm mb-6"
          />

          <label className="w-full text-left text-gray-700 font-medium mb-2">
            Comment
          </label>

          <textarea
            rows="4"
            placeholder="Write your message..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-4 border rounded-xl resize-none
                       focus:outline-none focus:ring-2
                       focus:ring-pink-500 transition"
          />
        </div>

    
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2">
            Contact Us
          </h2>

          <p className="text-gray-500 mb-6">
            Fill in the form and we will get back to you shortly.
          </p>

          <form onSubmit={SendMessage} className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg
                         focus:ring-2 focus:ring-pink-500 outline-none"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg
                         focus:ring-2 focus:ring-pink-500 outline-none"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg
                         focus:ring-2 focus:ring-pink-500 outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 text-white py-3 rounded-lg
                         font-semibold hover:bg-pink-600 transition
                         disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Zapros;
