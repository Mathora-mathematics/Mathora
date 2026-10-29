/* MathsGrove on-page calculator. No eval, Function, network, or data sharing.
   Returns a finite number or throws a clear validation error. */
export function evaluateMath(input){
 const expression=String(input??'').trim().replaceAll('×','*').replaceAll('÷','/').replaceAll('−','-');
 if(!expression||expression.length>80)throw Error('Enter a valid expression (up to 80 characters).');
 const stripped=expression.replace(/(?:\d+(?:\.\d+)?|\.\d+|[+*/^()√-])/g,'');
 if(stripped)throw Error('Only numbers and supported calculator operators can be used.');
 const parts=expression.match(/\d+(?:\.\d+)?|\.\d+|[+*/^()√-]/g)||[];
 let index=0;
 const peek=()=>parts[index];
 const take=()=>parts[index++];
 function primary(){
  if(peek()==='('){take();const v=expressionValue();if(take()!==')')throw Error('Missing closing bracket.');return v}
  const token=take();
  if(token===undefined||!/^(?:\d+(?:\.\d+)?|\.\d+)$/.test(token))throw Error('Expected a number or bracket.');
  return Number(token);
 }
 function power(){const b=primary();if(peek()==='^'){take();return Math.pow(b,unary())}return b}
 function unary(){if(peek()==='-'){take();return -unary()}if(peek()==='+'){take();return unary()}if(peek()==='√'){take();const x=unary();if(x<0)throw Error('Square root of a negative number is not real.');return Math.sqrt(x)}return power()}
 function term(){let v=unary();while(peek()==='*'||peek()==='/'){const op=take(),rhs=unary();if(op==='/'&&rhs===0)throw Error('Division by zero is not permitted.');v=op==='*'?v*rhs:v/rhs}return v}
 function expressionValue(){let v=term();while(peek()==='+'||peek()==='-'){const op=take(),rhs=term();v=op==='+'?v+rhs:v-rhs}return v}
 const result=expressionValue();if(index!==parts.length)throw Error('Unexpected input in expression.');if(!Number.isFinite(result))throw Error('The result is not a finite real number.');return result;
}
