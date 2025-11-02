export default function ContactForm() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form
        action="https://formspree.io/f/mnnqzkva"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
