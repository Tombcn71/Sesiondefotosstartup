import { Button } from "@/components/ui/button";
import Messages from "./messages";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 "
        action="/auth/sign-in"
        method="post">
        <Card>
          <CardHeader>
            <CardTitle>Iniciar sesión / Registrarse</CardTitle>
            <CardDescription>
              Inicie sesión en su cuenta o regístrese para obtener una nueva
              para comenzar.{" "}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Label className="text-md" htmlFor="email">
              Email
            </Label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border"
              name="email"
              placeholder="you@example.com"
              required
            />
            <Button className="bg-sky-600 hover:bg-sky-700">Continuar</Button>
            <Messages />
          </CardContent>
          <CardFooter>
            <p className="text-sm">
              Al registrarte, aceptas nuestra{" "}
              <a href="#" className="underline">
                Términos de servicio{" "}
              </a>{" "}
              y{" "}
              <a href="#" className="underline">
                política de privacidad
              </a>
              .
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
