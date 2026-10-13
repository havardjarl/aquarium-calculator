function aq(o){var k=o.u=='cm'?1/2.54:1,L=o.L*k,W=o.W*k,H=o.H*k,sd=o.sd*k,gap=o.gap*k;
if(!(L>0&&W>0&&H>0)||sd<0||gap<0||sd+gap>=H)return null;
var gross=L*W*H/231,water=L*W*(H-sd-gap)/231,subFt3=L*W*sd/1728,subLb=subFt3*o.dens;
var wpg=o.dt<=5?3:o.dt<=10?4:5,ppg=o.salt?8.55:8.34;
return{gross:gross,water:water,liters:water*3.78541,grossL:gross*3.78541,subLb:subLb,subKg:subLb*0.4536,waterLb:water*ppg,totalLb:water*ppg+subLb,heater:Math.ceil(water*wpg/25)*25,gph:[Math.round(water*4),Math.round(water*6)]}}
function calc(){var g=function(i){return document.getElementById(i)};var r=aq({u:g('u').value,L:+g('L').value,W:+g('W').value,H:+g('H').value,sd:+g('sd').value,gap:+g('gap').value,dens:+g('st').value,dt:+g('dt').value,salt:g('salt').checked});
g('out').innerHTML=r?'<b>Gross volume:</b> '+r.gross.toFixed(1)+' US gal ('+r.grossL.toFixed(0)+' L)<br><b>Actual water:</b> '+r.water.toFixed(1)+' gal ('+r.liters.toFixed(0)+' L)<br><b>Substrate to buy:</b> ~'+r.subLb.toFixed(0)+' lb ('+r.subKg.toFixed(0)+' kg)<br><b>Water + substrate weight:</b> ~'+r.totalLb.toFixed(0)+' lb (excl. glass, rock, stand)<br><b>Heater:</b> ~'+r.heater+' W (rule of thumb)<br><b>Filter flow:</b> '+r.gph[0]+'–'+r.gph[1]+' GPH rated':'Check your inputs: dimensions must be positive and substrate + gap less than height.'}
if(typeof module!='undefined')module.exports=aq;else calc();
