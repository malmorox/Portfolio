const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface EmailData {
    name: string;
    email: string;
    message: string;
}

interface EmailResult {
    success: boolean;
    message: string;
}

export async function sendEmail(data: EmailData): Promise<EmailResult> {
    const accessKey = import.meta.env.PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
        return { success: false, message: "Error en el servidor. Inténtalo de nuevo" };
    }

    try {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                access_key: accessKey,
                name: data.name,
                email: data.email,
                message: data.message,
            }),
        });

        const result = await response.json();

        if (result.success) {
            return { success: true, message: "¡Mensaje enviado!" };
        } else {
            return { success: false, message: "Error al enviar. Inténtalo de nuevo" };
        }
    } catch (err) {
        return { success: false, message: "Error de red. Inténtalo de nuevo" };
    }
}