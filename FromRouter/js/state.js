
var current_url=location.pathname.substring(location.pathname.lastIndexOf('/')+1);
var idx,menu_code,banner_code,message_code,tab_code,sub_code;
function show_menu(){
show_banner();
SetTitle("Optus Hybrid GW");
document.getElementById("mainmenu").innerHTML="";
var group_idex=0;
var parent_index=0;
var tabparent_index=0;
var current_index=-1;
var hash=location.hash;
var TabId="";
if(current_url=="mobile_info.htm")current_url="settings.htm";
else if(current_url=="")current_url="home.htm";
for(idx=0;idx<(OptusMenuList.length-1);idx++){
if(OptusMenuList[idx][MENU_LVL]==1&&current_index==-1&&OptusMenuList[idx][MENU_CLASS]==0){parent_index=idx;}
if(OptusMenuList[idx][MENU_LVL]==1&&current_index==-1&&OptusMenuList[idx][MENU_CLASS]==1){group_idex=idx;}
if(OptusMenuList[idx][MENU_URL]==current_url){
current_index=idx;}}
menu_code="";
menu_code+='<nav class="navlst"><div class="navlst-content"><div class="navlst-left">';
menu_code+='<ul>';
for(idx=0;idx<(OptusMenuList.length-1);idx++){
if(OptusMenuList[idx][MENU_LVL]!='1')continue;
if(OptusMenuList[idx][MENU_CLASS]!='0')continue;
menu_code+='<li class="'+((idx==parent_index)?"_active":"")+'" id="'+OptusMenuList[idx][MENU_ID]+'">';
menu_code+='<a href="'+OptusMenuList[idx][MENU_URL]+'">';
menu_code+='<div>'+OptusMenuList[idx][MENU_TITL]+'</div>';
menu_code+='</a></li>';}
menu_code+='</ul>';
menu_code+='</div></div></nav>';
document.getElementById("mainmenu").innerHTML=menu_code;
if(OptusMenuList[current_index][MENU_CLASS]==1){
parent_index=group_idex;}
if(OptusMenuList[current_index][MENU_LVL]==2){
document.getElementById("tabmenu").innerHTML="";
tab_code="";
tab_code+='<ul class="nav-tabs">';
for(idx=(parent_index+1);OptusMenuList[idx][MENU_LVL]!=1;idx++){
if(OptusMenuList[idx][MENU_LVL]=='3')continue;
tab_code+='<li class="'+((idx==current_index)?"_active":"")+'">';
tab_code+='<a href="'+OptusMenuList[idx][MENU_URL]+'">';
tab_code+='<div'+((OptusMenuList[idx][MENU_URL].indexOf("wifi_guest_addl")>=0)?" id=\""+OptusMenuList[idx][MENU_URL].split('.')[0]+"\"":"")+'>'+OptusMenuList[idx][MENU_TITL]+'</div>';
tab_code+='</a></li>';}
tab_code+='</ul>';
document.getElementById("tabmenu").innerHTML=tab_code;}else if(OptusMenuList[current_index][MENU_LVL]==3){
document.getElementById("tabmenu").innerHTML="";
for(idx=(parent_index+1);OptusMenuList[idx][MENU_LVL]!=1;idx++){
if(OptusMenuList[idx][MENU_LVL]==2&&idx<current_index){tabparent_index=idx;}
if(OptusMenuList[idx+1]==null)break;}
tab_code="";
tab_code+='<ul class="nav-tabs">';
for(idx=(parent_index+1);OptusMenuList[idx][MENU_LVL]!=1;idx++){
if(OptusMenuList[idx][MENU_LVL]==2){
tab_code+='<li class="'+((idx==tabparent_index)?"_active":"")+'">';
tab_code+='<a href="'+OptusMenuList[idx][MENU_URL]+'">';
tab_code+='<div'+((OptusMenuList[idx][MENU_URL].indexOf("wifi_guest_addl")>=0)?" id=\""+OptusMenuList[idx][MENU_URL].split('.')[0]+"\"":"")+'>'+OptusMenuList[idx][MENU_TITL]+'</div>';
tab_code+='</a></li>';}
if(OptusMenuList[idx+1]==null)break;}
tab_code+='</ul>';
document.getElementById("tabmenu").innerHTML=tab_code;
sub_code="";
sub_code+='<ul class="nav-tabs">';
for(idx=(tabparent_index+1);OptusMenuList[idx][MENU_LVL]==3;idx++){
if(OptusMenuList[idx][MENU_ID]=="restart")OptusMenuList[idx][MENU_URL]="restart.htm";
sub_code+='<li class="'+((idx==current_index)?"_active":"")+'">';
sub_code+='<a href="'+OptusMenuList[idx][MENU_URL]+'">';
sub_code+='<div>'+OptusMenuList[idx][MENU_TITL]+'</div>';
sub_code+='</a></li>';
if(OptusMenuList[idx+1]==null)break;}
sub_code+='</ul>';
document.getElementById("submenu").innerHTML=sub_code;}}
function replace_wifi_tabname(){
var guest2_modify=getCfg("guest2_modify");
var guest2=getCfg("guest_ssid24g_"+3);
if(guest2_modify=="1"){
if(guest2.length>11)
setIdVal("wifi_guest_addl_2",guest2.slice(0,11)+"...");
else
setIdVal("wifi_guest_addl_2",guest2);}
var guest3_modify=getCfg("guest3_modify");
var guest3=getCfg("guest_ssid24g_"+4);
if(guest3_modify=="1"){
if(guest3.length>11)
setIdVal("wifi_guest_addl_3",guest3.slice(0,11)+"...");
else
setIdVal("wifi_guest_addl_3",guest3);}}
function show_banner(){
banner_code="";
banner_code+='<div class="nav-header">';
banner_code+='<div class="nav-left" style="visibility: hidden;">';
banner_code+='<span id="currtech" style="padding-top: 8px; padding-right: 11px;"></span>';
banner_code+='<ul id="signal-strength" style="padding-right: 10px;">';
banner_code+='<li class="bar_1"><div></div></li>';
banner_code+='<li class="bar_2"><div></div></li>';
banner_code+='<li class="bar_3"><div></div></li>';
banner_code+='<li class="bar_4"><div></div></li>';
banner_code+='<li class="bar_5"><div></div></li>';
banner_code+='</ul>';
banner_code+='<span id="operator" class="optr">YES OPTUS</span>';
banner_code+='<span class="optr">&nbsp;-&nbsp;</span>';
banner_code+='<span id="simstatus"></span>';
banner_code+='<span class="conn">&nbsp;-&nbsp;</span>';
banner_code+='<span id="connection" class="conn"></span>';
banner_code+='</div>';
banner_code+='<div class="nav-headerimage">';
banner_code+='<img src="images/icons/banner.png" width="54" height="26" alt="Optus">';
banner_code+='</div>';
banner_code+='<div class="nav-right" onClick="logout();">';
banner_code+='<span style="padding-right: 14px;">Logged in as: optus </span>';
banner_code+='<button type="submit" class="reset-lineh" style="min-width: 58px; height: 25px; padding: 0px;" onClick="logout();">';
banner_code+='<span class="font2 reset-lineh" style="color: #4F3F0F;">Log out</span>';
banner_code+='</button>';
banner_code+='</div>';
banner_code+='</div>';
document.getElementById("topbanner").innerHTML=banner_code;}
function show_signal(){
var technology=getCfg("currtechnology");
var curr_tech=(technology=="UTRAN")?"3G":"4G";
$("#currtech").html(curr_tech);
for(var i=1;i<=5;i++){
$(".bar_"+i).find("div").removeClass("whitebar");}
var signal=parseInt(getCfg("rscp"));
var rscp=0;
var sim_stste=getCfg("simstate");
if(sim_stste.length>0&&sim_stste!="None"&&sim_stste!="Unknown"&&technology!="None"){
if(curr_tech=="3G"){
if(-105<signal&&signal<=-100){
rscp=1;}else if(-100<signal&&signal<=-95){
rscp=2;}else if(-95<signal&&signal<=-90){
rscp=3;}else if(-90<signal&&signal<=-85){
rscp=4;}else if(signal>=-85){
rscp=5;}}else{
if(123<signal&&signal<=-110){
rscp=1;}else if(-110<signal&&signal<=-105){
rscp=2;}else if(-105<signal&&signal<=-95){
rscp=3;}else if(-95<signal&&signal<=-85){
rscp=4;}else if(signal>=-85){
rscp=5;}}
for(var i=1;i<=rscp;i++){
$(".bar_"+i).find("div").toggleClass("whitebar");}}
var szWanType=getCfg("wan_type");
var typeList=["FTTN/FTTB","Fibre/Cable","FTTN/FTTB","","","","Optus 4G"];
var any_wan_setting=0;
for(var i=0;i<4;i++){
if(getCfg('wan_ipv4_proto'+i)!="")
any_wan_setting++;}
if(any_wan_setting==0){
setIdVal("connection","no connection");}else{
if(dsl_active_idx==-1){
setIdVal("connection","no connection");}else{
if(szWanType=="6"&&sim_stste.length>0&&(sim_stste=="None"||sim_stste=="Unknown")){
setIdVal("connection","no connection");}else{
switch(szWanType){
case"0":
case"1":
case"2":
setIdVal("connection","connection:&nbsp;"+typeList[szWanType]);
$("#currtech").hide();
$("#signal-strength").hide();
break;
case"6":
default:
setIdVal("connection","connection:&nbsp;"+typeList[szWanType]);
$(".conn").hide();
break;}}}}
if(sim_stste=="None"||sim_stste=="Unknown"){
$("#simstatus").html("No SIM card inserted");
$("#currtech").hide();
$(".optr").hide();}else if(sim_stste=="Valid"&&technology!="None"){
$("#simstatus").html("SIM card registered");}else{
$("#currtech").hide();
$(".optr").hide();
if(szWanType=="6"){
setIdVal("connection","no connection");
$("#simstatus").html("SIM card unregistered");}
else
$("#simstatus").html("SIM card inserted");}
$(".nav-left").css("visibility","visible");}
function logout(){
var dLogout=GetCookie("disableLogout");
dLogout=(dLogout)?dLogout:0;
if(dLogout==0){
window.location.href=URLTimeStamp("logout.htm");}}
function helpme(){
window.location.href=URLTimeStamp("optus_help.htm");}