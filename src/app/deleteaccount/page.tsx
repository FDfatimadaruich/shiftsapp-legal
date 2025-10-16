import Logo2 from "../components/Logo2";


export default function DeleteAccountPage() {
  return (
    <section className="min-h-screen bg-[#E6F2F0] text-[#3E3E3E] px-6 py-10">
      <div className="max-w-2xl mx-auto bg-[#FAFAF7] p-8 rounded-xl shadow-md">
        <div className="flex justify-center mb-6">
          <Logo2 />
        </div>

        <h1 className="text-[#6B9080] text-3xl font-bold mb-6">Eliminar tu cuenta</h1>

        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Abre la aplicación y accedé a tu cuenta.</li>
          <li>Ve al menú <strong>Cuenta ShiftsApp</strong>.</li>
          <li>Seleccioná la opción <strong>Eliminar cuenta</strong>.</li>
          <li>Confirmá la eliminación y esperá el mensaje de confirmación.</li>
        </ol>

        <p className="text-base leading-relaxed">
          Si tenés problemas para eliminar tu cuenta, escribinos a <strong>soporte@shifstapp.ar</strong> y te ayudamos.
        </p>
      </div>
    </section>
  );
}
