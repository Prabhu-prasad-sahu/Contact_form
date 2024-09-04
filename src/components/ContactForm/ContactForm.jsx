import { useState } from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const ContactForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        text: ""
    })

    const handelOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your Name : ${data.name} and your Email : ${data.email} and your Query is ${data.text} `)
        setData({
            name: "",
            email: "",
            text: ""
        })
    }
    return (
        <section className={`${styles.container}`}>
            <div className={`${styles.contact_Form}`}>
                <div className={styles.top_btn}>
                    <Button
                        isViaBtn={true}
                        text={"VIA SUPPORT CHAT"}
                        icon={<MdOutlineMessage />}
                    />
                    <Button
                        isViaBtn={true}
                        text={"VIA CALL"}
                        icon={<MdCall />} />
                </div>
                <Button
                    isViaBtn={true}
                    outline={true}
                    text={"VIA EMAIL FORM"}
                    icon={<MdEmail />} />
                <form onSubmit={handleSubmit}>
                    <div className={styles.form_controller} >
                        <label htmlFor="name">name</label>
                        <input type="text" name="name" value={data.name} onChange={handelOnChange} />
                    </div>
                    <div className={styles.form_controller}>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" value={data.email} onChange={handelOnChange} />
                    </div>
                    <div className={styles.form_controller}>
                        <label htmlFor="text">text</label>
                        <textarea name="text" rows={8} value={data.text} onChange={handelOnChange} ></textarea>
                    </div>
                    <div className={styles.top_btn} style={{ justifyContent: "end" }}>
                        <Button
                            type="submit"
                            text={"SUBMIT"}
                        />
                    </div>
                </form>
            </div >
            <div className={`${styles.Contact_image}`}>
                <img src="/images/photo.svg" alt="" />
            </div>

        </section >
    )
}

export default ContactForm