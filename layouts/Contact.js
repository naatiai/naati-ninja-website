import { useState } from "react";
import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import Base from "./Baseof";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, meta_title, description, image, noindex, canonical, info } = frontmatter;
  // const { contact_form_action } = config.params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    host: "naatininja.com",
    type: "contact",
    created: new Date(),
  });

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  // Initialize Firebase app and Firestore instance only once
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccessMessage("");

      // Ensure collection is called on the db instance
      const colRef = collection(db, "webForms");
      const docRef = await addDoc(colRef, formData);
      console.log("Document written with ID: ", docRef.id);

      setSuccessMessage("Thank you! We will be in touch about the next steps.");

      // Optionally clear the form
      setFormData({
        name: "",
        email: "",
        message: "",
        host: "naatininja.com",
        type: "contact",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      setError("Failed to submit form. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <Base
      title={title}
      meta_title={meta_title}
      description={description}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal")}
          <div className="section row pb-0">
            <div className="col-12 md:col-6 lg:col-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    className="form-input w-full rounded"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-input w-full rounded"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-textarea w-full rounded-md"
                    name="message"
                    rows="7"
                    placeholder="Your message"
                    onChange={handleChange}
                    value={formData.message}
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary z-0 mt-4 py-[14px]"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {error && <p className="m-2 text-red-500">{error}</p>}
                {successMessage && (
                  <p className="m-2 text-green-500">{successMessage}</p>
                )}

                {/* <button type="submit" className="btn btn-primary">
                  Send Now
                </button> */}
              </form>
            </div>
            <div className="content col-12 md:col-6 lg:col-5">
              {markdownify(info.title, "h4")}
              {markdownify(info.description, "p", "mt-4")}
              <ul className="contact-list mt-5">
                {info.contacts.map((contact, index) => (
                  <li key={index}>
                    {markdownify(contact, "strong", "text-dark")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Contact;
