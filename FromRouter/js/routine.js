var dns_list=[];
dns_list=[
{"idx":"0","name":"Optus","ip4_1st":"--","ip4_2nd":"--","ip6_1st":"--","ip6_2nd":"--"},
{"idx":"1","name":"OpenDNS","ip4_1st":"208.67.222.222","ip4_2nd":"208.67.220.220","ip6_1st":"","ip6_2nd":""},
{"idx":"2","name":"OpenDNS1","ip4_1st":"206.67.222.220","ip4_2nd":"206.67.222.222","ip6_1st":"","ip6_2nd":""},
{"idx":"3","name":"Google","ip4_1st":"8.8.8.8","ip4_2nd":"8.8.4.4","ip6_1st":"","ip6_2nd":""},
{"idx":"4","name":"Cloudflare","ip4_1st":"1.1.1.1","ip4_2nd":"1.0.0.1","ip6_1st":"","ip6_2nd":""},
{"idx":"5","name":"Cloudflare 2","ip4_1st":"1.1.1.2","ip4_2nd":"1.1.1.3","ip6_1st":"","ip6_2nd":""},
{"idx":"6","name":"NTT","ip4_1st":"129.250.35.250","ip4_2nd":"129.250.35.251","ip6_1st":"","ip6_2nd":""},
{"idx":"7","name":"Ultradns","ip4_1st":"156.154.70.1","ip4_2nd":"156.154.71.1","ip6_1st":"","ip6_2nd":""},
{"idx":"8","name":"Quad9","ip4_1st":"9.9.9.9","ip4_2nd":"149.112.112.112","ip6_1st":"","ip6_2nd":""},
{"idx":"9","name":"Verisign","ip4_1st":"64.6.64.6","ip4_2nd":"64.6.65.6","ip6_1st":"","ip6_2nd":""},
{"idx":"10","name":"Comodo","ip4_1st":"8.26.56.26","ip4_2nd":"8.20.247.20","ip6_1st":"","ip6_2nd":""},
{"idx":"11","name":"GreenTeam","ip4_1st":"81.218.119.11","ip4_2nd":"209.88.198.133","ip6_1st":"","ip6_2nd":""},
{"idx":"12","name":"SafeDNS","ip4_1st":"195.46.39.39","ip4_2nd":"195.46.39.40","ip6_1st":"","ip6_2nd":""},
{"idx":"13","name":"Dyn","ip4_1st":"216.146.35.35","ip4_2nd":"216.146.36.36","ip6_1st":"","ip6_2nd":""},
{"idx":"14","name":"AlternateDNS","ip4_1st":"198.101.242.72","ip4_2nd":"23.253.163.53","ip6_1st":"","ip6_2nd":""},
{"idx":"15","name":"UncensoredDNS","ip4_1st":"91.239.100.100","ip4_2nd":"89.233.43.71","ip6_1st":"","ip6_2nd":""},
{"idx":"16","name":"Neustar","ip4_1st":"156.154.70.1","ip4_2nd":"156.154.71.1","ip6_1st":"","ip6_2nd":""},
{"idx":"17","name":"FourthEstate","ip4_1st":"45.77.165.194","ip4_2nd":"45.32.36.36","ip6_1st":"","ip6_2nd":""},
{"idx":"18","name":"CleanBrowsing","ip4_1st":"185.228.168.9","ip4_2nd":"185.228.169.9","ip6_1st":"","ip6_2nd":""},
{"idx":"19","name":"GetFlix","ip4_1st":"54.252.183.4","ip4_2nd":"54.252.183.5","ip6_1st":"","ip6_2nd":""},
{"idx":"20","name":"Accelerated IT","ip4_1st":"84.200.69.80","ip4_2nd":"84.200.70.40","ip6_1st":"","ip6_2nd":""}];
function isNvalidChar(s)
{
var expChar=/^[0-9a-zA-Z\s`~\!@#\$%\^&\*\(\)\-\=_\+\[\]\\\{\}\|\:;\'\"\,\.\/<>\?]+$/g;
if(expChar.test(s)==false){
return true;}
return false;}
function isWhiteSpace(s)
{
return/\s/g.test(s);}
function isBlank(s)
{
var i,c;
for(i=0;i<s.length;i++){
switch(s.charAt(i)){
case' ':
case'\n':
case'\t':
break;
default:
return false;}}
return true;}
function isIncludeDQuote(s)
{
var i,c;
for(i=0;i<s.length;i++){
c=s.charAt(i);
if((c=='"')){
return true;}}
return false;}
function isIncludeBSlash(s)
{
var i,c;
for(i=0;i<s.length;i++){
c=s.charAt(i);
if((c=='\\')){
return true;}}
return false;}
function isBlank_Zero(s)
{
var i,c;
for(i=0;i<s.length;i++){
switch(s.charAt(i)){
case' ':
case'\n':
case'\t':
case'0':
break;
default:
return false;}}
return true;}
function isMetacharacter(s)
{
var i;
for(i=0;i<s.length;i++){
switch(s.charAt(i)){
case'|':
case'&':
case';':
case'(':
case')':
case'<':
case'>':
case' ':
case' ':
case'`':
return true;}}
return false;}
function isNvaliduser(s)
{
var j,x=0;
for(var i=0;i<s.length;i++){
var c=s.charAt(i);
switch(s.charAt(i)){
case'<':
case'>':
case'&':
case' ':
return true;}}
return false;}
function isNValidInt(s)
{
var i,c;
var str=s.toString();
if(str.match(/^0+\d/)){
return true;}
for(i=0;i<s.length;i++){
c=s.charCodeAt(i);
if((c<48)||(c>57)){
return true;}}
return false;}
function isNegInt(s)
{
if(s<0)
return true;
else
return false;}
function isNValidIP(s)
{
if(isBlank(s)||isNaN(s)||isNValidInt(s)||isNegInt(s)||(s<0)||(s>255))
return true;
else
return false;}
function isNValidFirstIP(_s)
{
var s=parseInt(_s,10);
if(isBlank(''+_s)||isNaN(''+_s)||isNValidInt(s)||isNegInt(s)||(s<1)||(s>223))
return true;
else
return false;}
function isNValidLastIP(s)
{
if(isBlank(s)||isNaN(s)||isNValidInt(s)||isNegInt(s)||(s<1)||(s>254))
return true;
else
return false;}
function isNValidIP_p(s,l,u)
{
if(isBlank(s)||isNaN(s)||isNValidInt(s)||isNegInt(s)||(s<l)||(s>u))
return true;
else
return false;}
function isNValidMask(s)
{
if(typeof(s)=="string"){
s=parseInt(s);}
switch(s){
case 255:
case 254:
case 252:
case 248:
case 240:
case 224:
case 192:
case 128:
case 0:
return false;}
var str=s.toString();
if(str.match(/^0+\d/)){
return true;}
return true;}
function isNValidLastMask(s)
{
if(typeof(s)=="string"){
s=parseInt(s);}
switch(s){
case 252:
case 248:
case 240:
case 224:
case 192:
case 128:
case 0:
return false;}
var str=s.toString();
if(str.match(/^0+\d/)){
return true;}
return true;}
function IP2long()
{
var ip=[];
var obj=IP2long.arguments;
if(obj.length==1){
if("string"==typeof(obj[0])){
ip=obj[0].split(".");}else{
if(obj.length!=4){return-1;}
for(var i=0;i<4;i++){
ip[i]=(obj[0][i].value)?obj[0][i].value:obj[0][i];}}}else{
ip=obj;}
if(ip.length!=4){
return-1;}
for(var i=0;i<4;i++){
ip[i]=parseInt(ip[i],10);}
var iplong=(Number(ip[0])*0x1000000)+(Number(ip[1])*0x10000)+(Number(ip[2])*0x100)+Number(ip[3]);
return iplong;}
function BrocastLong(_ip,_msk)
{
var ip=_ip.split(".");
var msk=_msk.split(".");
if((ip.length!=4)||(msk.length!=4)){return 0;}
for(var i=0;i<4;i++){ip[i]=ip[i]|(~msk[i]&0xFF);}
return IP2long(ip[0],ip[1],ip[2],ip[3]);}
function isNValidSubnetMask1(_obj)
{
var msk=[];
if("string"==typeof(_obj)){
msk=_obj.split(".");}
else{
if(_obj.length!=4){
return 1;}
for(var i=0;i<_obj.length;i++){
msk[i]=(_obj[i].value)?_obj[i].value:_obj[i];}}
if(msk.length!=4){
return 1;}
for(var i=0;i<4;i++){
if(isNValidInt(msk[i])){
return(i+1);}}
var ulMask=IP2long(msk[0],msk[1],msk[2],msk[3]);
var j=0;
var ok=0;
if(Number(msk[0])!=255){return 1;}
if(isNValidMask(msk[1])){return 2;}
if(isNValidMask(msk[2])){return 3;}
if(isNValidLastMask(msk[3])){return 4;}
for(var i=31;i>=0;i--){
j=j+Math.pow(2,i);
if(ulMask==j)ok=1;}
return(ok)?0:1;}
function isNValidSubnetMask(s1,s2,s3,s4)
{
var ulMask=Number(s1)*0x1000000+Number(s2)*0x10000+Number(s3)*0x100+Number(s4);
var i,j=0,ok=0;
if(s1!=255){
return true;}
if(isNValidMask(s2)||isNValidMask(s3)||isNValidLastMask(s4)){
return true;}
for(i=31;i>=0;i--){
j=j+Math.pow(2,i);
if(ulMask==j){
ok=1;}}
return(ok)?false:true;}
function isNValidAddress(_obj)
{
var ip=[];
if("string"==typeof(_obj)){
ip=_obj.split(".");}
else{
if(_obj.length!=4){
return 1;}
for(var i=0;i<_obj.length;i++){
ip[i]=_obj[i].value;}}
if(ip.length!=4){
return 1;}
if(isNValidFirstIP(ip[0])){return 1;}
if(isNValidIP(ip[1])){return 2;}
if(isNValidIP(ip[2])){return 3;}
if(isNValidLastIP(ip[3])){return 4;}
return 0;}
function isNValidPort(s)
{
if(s.charAt(0)=='0')
return true;
if(isBlank(s)||isNaN(s)||isNValidInt(s)||isNegInt(s)||(s<1)||(s>65535))
return true;
else
return false;}
function isNValidPortAllowZero(s)
{
if(isBlank(s)||isNaN(s)||isNValidInt(s)||isNegInt(s)||(s<0)||(s>65535))
return true;
else
return false;}
function is2Hex(s)
{
var i,j,x=0;
for(i=0;i<s.length;i++){
j=parseInt(s.charAt(i),16);
if((j>=0)&&(j<=16)){
if(x==1){return true;}
x=1;}}
return false;}
function isHex(s)
{
var j,i;
for(i=0;i<s.length;i++){
var c=s.charAt(i);
j=parseInt(c,16);
if(j<0||j>=16||isNaN(j)){
return false;}}
return true;}
function isNValid(s)
{
if(isBlank(s)||is2Hex(s))
return true;
else
return false;}
function isNValids(s)
{
if(isBlank(s)||isHex(s))
return true;
else
return false;}
function isValidMacAddress(address)
{
var c='';
var i=0,j=0;
if(address=='ff:ff:ff:ff:ff:ff'){
return false;}
if(address=='00:00:00:00:00:00'||address=='0:0:0:0:0:0'){
return false;}
addrParts=address.split(':');
if(addrParts.length!=6){
return false;}
for(i=0;i<6;i++){
for(j=0;j<addrParts[i].length;j++){
c=addrParts[i].toLowerCase().charAt(j);
if((c>='0'&&c<='9')||(c>='a'&&c<='f'))
continue;
else
return false;}}
var m2=parseInt(addrParts[0].charAt(1),16);
if((m2&1)==1){
return false;}
return true;}
function isNValidNum(s)
{
if(isBlank(s)||isNaN(s)||isNValidInt(s)||isNegInt(s))
return true;
else
return false;}
function isNValidNumRange(s,min,max)
{
if(isNValidNum(s)){
return true;}
var v=parseInt(s,10);
if(v<min||v>max){
return true;}
return false;}
function isNValidUnicastIP(s)
{
if(isBlank(s)||isNaN(s)||isNValidInt(s)||isNegInt(s)||(s<=0||s>=224))
return true;
else
return false;}
function isValidIP(addr,_nobypass)
{
var sub_addr;
var net_id;
var host_id;
var nobypass=_nobypass;
if(addr.search(/^\d{1,3}\.\d{1,3}\.\d{1,3}\./)==-1){
return false;}
sub_addr=addr.split(/\./);
if(sub_addr.length<4){
return false;}
for(var x=0;x<4;x++){
if(sub_addr[x].match(/^0+\d/))
return false;}
if(sub_addr[3]=="*"){
sub_addr[3]="1";}
else{
if(isNaN(sub_addr[3])==true){
return false;}}
for(var x=0;x<4;x++){
if(sub_addr[x]>0xff){
return false;}}
if(sub_addr[0]<128){
if(sub_addr[0]==0||sub_addr[0]==127){
return false;}
host_id=sub_addr[1]*0x10000+sub_addr[2]*0x100+sub_addr[3]*0x1;
if(!nobypass&&(host_id==0||host_id==0xffffff)){
return false;}}
else if(sub_addr[0]<192){
host_id=sub_addr[2]*0x100+sub_addr[3]*0x1;
if(!nobypass&&(host_id==0||host_id==0xffff)){
return false;}}
else if(sub_addr[0]<224){
host_id=sub_addr[3]*0x1;
if(!nobypass&&(host_id==0||host_id==0xff)){
return false;}}
else{
return false;}
return true;}
function isValidIPAddress()
{
var net_id;
var host_id;
var args=isValidIPAddress.arguments;
if(args.length<1){
return false;}
switch(args.length){
case 4:
if(isNValidIP(args[0].value)==true){return 1;}
if(isNValidIP(args[1].value)==true){return 2;}
if(isNValidIP(args[2].value)==true){return 3;}
if(isNValidIP(args[3].value)==true){return 4;}
if(args[0].value>0xff||args[1].value>0xff||args[2].value>0xff||args[3].value>0xff){
return 1;}
if(args[0].value<128){
if(args[0].value==0||args[0].value==127){
return 1;}
host_id=parseInt(args[1].value,10)*0x10000+parseInt(args[2].value,10)*0x100+parseInt(args[3].value,10)*0x1;
if(host_id==0||host_id==0xffffff){
return 2;}}
else if(args[0].value<192){
host_id=parseInt(args[2].value,10)*0x100+parseInt(args[3].value,10)*0x1;
if(host_id==0||host_id==0xffff){
return 3;}}
else if(args[0].value<224){
host_id=args[3].value*0x1;
if(host_id==0||host_id==0xff){
return 4;}}
else{
return 1;}
if(args[0].value==10&&args[1].value==1&&args[2].value==1&&args[3].value==1){
return 1;}
break;
default:
for(var i=0;i<args.length;i++){
if(intCheck(args[i],10,0,255)==false){
return(i+1);}}}
return 0;}
function isValidIPAddress3(a1,a2,a3,a4,m1,m2,m3,m4)
{
var net_id;
var host_id;
if(isNValidIP(a1)==true){return 1;}
if(isNValidIP(a2)==true){return 2;}
if(isNValidIP(a3)==true){return 3;}
if(isNValidIP(a4)==true){return 4;}
net_id=parseInt(m1,10)*0x1000000+parseInt(m2,10)*0x10000+parseInt(m3,10)*0x100+parseInt(m4,10)*0x1;
host_id=parseInt(a1,10)*0x1000000+parseInt(a2,10)*0x10000+parseInt(a3,10)*0x100+parseInt(a4,10)*0x1;
if((host_id|net_id)==-1){
return 4;}
if((host_id&net_id)==host_id){
return 4;}
return 0;}
function IpToLong(_ip)
{
return IP2long(_ip);}
function IPSubNet(_ip,_mask)
{
var ip=IpToLong(_ip);
var mask=IpToLong(_mask);
var subnet=ip&mask;
if(subnet<0){subnet+=0x100000000;}
return subnet;}
function IPBrocastNet(_ip,_mask)
{
var ip=IpToLong(_ip);
var mask=IpToLong(_mask);
var subnet=ip&mask;
if(subnet<0){
subnet+=0x100000000;}
return(subnet+(0xffffffff^mask));}
function isPrintable(_s,_lt)
{
var c,len=_s.length-1;
for(var i=0;i<=len;i++){
c=_s.charCodeAt(i);
if((c<32)||(c>126)){
return false;}
if(!_lt){
if((i==0)&&(c==32)){
return false;}
if((i==len)&&(c==32)){
return false;}}}
return true;}
function isNValidSpecialChar(_s)
{
var src=new String(_s);
var lst=new String("\\\"\';");
var i,n,c,tmpS;
n=lst.length;
for(i=0;i<n;i++){
c=lst.charAt(i);
tmpS=new String(c);
if(src.indexOf(tmpS)!=-1){
return true;}}
return false;}
function isInvalidDomain(s,name)
{
var src=new String(s);
var lst=new String(" /:*?\"<>|`=+\[];,");
var i,n;
n=lst.length;
for(i=0;i<n;i++){
var c=lst.charAt(i);
var tmpS=new String(c);
if(src.indexOf(tmpS)!=-1){
alert(name+": \\ , \" , \/ and \' are invalid.");
return true;}}
return false;}
function isValidURL(string){
var res=string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
return(res!==null);}
function LenToMask(_len)
{
var ip="0.0.0.0";
var i=0,j=0;
var len,mod,mask;
ip=ip.split(".");
len=_len/8;
mod=_len%8;
for(i=0;i<4;i++){
if(len>0){
ip[i]=255;
len=len-1;}
else if(mod==0){
ip[i]=0;}
else{
ip[i]=0;
for(j=7;j>0;j--){
if(mod>0){
ip[i]=ip[i]+Math.pow(2,j);
mod=mod-1;}}}}
mask=ip.join(".");
return mask;}
function MaskToLen(_mask)
{
var ulmask=IpToLong(_mask);
var j,tmp=0;
for(j=31;j>0;j--){
tmp+=Math.pow(2,j);
if(ulmask==tmp){
break;}}
var len=32-j;
return len;}
function valid_netmask(netmask_obj,_full_bits)
{
var default_netmask="255.255.255.0";
var wrong_netmask=0;
var netmask_num=inet_network(netmask_obj.value);
var msk=netmask_obj.value.split(".");
if(netmask_num<=0){
wrong_netmask=1;}
else{
var test_num=~netmask_num;
while(test_num!=0){
if((test_num+1)%2==0){
test_num=(test_num+1)/2-1;}
else{
wrong_netmask=1;
break;}}}
if(typeof(_full_bits)!="boolean"){
_full_bits=false;}
if(_full_bits==false){
if(msk[3]=="255"){
wrong_netmask=1;}}
if(wrong_netmask==1){
if(netmask_obj.value=="")
AlertM("970000");
else
alert(netmask_obj.value+getLangM("971017"));
netmask_obj.value=default_netmask;
netmask_obj.focus();
netmask_obj.select();
return false;}
return true;}
function validate_string(string_obj,flag)
{
if(string_obj.value.charAt(0)=='"'){
if(flag!="noalert"){
AlertM(970002);}
string_obj.value="";
string_obj.focus();
return false;}
else{
invalid_char="";
for(var i=0;i<string_obj.value.length;++i){
if(string_obj.value.charAt(i)<' '||string_obj.value.charAt(i)>'~'){
invalid_char=invalid_char+string_obj.value.charAt(i);}}
if(invalid_char!=""){
if(flag!="noalert"){
alert(getLangM(970025)+" '"+invalid_char+"' !");}
string_obj.value="";
string_obj.focus();
return false;}}
return true;}
function inet_network(ip_str)
{
if(!ip_str){
return-1;}
var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
if(re.test(ip_str)){
var v1=parseInt(RegExp.$1);
var v2=parseInt(RegExp.$2);
var v3=parseInt(RegExp.$3);
var v4=parseInt(RegExp.$4);
if(v1<256&&v2<256&&v3<256&&v4<256){
return v1*256*256*256+v2*256*256+v3*256+v4;}}
return-2;}
function check_pwd_policy_rule(_text)
{
var expPwdRule=/^[0-9a-zA-Z\!\@\#\$\%\^&\*\(\)_\+\|~\-\=\\`\{\}\[\]\:\";\'<>\?\,\.\/]+$/g;
if(!expPwdRule.test(_text)){
return 1;}
var nLenSpecial=0,nLenNumber=0,nLenLower=0,nLenUpper=0,nLenIdentical=0;
var szTmp="",szPrevious="";
var expPwdRuleSpecial=/^[\!\@\#\$\%\^\&\*\(\)\_\+\|\~\-\=\\\`\{\}\[\]\:\"\;\'<>\?\,\.\/]+$/;
var expPwdRuleNumber=new RegExp('^[0-9]+$');
var expPwdRuleLower=new RegExp('^[a-z]+$');
var expPwdRuleUpper=new RegExp('^[A-Z]+$');
for(var ki=0;ki<_text.length;ki++){
szTmp=_text.charAt(ki);
if(expPwdRuleSpecial.test(szTmp)){
nLenSpecial++;}
else if(expPwdRuleNumber.test(szTmp)){
nLenNumber++;}
else if(expPwdRuleLower.test(szTmp)){
nLenLower++;}
else if(expPwdRuleUpper.test(szTmp)){
nLenUpper++;}
if(szPrevious===szTmp){
nLenIdentical++;
if(nLenIdentical>=2){
break;}}
else if(nLenIdentical>0){
nLenIdentical=0;}
szPrevious=szTmp;}
if(nLenIdentical>=2){
return 6;}
if(nLenSpecial===0){
return 2;}
if(nLenNumber===0){
return 3;}
if(nLenLower===0){
return 4;}
if(nLenUpper===0){
return 5;}
return 0;}
function validate_psk(psk_obj,no_policy)
{
var psk_length=psk_obj.value.length;
if(psk_length<8||psk_length>64){
AlertM("970022");
psk_obj.focus();
psk_obj.select();
return false;}
if(psk_length>=8&&psk_length<=63){
if(isWhiteSpace(psk_obj.value)){
AlertM("150076");
psk_obj.focus();
psk_obj.select();
return false;}
if(no_policy===true){
if(!isPrintable(psk_obj.value,1)){
AlertM("970022");
psk_obj.focus();
psk_obj.select();
return false;}}
else{
var nRtnCode=check_pwd_policy_rule(psk_obj.value);
if(nRtnCode>0){
switch(nRtnCode){
case 2:
AlertM("150071");
break;
case 3:
AlertM("150072");
break;
case 4:
AlertM("150073");
break;
case 5:
AlertM("150074");
break;
case 6:
AlertM("150075");
break;
case 1:
default:
AlertM("150070");
break;}
psk_obj.focus();
psk_obj.select();
return false;}}}
if(psk_length===64){
if(!isHex(psk_obj.value)){
AlertM("970022");
psk_obj.focus();
psk_obj.select();
return false;}}
return true;}
function validate_timerange(o,p)
{
if(o instanceof jQuery)
o=$(o)[0];
if(o.value.length==0){
o.value="00";}
else if(o.value.length==1){
o.value="0"+o.value;}
if(o.value.charAt(0)<'0'||o.value.charAt(0)>'9'){
o.value="00";}
else if(o.value.charAt(1)<'0'||o.value.charAt(1)>'9'){
o.value="00";}
else if(p==0||p==2){
if(o.value>23){
AlertM("970006");
o.value="00";
o.focus();
o.select();
return false;}
return true;}
else
{
if(o.value>59){
AlertM("970007");
o.value="00";
o.focus();
o.select();
return false;}
return true;}
return true;}
function IP_MAC_address_join(szFieldId,nBeginNum,nElements,szJoin)
{
var ki,nEndIndex,szAddress;
nEndIndex=nBeginNum+nElements;
szAddress=$I(szFieldId+nBeginNum.toString()).value;
for(ki=(nBeginNum+1);ki<nEndIndex;ki++){
szAddress+=(szJoin+$I(szFieldId+ki.toString()).value);}
return szAddress;}
function is_functionButton(e)
{
var keyCode=e.keyCode;
if(e.which==0){
switch(keyCode){
case 27:
case 35:
case 36:
case 37:
case 39:
case 45:
case 46:
return true;}}
switch(keyCode){
case 8:
case 9:
case 46:
return true;
default:
if(keyCode>=112&&keyCode<=123)
return true;}
return false;}
function is_number(o,event){
keyPressed=event.keyCode?event.keyCode:event.which;
if(is_functionButton(event)){
return true;}
if(keyPressed>47&&keyPressed<58||
(keyPressed>95&&keyPressed<106)){
return true;}
else{
return false;}}
function is_ipaddr(o,event){
keyPressed=event.keyCode?event.keyCode:event.which;
if(is_functionButton(event)){
return true;}
if((keyPressed>47&&keyPressed<58)){
j=0;
for(i=0;i<o.value.length;i++){
if(o.value.charAt(i)=='.'){
j++;}}
if(j<3&&i>=3){
if(o.value.charAt(i-3)!='.'&&o.value.charAt(i-2)!='.'&&o.value.charAt(i-1)!='.'){
o.value=o.value+'.';}}
return true;}
else if(keyPressed==46){
j=0;
for(i=0;i<o.value.length;i++){
if(o.value.charAt(i)=='.'){
j++;}}
if(o.value.charAt(i-1)=='.'||j==3){
return false;}
return true;}else if(keyPressed==13){
return true;}
return false;}
function is_string(o,event){
keyPressed=event.keyCode?event.keyCode:event.which;
if(keyPressed>=0&&keyPressed<=126)
return true;
else{
AlertM(970028);
return false;}}
function is_hwaddr(o,event){
keyPressed=event.keyCode?event.keyCode:event.which;
if(is_functionButton(event)){
return true;}
if((keyPressed>47&&keyPressed<58)||(keyPressed>64&&keyPressed<71)||(keyPressed>96&&keyPressed<103)){
j=0;
for(i=0;i<o.value.length;i++){
if(o.value.charAt(i)==':'){
j++;}}
if(j<5&&i>=2){
if(o.value.charAt(i-2)!=':'&&o.value.charAt(i-1)!=':'){
o.value=o.value+':';}}
return true;}
else if(keyPressed==58||keyPressed==13){
return true;}
else{
return false;}}
function ipv6_shortening(ipv6_address)
{
if(ipv6_address.length==0){
return ipv6_address;}
var ki,nCount=0;
var tmp1=ipv6_address;
var newAddr="";
for(ki=0;ki<tmp1.length;ki++){
if(tmp1.charAt(ki)==":"){
newAddr+=tmp1.charAt(ki);
nCount=0;}
else if(tmp1.charAt(ki)=="0"){
if(nCount==1){
newAddr+=tmp1.charAt(ki);}}
else{
newAddr+=tmp1.charAt(ki);
nCount=1;}}
if(newAddr.length>2){
tmp1=newAddr;
newAddr="";
nCount=0;
for(ki=0;ki<(tmp1.length);ki++){
if(tmp1.charAt(ki)==":"){
if(nCount<2){
newAddr+=tmp1.charAt(ki);
nCount++;}
else if(nCount==3){
newAddr+=tmp1.charAt(ki);
nCount++}
else if(nCount>3){
if(tmp1.charAt(ki-1)==":"){
newAddr+="0";}
newAddr+=tmp1.charAt(ki);}}
else{
newAddr+=tmp1.charAt(ki);
if(nCount==1){
nCount=0;}
if(nCount==2){
nCount++;}}}}
nCount=tmp1=null;
return newAddr;}
function valid_IP(obj_name,obj_flag){
var A_class_start=inet_network("1.0.0.0");
var A_class_end=inet_network("126.255.255.255");
var B_class_start=inet_network("127.0.0.0");
var B_class_end=inet_network("127.255.255.255");
var C_class_start=inet_network("128.0.0.0");
var C_class_end=inet_network("255.255.255.255");
var ip_obj=obj_name;
var ip_num=inet_network(ip_obj.value);
if(obj_flag=="DNS"&&ip_num==-1){
return true;}
if(obj_flag=="GW"&&ip_num==-1){
return true;}
if(ip_num>A_class_start&&ip_num<A_class_end){
return true;}else if(ip_num>B_class_start&&ip_num<B_class_end){
if(ip_obj.value=="")
alert("Fields cannot be blank.");
else
alert(ip_obj.value+" is not a valid IP address!");
ip_obj.focus();
ip_obj.select();
return false;}else if(ip_num>C_class_start&&ip_num<C_class_end){
return true;}else{
if(ip_obj.value=="")
alert("Fields cannot be blank.");
else
alert(ip_obj.value+" is not a valid IP address!");
ip_obj.focus();
ip_obj.select();
return false;}}
function isPrivateIP(_val){
var A_class_start=inet_network("10.0.0.0");
var A_class_end=inet_network("10.255.255.255");
var B_class_start=inet_network("172.16.0.0");
var B_class_end=inet_network("172.31.255.255");
var C_class_start=inet_network("192.168.0.0");
var C_class_end=inet_network("192.168.255.255");
var ip_num=inet_network(_val);
if(ip_num>A_class_start&&ip_num<A_class_end)
return true;
else if(ip_num>B_class_start&&ip_num<B_class_end)
return true;
else if(ip_num>C_class_start&&ip_num<C_class_end)
return true;
else
return false;}
function getSubnet(ip_str,mask_str,flag){
var ip_num,mask_num;
var sub_head,sub_end;
if(!ip_str||!mask_str)
return-1;
if(isMask(mask_str)<=0)
return-2;
if(!flag||(flag!="head"&&flag!="end"))
flag="head";
ip_num=inet_network(ip_str);
mask_num=inet_network(mask_str);
if(ip_num<0||mask_num<0)
return-3;
sub_head=ip_num-(ip_num&~mask_num);
sub_end=sub_head+~mask_num;
if(flag=="head")
return sub_head;
else
return sub_end;}
function isMask(ip_str){
if(!ip_str)
return 0;
var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
if(re.test(ip_str)){
var v1=parseInt(RegExp.$1);
var v2=parseInt(RegExp.$2);
var v3=parseInt(RegExp.$3);
var v4=parseInt(RegExp.$4);
if(v4==255||!(v4==0||(is1to0(v4)&&v1==255&&v2==255&&v3==255)))
return-4;
if(!(v3==0||(is1to0(v3)&&v1==255&&v2==255)))
return-3;
if(!(v2==0||(is1to0(v2)&&v1==255)))
return-2;
if(!is1to0(v1))
return-1;}
return 1;}
function is1to0(num){
if(typeof(num)!="number")
return 0;
switch(num){
case 255:
case 254:
case 252:
case 248:
case 240:
case 224:
case 192:
case 128:
return 1;
default:
return 0;}}
function subnetPrefix(ip,orig,count){
r='';
c=0;
for(i=0;i<ip.length;i++){
if(ip.charAt(i)=='.')
c++;
if(c==count){break;}
r=r+ip.charAt(i);}
c=0;
for(i=0;i<orig.length;i++){
if(orig.charAt(i)=='.'){
c++;}
if(c>=count)
r=r+orig.charAt(i);}
return(r);}
function subnetPostfix(ip,num,count){
r='';
orig="";
c=0;
for(i=0;i<ip.length;i++){
if(ip.charAt(i)=='.'){c++;}
r=r+ip.charAt(i);
if(c==count){break;}}
c=0;
orig=String(num);
for(i=0;i<orig.length;i++){
r=r+orig.charAt(i);}
return(r);}
function validate_range(o,_min,_max){
if(isNaN(o.value)){
alert('Please enter a value between '+_min+' to '+_max);
o.focus();
o.select();
return false;}
if(_min>_max){
var tmpNum="";
tmpNum=_min;
_min=_max;
_max=tmpNum;}
if(o.value<_min||o.value>_max){
alert('Please enter a value between '+_min+' to '+_max);
o.focus();
o.select();
return false;}else{
o.value=str2val(o.value);
if(o.value==""){o.value="0";}
return true;}}
function str2val(v){
for(i=0;i<v.length;i++){
if(v.charAt(i)!='0')
break;}
return v.substring(i);}
function ipFilterZero(ip_str){
var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
if(re.test(ip_str)){
var v1=parseInt(RegExp.$1);
var v2=parseInt(RegExp.$2);
var v3=parseInt(RegExp.$3);
var v4=parseInt(RegExp.$4);
return v1+"."+v2+"."+v3+"."+v4;}
return-2;}
function valid_IP_form(obj,flag){
if(obj.value==""){
return true;}else if(flag==0){
if(!validate_ipaddr_final(obj,obj.name)){
obj.focus();
obj.select();
return false;}else{
return true;}}else if(flag==1){
var strIP=obj.value;
var re=new RegExp("^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$","gi");
if(!validate_ipaddr_final(obj,obj.name)){
obj.focus();
obj.select();
return false;}
if(obj.name=="sr_ipaddr_x_0"&&re.test(strIP)){
if((RegExp.$1>0)&&(RegExp.$1<127)){
document.form.sr_netmask_x_0.value="255.0.0.0";}else if((RegExp.$1>127)&&(RegExp.$1<192)){
document.form.sr_netmask_x_0.value="255.255.0.0";}else if((RegExp.$1>191)&&(RegExp.$1<224)){
document.form.sr_netmask_x_0.value="255.255.255.0";}else{
document.form.sr_netmask_x_0.value="0.0.0.0";}}else if(obj.name=="wan_ipaddr_x"&&re.test(strIP)){
if((RegExp.$1>0)&&(RegExp.$1<127)){
document.form.wan_netmask_x.value="255.0.0.0";}else if((RegExp.$1>127)&&(RegExp.$1<192)){
document.form.wan_netmask_x.value="255.255.0.0";}else if((RegExp.$1>191)&&(RegExp.$1<224)){
document.form.wan_netmask_x.value="255.255.255.0";}else{
document.form.wan_netmask_x.value="0.0.0.0";}}else if(obj.name=="lan_ipaddr"&&re.test(strIP)){
if((RegExp.$1>0)&&(RegExp.$1<127)){
document.form.lan_netmask.value="255.0.0.0";}else if((RegExp.$1>127)&&(RegExp.$1<192)){
document.form.lan_netmask.value="255.255.0.0";}else if((RegExp.$1>191)&&(RegExp.$1<224)){
document.form.lan_netmask.value="255.255.255.0";}else{
document.form.lan_netmask.value="0.0.0.0";}}
return true;}else if(flag==2){
if(obj.value.search("/")==-1){
if(!validate_ipaddr_final(obj,obj.name)){
obj.focus();
obj.select();
return false;}else{
return true;}}else{
if(obj.value.split("/").length>2){
alert(obj.value+' is not a valid IP address!');
obj.value="";
obj.focus();
obj.select();
return false;}else{
if(obj.value.split("/")[1]==""||obj.value.split("/")[1]==0||obj.value.split("/")[1]>30){
alert(obj.value+' is not a valid IP address!');
obj.value="";
obj.focus();
obj.select();
return false;}else{
var IP_tmp=obj.value;
obj.value=obj.value.split("/")[0];
if(!validate_ipaddr_final(obj,obj.name)){
obj.focus();
obj.select();
return false;}else{
obj.value=IP_tmp;
return true;}}}}}else{
return false;}}
function validate_ipaddr_final(o,v){
var f=document.form;
var num=-1;
var pos=0;
if(o.value.length==0){
switch(v){
case'dhcp_start':
case'dhcp_end':
case'wan_ipaddr_x':
case'dhcp1_start':
case'dhcp1_end':
case'lan_ipaddr':
case'lan_netmask':
case'lan1_ipaddr':
case'lan1_netmask':
case'wl_radius_ipaddr':
case'hs_radius_ipaddr':
AlertM(970003);
if(v=='wan_ipaddr_x'){
f.wan_ipaddr_x.value="10.1.1.1";
f.wan_netmask_x.value="255.0.0.0";}else if(v=='lan_ipaddr'){
var CURRENT_LanIP4='192.168.0.1';
var DEF_LanIP4='192.168.0.1';
f.lan_ipaddr.value=DEF_LanIP4;
f.lan_netmask.value="255.255.255.0";}else if(v=='lan1_ipaddr'){
f.lan1_ipaddr.value="192.168.2.1";
f.lan1_netmask.value="255.255.255.0";}else if(v=='lan_netmask'){
f.lan_netmask.value="255.255.255.0";}else if(v=='lan1_netmask'){
f.lan1_netmask.value="255.255.255.0";}
o.focus();
o.select();
return false;
default:
return true;}}
if(v=='wan_ipaddr_x'&&f.wan_netmask_x.value==""){
f.wan_netmask_x.value="255.255.255.0";}
for(var i=0;i<o.value.length;++i){
var c=o.value.charAt(i);
if(c>='0'&&c<='9'){
if(num==-1){
num=(c-'0');}else{
num=num*10+(c-'0');}}else{
if(num<0||num>255||c!='.'){
alert(o.value+' is not a valid IP address!');
o.value="";
o.focus();
o.select();
return false;}
if(pos==0)
v1=num;
else if(pos==1)
v2=num;
else if(pos==2)
v3=num;
num=-1;
++pos;}}
if(pos!=3||num<0||num>255){
alert(o.value+' is not a valid IP address!');
o.value="";
o.focus();
o.select();
return false;}else{
v4=num;}
switch(v){
case'dhcp_start':
case'dhcp_end':
case'wan_ipaddr_x':
case'dhcp1_start':
case'dhcp1_end':
case'lan_ipaddr':
case'lan1_ipaddr':
case'staticip':
case'wl_radius_ipaddr':
case'dhcp_dns1_x':
case'dhcp_gateway_x':
case'dhcp_wins_x':
case'sip_server':
if(v!='wan_ipaddr_x'){
if(v1==255||v4==255||v1==0||v4==0||v1==127||v1==224){
alert(o.value+' is not a valid IP address!');
o.value="";
o.focus();
o.select();
return false;}}
if(wan_route_x=="IP_Bridged"&&wan_nat_x=="0"){
break;}
if(sw_mode=="2"||sw_mode=="3"){
break;}
if(requireWANIP(v)){
if(v=='wan_ipaddr_x'){
if(matchSubnet2(o.value,f.wan_netmask_x,f.lan_ipaddr.value,f.lan_netmask)){
f.wan_ipaddr_x.value="10.1.1.1";
f.wan_netmask_x.value="255.0.0.0";
o.focus();
o.select();
return false;}}
if(v=='lan_ipaddr'){
var CURRENT_LanIP4='192.168.0.1';
var DEF_LanIP4='192.168.0.1';
if(matchSubnet2(o.value,f.lan_netmask,f.wan_ipaddr_x.value,f.wan_netmask_x)){
f.lan_ipaddr.value=DEF_LanIP4;
f.lan_netmask.value="255.255.255.0";
o.focus();
o.select();
return false;}}}
break;
case'lan_netmask':
case'lan1_netmask':
if(v1==255&&v2==255&&v3==255&&v4==255){
alert(o.value+' is not a valid IP address!');
o.value="";
o.focus();
o.select();
return false;}}
o.value=v1+"."+v2+"."+v3+"."+v4;
if((v1>0)&&(v1<127))mask="255.0.0.0";
else if((v1>127)&&(v1<192))mask="255.255.0.0";
else if((v1>191)&&(v1<224))mask="255.255.255.0";
else mask="0.0.0.0";
if(v=='wan_ipaddr_x'&&f.wan_netmask_x.value==""){
f.wan_netmask_x.value=mask;}else if(v=='lan_ipaddr'&&f.lan_netmask.value==""){
f.lan_netmask.value=mask;}else if(v=='dhcp_start'){
if(!matchSubnet(f.lan_ipaddr.value,f.dhcp_start.value,3)){
alert(o.value+' is not a valid IP address!');
o.focus();
o.select();
return false;}}else if(v=='dhcp_end'){
if(!matchSubnet(f.lan_ipaddr.value,f.dhcp_end.value,3)){
alert(o.value+' is not a valid IP address!');
o.focus();
o.select();
return false;}}else if(v=='lan1_ipaddr'){
if(f.lan1_netmask.value==""){
f.lan1_netmask.value=mask;}}else if(v=='dhcp1_start'){
if(!matchSubnet(f.lan1_ipaddr.value,f.dhcp1_start.value,3)){
alert(o.value+' is not a valid IP address!');
o.focus();
o.select();
return false;}}else if(v=='dhcp1_end'){
if(!matchSubnet(f.lan1_ipaddr.value,f.dhcp1_end.value,3)){
alert(o.value+' is not a valid IP address!');
o.focus();
o.select();
return false;}}
return true;}
function requireWANIP(v){
switch(v){
case'wan_ipaddr_x':
case'wan_netmask_x':
case'lan_ipaddr':
case'lan_netmask':
case'lan1_ipaddr':
case'lan1_netmask':
var f=document.form;
switch(f.wan_proto.value){
case'static':
return 1;
case'pppoe':
if(inet_network(f.wan_ipaddr_x.value)){
return 1;}
break;
case'pptp':
case'l2tp':
if(f.wan_ipaddr_x.value!='0.0.0.0'){
return 1;}}}
return 0;}
function validate_each_port(o,num,min,max){
if(num<min||num>max){
alert(o.value+'is not a valid port number.');
return false;}else{
if(o.value==""){
o.value="0";}
return true;}}
function openLink(s){
if(s=='x_DDNSServer'){
var f=document.form;
if(f.ddns_server_x.value.indexOf("WWW.DYNDNS.ORG")!=-1){
tourl="https://account.dyn.com/services/zones/svc/add.html?_add_dns=c&trial=standarddns";}else{
switch(f.ddns_server_x.value){
case'WWW.TZO.COM':
tourl="https://controlpanel.tzo.com/cgi-bin/tzopanel.exe";
break;
case'WWW.ZONEEDIT.COM':
tourl="http://www.zoneedit.com/";
break;
case'WWW.DNSOMATIC.COM':
tourl="http://dnsomatic.com/create/";
break;
case'WWW.TUNNELBROKER.NET':
tourl="http://www.tunnelbroker.net/register.php";
break;
case'WWW.ASUS.COM':
tourl="";
break;
case'WWW.NO-IP.COM':
tourl="http://www.no-ip.com/newUser.php";
break;
default:
if(tourl=""){
link=window.open(tourl,"DDNSLink","toolbar=yes,location=yes,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=no,width=640,height=480");}}}}else if(s=='x_NTPServer1'){
tourl="http://support.ntp.org/bin/view/Main/WebHome";
link=window.open(tourl,"NTPLink","toolbar=yes,location=yes,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=no,width=640,height=480");}}
function is_clock(o,event){
keyPressed=event.keyCode?event.keyCode:event.which;
if(is_functionButton(event)){
return true;}
j=0;
for(i=0;i<o.value.length;i++){
if(o.value.charAt(i)==':'){
j++;}}
if(keyPressed>47&&keyPressed<58){
if(j==0&&i>=2){
o.value=o.value+':';}
return true;}else if(keyPressed==58&&j==0){
return true;}else{
return false;}}
function is_hexadecimal(o,event){
keyPressed=event.keyCode?event.keyCode:event.which;
if(is_functionButton(event)){
return true;}
if((keyPressed>47)&&(keyPressed<58)){
return true;}else if((keyPressed>64)&&(keyPressed<71)){
return true;}else if((keyPressed>96)&&(keyPressed<103)){
return true;}else if(keyPressed==13){
return true;}
return false;}
function is_ascii(o,event){
keyPressed=event.keyCode?event.keyCode:event.which;
if(is_functionButton(event)){
return true;}
if((keyPressed>47)&&(keyPressed<58)){
return true;}else if((keyPressed>64)&&(keyPressed<71)){
return true;}else if((keyPressed>96)&&(keyPressed<103)){
return true;}else if(keyPressed==13){
return true;}
return false;}
function validate_string_ssid(o){
var c;
var flag=0;
if(o.value==""){
alert('Fields cannot be blank.');
o.focus();
return false;}
for(var i=0;i<o.value.length;++i){
c=o.value.charCodeAt(i);
if(validate_ssidchar(c)){
alert('SSID cannot contain the character \" '+o.value.charAt(i)+' \".');
o.value="";
o.focus();
o.select();
return false;}
if(c!=32){
flag++;}}
if(flag==0){
alert('Fields cannot be blank.');
return false;}
return true;}
function validate_ssidchar(ch){
if((ch>=32)&&(ch<=126)){
return false;}
return true;}
if(!Array.prototype.indexOf){
Array.prototype.indexOf=function(elt){
var len=this.length>>>0;
var from=Number(arguments[1])||0;
from=(from<0)?
Math.ceil(from):
Math.floor(from);
if(from<0)
from+=len;
for(;from<len;from++){
if(from in this&&
this[from]===elt)
return from;}
return-1;};}
var ip4_format=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;
var ip6_format_subnet=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
var ip6_format=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
function ValidateHostname(inputText){
var hostformat='';
hostformat=/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;
if(inputText.match(hostformat)){
return true;}else{
return false;}}