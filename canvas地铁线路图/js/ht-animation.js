!function(J){"use strict";var Z="ht",C=J[Z],f=C.Default,n="prototype",z=C.DataModel[n],x=C.Data[n],p=null,g=function(j){return"set"+j.charAt(0).toUpperCase()+j.slice(1)};f.getEasing=function(f){var u=p;return f.indexOf(".")>=0?(f=f.split("."),u=c[f[0]][f[1]]):u=c[f],function(F){return u(F,0,1,1)}},f.getCommonEasing=function(M){var R=p;return M.indexOf(".")>=0?(M=M.split("."),R=c[M[0]][M[1]]):R=c[M],R},x.setAnimation=function(f){var X=this._animation;this._animation=f,this.fp("animation",X,f)},x.getAnimation=function(){return this._animation},x.pauseAnimation=function(){this._pauseAnimation=!0,this._pauseTime=Date.now()},x.resumeAnimation=function(){delete this._pauseAnimation},J.requestAnimFrame=function(){return J.requestAnimationFrame||J.webkitRequestAnimationFrame||J.mozRequestAnimationFrame||function(D){J.setTimeout(D,1e3/60)}}();var U=J.requestAnimFrame,Y=J.setInterval;z.setAnimationInterval=function(n){var L=this;L.$2a=n,L.$1a!=p&&(clearInterval(L.$1a),delete L.$1a,L.enableAnimation(n))},z.getAnimationInterval=function(){return this.$2a||"animationFrame"},z.getDataAnimation=function(f){return f.getAnimation()},z.enableAnimation=function(m){var w=this,N=w.getDatas();if(w.$1a==p){m&&w.setAnimationInterval(m),m=w.getAnimationInterval();var D=function(){var i=w.getAnimationInterval();N.each(function(q){var S=w.getDataAnimation(q);if(q.setAnimation(S),S&&!q._pauseAnimation){var D=S.start;q._animationstatus=q._animationstatus||{},q._animationprocess=q._animationprocess||D.slice(0);for(var O=q._animationstatus,K=q._animationprocess,Y=0;Y<K.length;Y++)if(null!=K[Y]){var L;L=O[Y]?O[Y]:O[Y]={$5a:0,$6a:0,$7a:0,$8a:0};var N=S[K[Y]],U=N.property,x=N.accessType,A=N.from,c=N.to,n=N.easing||"Quad.easeOut",k=L.$5a,R=N.frames||60,F=N.repeat||0,W=N.duration,t=N.delay||0,C=N.interval,V=L.$6a,y=N.onUpdate,m=N.onComplete,B=!1,Q=function(){var i;i=W!=p?f.getCommonEasing(n)(Date.now()-L._startTime,A,c-A,W):f.getCommonEasing(n)(k,A,c-A,R),y?y.call(q,i):x?"style"===x?q.s(U,i):"attr"===x?q.a(U,i):"field"===x&&(q[U]=i):q[g(U)](i),B=!0},$=function(){L._startTime==p&&(L._startTime=Date.now());var d=q._pauseTime;d!=p&&(L._startTime+=Date.now()-d),Y==K.length-1&&delete q._pauseTime,C!=p?L.$7a>=C?(L.$7a=0,Q()):L.$7a+=isNaN(i)?16.6666:i:Q()};if(t?L.$8a>=t?$():L.$8a+=isNaN(i)?16.6666:i:$(),B)if(W!=p){if(Date.now()-L._startTime>W)if(F===!0)L._startTime=Date.now();else if(V=L.$6a=V+1,V>F)if(m&&m.call(q),N.next)O[Y]=p,K[Y]=N.next;else{O[Y]=p,K[Y]=p;for(var P=!0,s=0;s<K.length;s++)null!=K[s]&&(P=!1);P&&(q.setAnimation(p),q._animationstatus=p,q._animationprocess=p,q._pauseTime=p)}}else if(k=L.$5a=k+1,k>R)if(F===!0)k=L.$5a=0;else if(V=L.$6a=V+1,V>F)if(m&&m.call(q),N.next)O[Y]=p,K[Y]=N.next;else{O[Y]=p,K[Y]=p;for(var P=!0,s=0;s<K.length;s++)null!=K[s]&&(P=!1);P&&(q.setAnimation(p),q._animationstatus=p,q._animationprocess=p)}}}}),"animationFrame"===i&&w.$1a!=p&&(w.$1a=U(D))};w.$1a="animationFrame"===m?U(D):Y(D,m)}},z.disableAnimation=function(){var y=this,S=y.getAnimationInterval();"animationFrame"===S||clearInterval(y.$1a),delete y.$1a};var c={Linear:function(W,s,E,$){return E*W/$+s},Quad:{easeIn:function(r,V,l,q){return l*(r/=q)*r+V},easeOut:function(N,j,W,t){return-W*(N/=t)*(N-2)+j},easeInOut:function(w,W,l,Q){return(w/=Q/2)<1?l/2*w*w+W:-l/2*(--w*(w-2)-1)+W}},Cubic:{easeIn:function(C,p,u,o){return u*(C/=o)*C*C+p},easeOut:function(U,D,Q,s){return Q*((U=U/s-1)*U*U+1)+D},easeInOut:function(V,w,L,U){return(V/=U/2)<1?L/2*V*V*V+w:L/2*((V-=2)*V*V+2)+w}},Quart:{easeIn:function(r,G,Z,e){return Z*(r/=e)*r*r*r+G},easeOut:function(A,Z,t,D){return-t*((A=A/D-1)*A*A*A-1)+Z},easeInOut:function(W,J,A,L){return(W/=L/2)<1?A/2*W*W*W*W+J:-A/2*((W-=2)*W*W*W-2)+J}},Quint:{easeIn:function(m,g,G,K){return G*(m/=K)*m*m*m*m+g},easeOut:function(c,b,s,Y){return s*((c=c/Y-1)*c*c*c*c+1)+b},easeInOut:function(S,T,z,A){return(S/=A/2)<1?z/2*S*S*S*S*S+T:z/2*((S-=2)*S*S*S*S+2)+T}},Sine:{easeIn:function(X,S,L,G){return-L*Math.cos(X/G*(Math.PI/2))+L+S},easeOut:function(r,G,p,j){return p*Math.sin(r/j*(Math.PI/2))+G},easeInOut:function(i,s,B,$){return-B/2*(Math.cos(Math.PI*i/$)-1)+s}},Expo:{easeIn:function(o,z,H,c){return 0==o?z:H*Math.pow(2,10*(o/c-1))+z},easeOut:function(Y,I,k,S){return Y==S?I+k:k*(-Math.pow(2,-10*Y/S)+1)+I},easeInOut:function(h,E,$,M){return 0==h?E:h==M?E+$:(h/=M/2)<1?$/2*Math.pow(2,10*(h-1))+E:$/2*(-Math.pow(2,-10*--h)+2)+E}},Circ:{easeIn:function(P,e,m,z){return-m*(Math.sqrt(1-(P/=z)*P)-1)+e},easeOut:function(p,f,e,w){return e*Math.sqrt(1-(p=p/w-1)*p)+f},easeInOut:function(Z,n,e,T){return(Z/=T/2)<1?-e/2*(Math.sqrt(1-Z*Z)-1)+n:e/2*(Math.sqrt(1-(Z-=2)*Z)+1)+n}},Elastic:{easeIn:function(w,K,k,e,R,z){var g;return 0==w?K:1==(w/=e)?K+k:("undefined"==typeof z&&(z=.3*e),!R||R<Math.abs(k)?(g=z/4,R=k):g=z/(2*Math.PI)*Math.asin(k/R),-(R*Math.pow(2,10*(w-=1))*Math.sin((w*e-g)*2*Math.PI/z))+K)},easeOut:function(l,f,P,n,X,D){var A;return 0==l?f:1==(l/=n)?f+P:("undefined"==typeof D&&(D=.3*n),!X||X<Math.abs(P)?(X=P,A=D/4):A=D/(2*Math.PI)*Math.asin(P/X),X*Math.pow(2,-10*l)*Math.sin((l*n-A)*2*Math.PI/D)+P+f)},easeInOut:function(G,i,S,B,q,c){var j;return 0==G?i:2==(G/=B/2)?i+S:("undefined"==typeof c&&(c=B*.3*1.5),!q||q<Math.abs(S)?(q=S,j=c/4):j=c/(2*Math.PI)*Math.asin(S/q),1>G?-.5*q*Math.pow(2,10*(G-=1))*Math.sin((G*B-j)*2*Math.PI/c)+i:.5*q*Math.pow(2,-10*(G-=1))*Math.sin((G*B-j)*2*Math.PI/c)+S+i)}},Back:{easeIn:function(t,q,g,G,s){return"undefined"==typeof s&&(s=1.70158),g*(t/=G)*t*((s+1)*t-s)+q},easeOut:function(J,D,h,i,z){return"undefined"==typeof z&&(z=1.70158),h*((J=J/i-1)*J*((z+1)*J+z)+1)+D},easeInOut:function(N,c,e,H,k){return"undefined"==typeof k&&(k=1.70158),(N/=H/2)<1?e/2*N*N*(((k*=1.525)+1)*N-k)+c:e/2*((N-=2)*N*(((k*=1.525)+1)*N+k)+2)+c}},Bounce:{easeIn:function(b,_,Z,n){return Z-c.Bounce.easeOut(n-b,0,Z,n)+_},easeOut:function(V,z,B,X){return(V/=X)<1/2.75?B*7.5625*V*V+z:2/2.75>V?B*(7.5625*(V-=1.5/2.75)*V+.75)+z:2.5/2.75>V?B*(7.5625*(V-=2.25/2.75)*V+.9375)+z:B*(7.5625*(V-=2.625/2.75)*V+.984375)+z},easeInOut:function(S,K,O,v){return v/2>S?.5*c.Bounce.easeIn(2*S,0,O,v)+K:.5*c.Bounce.easeOut(2*S-v,0,O,v)+.5*O+K}}}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);