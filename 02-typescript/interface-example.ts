

interface SomeProps {
	age: number;
	name?: string;
}

class MyComponent implements SomeProps {
	age = 35;
}

const a: SomeProps = { age: 35, name: 'yariv'} ;