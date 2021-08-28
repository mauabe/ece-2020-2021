export function uuid(){
	let s4 = () => {
    let num = (((1 + Math.random()) * 0x10000));
    return(num.toString(16).substring(1, 5));
	};
	return (s4() + s4() + "-" + s4());
}