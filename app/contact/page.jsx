import Style from "./contact.module.css";
import Image from "next/image";
const contactPage = ({}) => {
  return (
    <div>
      <div className={Style.container}>
        <div className={Style.imageContainer}>
          <Image src="/image2.jpg" alt="form image" fill />
        </div>
        <div className={Style.formContainer}>
          <form action="" className={Style.contactForm} method="POST">
            <input
              type="text"
              name="username"
              id=""
              placeholder="username"
              className={Style.input}
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="email"
              className={Style.input}
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="password"
              className={Style.input}
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="type here ..."
              className={`${Style.input} ${Style.textArea}`}
            ></textarea>
            <button className={`${Style.input} ${Style.btn}`}>send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contactPage;
