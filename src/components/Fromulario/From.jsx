"use client"
import "./ContactForm.css"
function ContactForm() {

  return (
    <div className="contact-form-container">
      <form  className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingrese su nombre"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Ingrese su apellido"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Número</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ingrese su número telefónico"
            required
          />
        </div>

        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default ContactForm

