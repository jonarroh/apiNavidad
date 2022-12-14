import { Application } from 'https://deno.land/x/oak@v11.1.0/mod.ts';
import { oakCors } from 'https://deno.land/x/cors@v1.2.2/mod.ts';

const app = new Application();
app.use(oakCors());

const randomMessage = () => {
	// mensajes random de navidad
	const messages = [
		'Feliz Navidad',
		'Merry Christmas',
		'Joyeux Noël',
		'Fröhliche Weihnachten',
		'Buon Natale',
		'Feliz Natal',
		'Kala Christ oumeni',
		'Nollaig Shona Dhuit',
		'Nolla illaana'
	];
	return messages[Math.floor(Math.random() * messages.length)];
};
app.use(ctx => {
	// regresar un json
	const message = randomMessage();
	ctx.response.body = { message };
});

await app.listen({ port: 8000 });
