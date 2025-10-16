
import Logo2 from '../components/Logo2';

export default function DeleteDataPage() {
  return (
    <section className="min-h-screen bg-[#E6F2F0] text-[#3E3E3E] px-6 py-10">
      <div className="max-w-2xl mx-auto bg-[#FAFAF7] p-8 rounded-xl shadow-md">
        <div className="flex justify-center mb-6">
          <Logo2 />
        </div>

        <h1 className="text-[#6B9080] text-3xl font-bold mb-6">Eliminar tus datos personales</h1>

        <p className="mb-4">
          Si querés que eliminemos tus datos personales, podés solicitarlo por correo electrónico.
        </p>

        <p className="mb-4">
          Enviá un mensaje a <strong>soporte@shiftsapp.ar</strong> con el asunto “Eliminar datos” e incluí tu nombre y correo registrado.
        </p>

        <p>
          Procesaremos tu solicitud en un plazo de 7 días hábiles y te notificaremos cuando se complete.
        </p>
      </div>
    </section>
  );
}
