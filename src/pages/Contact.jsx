import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Form submitted:", formData);
    };

    return (
        <section
            id="contact"
            className="relative py-24 border-t overflow-hidden"
            style={{
                borderColor: "var(--border)",
            }}
        >

           
            <div
                className="
                    absolute
                    inset-0
                    flex
                    items-start
                    justify-center
                    pt-0
                    pointer-events-none
                    select-none
                    overflow-hidden
                "
                aria-hidden="true"
            >
                <h1
                    className="
                        whitespace-nowrap
                        uppercase
                        font-black
                        leading-none
                        tracking-[-0.08em]
                        text-[22vw]
                        md:text-[22vw]
                        lg:text-[16vw]
                    "
                    style={{
                        color: "var(--primary)",
                        opacity: 0.9,
                    }}
                >
                    CONTACT US
                </h1>
            </div>

            <div
                className="
                    relative
                    z-10
                    max-w-[1300px]
                    mx-auto
                    px-8
                    translate-y-10
                "
            >

                <div
                    className="
                        rounded-3xl
                        border
                        p-8
                        md:p-12
                        backdrop-blur-xl
                    "
                    style={{
                        backgroundColor: "rgba(128, 128, 128, 0.06)",
                        borderColor: "rgba(128, 128, 128, 0.25)",
                    }}
                >

                    {/* =========================================
                        HEADING
                    ========================================= */}
                    <div className="text-center mb-10">

                        <p
                            className="
                                text-sm
                                font-semibold
                                tracking-[0.25em]
                                uppercase
                                mb-3
                            "
                            style={{
                                color: "var(--foreground)",
                            }}
                        >
                            Get In Touch
                        </p>

                        <h2
                            className="
                                text-5xl
                                md:text-6xl
                                font-bold
                            "
                            style={{
                                color: "var(--foreground)",
                            }}
                        >
                            Let's Talk
                        </h2>

                        <p
                            className="
                                mt-5
                                max-w-2xl
                                mx-auto
                                text-lg
                                leading-8
                            "
                            style={{
                                color: "var(--muted)",
                            }}
                        >
                            Have a question, opportunity, or just want to
                            connect? Feel free to send me a message.
                        </p>

                    </div>


                    {/* =========================================
                        CONTACT FORM
                    ========================================= */}
                    <div className="max-w-3xl mx-auto">

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* Name + Email */}
                            <div className="grid md:grid-cols-2 gap-6">

                                {/* Name */}
                                <div>

                                    <label
                                        htmlFor="name"
                                        className="
                                            block
                                            text-sm
                                            font-medium
                                            mb-2
                                        "
                                        style={{
                                            color: "var(--foreground)",
                                        }}
                                    >
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        className="
                                            w-full
                                            px-4
                                            py-3
                                            rounded-xl
                                            border
                                            outline-none
                                            text-sm
                                            transition-all
                                            duration-200
                                        "
                                        style={{
                                            backgroundColor:
                                                "rgba(128, 128, 128, 0.06)",
                                            color:
                                                "var(--foreground)",
                                            borderColor:
                                                "rgba(128, 128, 128, 0.25)",
                                        }}
                                    />

                                </div>


                                {/* Email */}
                                <div>

                                    <label
                                        htmlFor="email"
                                        className="
                                            block
                                            text-sm
                                            font-medium
                                            mb-2
                                        "
                                        style={{
                                            color: "var(--foreground)",
                                        }}
                                    >
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                        className="
                                            w-full
                                            px-4
                                            py-3
                                            rounded-xl
                                            border
                                            outline-none
                                            text-sm
                                            transition-all
                                            duration-200
                                        "
                                        style={{
                                            backgroundColor:
                                                "rgba(128, 128, 128, 0.06)",
                                            color:
                                                "var(--foreground)",
                                            borderColor:
                                                "rgba(128, 128, 128, 0.25)",
                                        }}
                                    />

                                </div>

                            </div>


                            {/* Message */}
                            <div>

                                <label
                                    htmlFor="message"
                                    className="
                                        block
                                        text-sm
                                        font-medium
                                        mb-2
                                    "
                                    style={{
                                        color: "var(--foreground)",
                                    }}
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can I help you?"
                                    rows="6"
                                    required
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        rounded-xl
                                        border
                                        outline-none
                                        resize-none
                                        text-sm
                                        transition-all
                                        duration-200
                                    "
                                    style={{
                                        backgroundColor:
                                            "rgba(128, 128, 128, 0.06)",
                                        color:
                                            "var(--foreground)",
                                        borderColor:
                                            "rgba(128, 128, 128, 0.25)",
                                    }}
                                />

                            </div>


                            {/* Submit */}
                            <div className="flex justify-center">

                                <button
                                    type="submit"
                                    className="
                                        px-8
                                        py-3
                                        rounded-xl
                                        font-semibold
                                        text-sm
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                    "
                                    style={{
                                        backgroundColor:
                                            "var(--primary)",
                                        color: "#ffffff",
                                    }}
                                >
                                    Send Message
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;