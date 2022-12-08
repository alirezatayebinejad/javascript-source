//types: string - number - boolean - array -
// any(disable type checking) - noImplicitAny (when compiler can't figure the type out it'll be any)
// don't use any!

let myName: string = "Alice";
//you can delete ': string =' ts will figure it out
//but when ts can't understand what will assigned in the future you should delclare type like:
let myVar: number;
myVar = 25;

//types
let myString: string = "Alice";
let myNumber: number = 256.3;
let myBool: boolean = true;

//function input types
function greet(name: string) {
	console.log("Hello, " + name.toUpperCase() + "!!");
}
function getFavoriteNumber(): number {
	return 26;
}
// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
	return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

heros.map((hero): string => {
	return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
	console.log(errmsg);
}
function handleError(errmsg: string): never {
	throw new Error(errmsg);
}

//objects

const User = {
	name: "hitesh",
	email: "hitesh@lco.dev",
	isAvtive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
	return { name: "reactjs", price: 399 };
}
//good way
type User2 = {
	name: string;
	email: string;
	isActive: boolean;
};
function createUser2(user: User2): User2 {
	return { name: "", email: "", isActive: true };
}
createUser2({ name: "", email: "", isActive: true });

type User = {
	readonly _id: string; //can't change
	name: string;
	email: string;
	isActive: boolean;
	credcardDetails?: number;
};

let myUser: User = {
	_id: "1245",
	name: "h",
	email: "h@h.com",
	isActive: false,
};

type cardNumber = {
	cardnumber: string;
};

type cardDate = {
	cardDate: string;
};

type cardDetails = cardNumber &
	cardDate & {
		cvv: number;
	};

myUser.email = "h@gmail.com";
// myUser._id = "asa" //can't do it

//arrays

const superHeros: string[] = [];
superHeros.push("spiderman");
// const heroPower: number[] = []
const heroPower: Array<number> = [];
heroPower.push(2);

type User3 = {
	name: string;
	isActive: boolean;
};
const allUsers: User3[] = [];
allUsers.push({ name: "", isActive: true });

const MLModels: number[][] = [[255, 255, 255], []];
