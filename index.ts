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
		'Nolla illaana',
		'Nollaig Shona',
		'Nollaig Chridheil',
		'Nollaig Shona Daoibh',
		'Un simple mensaje de Navidad',
		'Feliz Navidad y próspero año nuevo',
		'Que fastidio ponerse a pensar en un mensaje de Navidad',
		'Oa',
		'Merry Xmas',
		'Sabias que en la Navidad se comen 2.000 millones de polvorones',
		'Sabias que en la Navidad se comen 2.000 millones de turrones',
		'Sabias que en la Navidad se comen 2.000 millones de mazapanes',
		'Un mensaje de Navidad para ti',
		'Algunos dicen que la Navidad es una época de paz, amor y alegría. Otros dicen que es una época de compras, compras y compras',
		'Ya es navidad?',
		'Ya huele a navidad?',
		'Ya se escucha navidad?',
		'Ya se siente navidad?',
		'Ya se ve navidad?',
		'Happy HO HO HO',
		'Happy HO HO HO to you',
		'Viviendo entre frio y cobijas',
		'Felices Fiestas!',
		'Feliz Crisis-mas'
	];
	return messages[Math.floor(Math.random() * messages.length)];
};
app.use(ctx => {
	// regresar un json
	const message = randomMessage();
	ctx.response.body = { message };
});

await app.listen({ port: 8000 });
