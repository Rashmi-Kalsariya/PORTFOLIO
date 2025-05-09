import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const INITIAL_STATE: FormData = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>(INITIAL_STATE);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const phoneNumber = "9913312110";
    const message = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
    setLoading(false);
    setForm(INITIAL_STATE);
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.entries(config.contact.form).map(([key, { span, placeholder }]) => {
            const Component = key === "message" ? "textarea" : "input";

            return (
              <label key={key} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={key === "email" ? "email" : "text"}
                  name={key}
                  value={form[key as keyof FormData]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(key === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <a
              href="https://drive.google.com/file/d/1a-AEUr7GVv7wcHraPulU9aGyven77mJy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
            >
              View CV
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
