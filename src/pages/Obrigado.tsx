import logoDark from "@/assets/logo-dark.svg";


export default function Obrigado() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
        padding: "24px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "48px",
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgb(33,45,58)",
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src={logoDark}
            alt="Company logo"
            className="h-12 md:h-16"
          />
        </div>

        <h1 style={{ fontSize: "32px", marginBottom: "16px", color: "#212d3a" }}>
          Formulário enviado!
        </h1>

        <p style={{ color: "#212d3a", marginBottom: "32px" }}>
          Se quiser agilizar o atendimento, fale agora com nosso time no
          WhatsApp.
        </p>

        <a
          href="https://wa.me/5531971662712"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#16a34a",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
           Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
