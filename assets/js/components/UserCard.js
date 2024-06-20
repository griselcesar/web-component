export default class UserCard extends HTMLElement {
	constructor(){
		super()
		const name = this.getAttribute('name') || "Nameless";
		const html = `<h2>${name.toUpperCase()}</h2>`

		this.style = `
		color:var(--color-5);
		background:var(--color-3);
		border:2px solid var(--color-4);
		display:block;
		width:250px;
		text-align:center;
		padding:1rem;
		margin: 1rem;
		border-radius:1rem;
		box-shadow:0 2px 3px var(--color-1);
		`;

		this.insertAdjacentHTML("beforeend",html)
	}

}