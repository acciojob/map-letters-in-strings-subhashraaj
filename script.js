let str="dodo";
let ans={};
for (let i=0;i<=str.length;i++){
	if(ans(str[i])){
		ans[str[i]].push(i)
	}
	else{
		ans[str[i]]=[i]
	}
}
console.log(ans)
