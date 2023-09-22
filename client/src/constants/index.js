import { refractor } from "refractor/lib/core.js";
const bigLanguageList = refractor.listLanguages().sort();

export const languages = [
	{ title: "JavaScript", md: "js" },
	{ title: "Python", md: "py" },
	{ title: "Go", md: "go" },
	{ title: "Java", md: "java" },
	{ title: "Kotlin", md: "kt" },
	{ title: "PHP", md: "php" },
	{ title: "C#", md: "cs" },
	{ title: "Swift", md: "swift" },
	{ title: "R", md: "r" },
	{ title: "Ruby", md: "ruby" },
	{ title: "JSON", md: "json" },
	{ title: "C", md: "c" },
	{ title: "C++", md: "cpp" },
	{ title: "TypeScript", md: "ts" },
	{ title: "Scala", md: "scala" },
	{ title: "SQL", md: "sql" },
	{ title: "HTML", md: "html" },
	{ title: "CSS", md: "css" },
	{ title: "Rust", md: "rust" },
	{ title: "React", md: "jsx" },
	{ title: "Shell", md: "bash" },
	{ title: "Perl", md: "perl" }
].sort((a, b) => (a.title > b.title ? 1 : -1));

export const mockData = [
	{
		code: "function multiply(a, b) {\n\treturn a * b\n}",
		description: "A function that takes in two parameters and multiplies them",
		language: "js",
		avatar: "https://i.pravatar.cc/50"
	},
	{
		code: "def add(a, b): \n\treturn a * b\n",
		description: "A function that takes in two parameters and adds them",
		language: "python",
		avatar: "https://i.pravatar.cc/50"
	},
	{
		code: "func subtract(a, b) {\n\treturn a - b\n}",
		description: "A function that takes in two parameters and subtracts them",
		language: "swift",
		avatar: "https://i.pravatar.cc/50"
	},
	{
		code: "func subtract(a, b) {\n\treturn a - b\n}",
		description: "A function that takes in two parameters and subtracts them",
		language: "swift",
		avatar: "https://i.pravatar.cc/50"
	},
	{
		code: "func subtract(a, b) {\n\treturn a - b\n}",
		description: "A function that takes in two parameters and subtracts them",
		language: "swift",
		avatar: "https://i.pravatar.cc/50"
	}
];
