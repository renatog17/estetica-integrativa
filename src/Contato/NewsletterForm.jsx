import './NewsletterForm.css';

export default function NewsletterForm() {
    return (
        <div className="newsletter-container">
            <h1>Se inscreva na newsletter</h1>
            <form className="newsletter-form">
                <input type="email" placeholder="Seu e-mail" name="email" required />
                <input type="text" placeholder="Seu nome" name="nome" required />
                <button type="submit">Inscrever-se</button>
            </form>
        </div>
    );
}
