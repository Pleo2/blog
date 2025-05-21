import { cn } from "@/lib/utils";

export default function NotFoundPage() {
    return (
        <section
            className={cn(
                "w-screen h-max pb-36 flex-col flex px-4 mt-4",
                "sm:max-w-2xl",
                "md:h-[100dvh] md:max-w-[98vw]",
                "lg:max-w-[98vw] lg:pb-32",
                "xl:pb-36"
            )}
        >
            <h1 className="text-3xl font-bold mb-4">Página no encontrada</h1>
            <div className="flex-1 rounded-lg bg-white/5 p-6 text-white/80">
                <p>
                    La ruta que buscas no existe. Usa la barra de navegación
                    para volver a una sección válida.
                </p>
            </div>
        </section>
    );
}
