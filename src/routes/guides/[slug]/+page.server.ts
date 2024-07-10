import { redirect } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const id = params.slug;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const guide = await response.json();
    if (response.ok) {
        return { guide };
    }
    throw redirect(303, '/guides')
}
