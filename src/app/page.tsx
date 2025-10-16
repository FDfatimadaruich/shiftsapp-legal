import Logo from "./components/Logo";
import Logo2 from "./components/Logo2";


export default function PrivacyPage() {
  return (
    <section className="min-h-screen bg-[#E6F2F0] text-[#3E3E3E] px-6 py-10">
      <div className="max-w-2xl mx-auto bg-[#ffffff] p-8 rounded-xl shadow-md">
        <div className="flex justify-end mb-6">
          <Logo2 />
        </div>

        <h1 className="text-[#6B9080] text-3xl font-bold mb-6">Política de Privacidad – ShiftsApp</h1>
        <p className="mb-4 text-sm text-gray-500">Última actualización: 16 de octubre de 2025</p>

        <p className="mb-4">
          En ShiftsApp valoramos tu privacidad y nos comprometemos a proteger tu información personal. Esta política explica qué datos recopilamos, cómo los usamos y qué opciones tenés como usuario.
        </p>

        <h2 className="text-[#6B9080] text-xl font-semibold mb-2">📌 Información que recopilamos</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Datos de registro: nombre, correo electrónico, número de teléfono.</li>
          <li>Información de uso: horarios, turnos, interacciones dentro de la app.</li>
          <li>Datos técnicos: tipo de dispositivo, sistema operativo, versión de la app.</li>
        </ul>

        <h2 className="text-[#6B9080] text-xl font-semibold mb-2">🎯 Cómo usamos tus datos</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Crear y gestionar tu cuenta.</li>
          <li>Mostrar y organizar tus turnos laborales.</li>
          <li>Mejorar la experiencia de usuario y el rendimiento de la app.</li>
          <li>Enviarte notificaciones relevantes (si lo autorizás).</li>
        </ul>

        <h2 className="text-[#6B9080] text-xl font-semibold mb-2">🔐 Protección de datos</h2>
        <p className="mb-4">
          Implementamos medidas de seguridad para proteger tu información contra accesos no autorizados, pérdida o alteración. Tus datos no se comparten con terceros sin tu consentimiento, salvo obligación legal.
        </p>

        <h2 className="text-[#6B9080] text-xl font-semibold mb-2">🧾 Tus derechos</h2>
        <p className="mb-4">
          Como usuario, podés acceder a tus datos personales, solicitar la corrección o eliminación de tu información, y eliminar tu cuenta desde la app o escribiendo a <strong>soporte@shifstapp.ar</strong>.
        </p>

        <h2 className="text-[#6B9080] text-xl font-semibold mb-2">📬 Contacto</h2>
        <p>
          Si tenés dudas sobre esta política o querés ejercer tus derechos, escribinos a:<br />
          <strong>soporte@shiftsapp.ar</strong><br />
          Asunto: “Privacidad – ShiftsApp”
        </p>
      </div>
    </section>
  );
}
