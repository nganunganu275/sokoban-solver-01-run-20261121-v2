import fs from'fs'
let D,L='udlr'
function f(s,A,B){let M={[s]:''},Q=[s]
for(let i=0;i<Q.length;i++)for(let k=0;k<4;k++){let n=Q[i]+D[k]
if(A[n]&&!B.includes(n)&&!(n in M))M[n]=M[Q[i]]+L[k],Q.push(n)}
return M}
function v(A,e,B,G){A[e]=1
let V={[B+'|'+e]:1},Q=[[B,e,'']]
for(let i=0;i<Q.length;i++){let[B,p,o]=Q[i],M=f(p,A,B)
if(B.every(x=>G.includes(x))&&e in M)return o+M[e]
for(let j=0;j<B.length;j++)for(let d=0;d<4;d++){let b=B[j],t=b+D[d],q=b-D[d]
if(A[t]&&t!=e&&!B.includes(t)&&q in M){let E=[...B];E[j]=t;E.sort()
let N=E+'|'+Math.min(...Object.keys(f(b,A,E)))
if(!V[N])V[N]=1,Q.push([E,b,o+M[q]+L[d]])}}}
return''}
function s(X){let W=X.indexOf('\n'),Y=X.replaceAll('\n','')
D=[-W,W,-1,1]
let p=Y.indexOf('@'),o='',u=p
for(let S=0;7*S+1<W;S++)for(let F=0;F<2;F++){let A={},b=[],g=[],e=0,r=F?9:7
for(let y=r-6+F*6;y<=r+F*6;y++)for(let x=7*S+1;x<7*S+7;x++){let i=y*W+x
if(Y[i]&&Y[i]!='#'){A[i]=1;if('$*'.includes(Y[i]))b.push(i);if('.*'.includes(Y[i]))g.push(i);if(y==r)e=i}}
if(!b.length)continue
e+=F?-W:W
while(u<e)o+='r',u++;while(u>e)o+='l',u--
o+=v(A,e,b,g)}
return o}
for(let n=1;n<6;n++){let d='i00'+n,O='/output/'+d,g=''
try{g=s(fs.readFileSync('/input/'+d+'/level.txt')+'')}catch{}
fs.mkdirSync(O,{recursive:!0});fs.writeFileSync(O+'/solution.txt',g+'\n')}
