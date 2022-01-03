
const apiKey = '610e8514c9d243149a0df8033857f0c0';
var topic = 'covid 19';

var url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })
// India cases......
const confirmedCasesIndia = 34922882;
const activeCasesIndia = 145582;
const curedCasesIndia = 34295407;
const deathCasesIndia = 481893;

document.querySelector('#concas').innerHTML = confirmedCasesIndia;
document.querySelector('#actcas').innerHTML = activeCasesIndia;
document.querySelector('#curcas').innerHTML = curedCasesIndia;
document.querySelector('#deatcas').innerHTML = deathCasesIndia;

document.querySelector('#tt1').innerHTML = confirmedCasesIndia;
document.querySelector('#tt2').innerHTML = activeCasesIndia;
document.querySelector('#tt3').innerHTML = curedCasesIndia;
document.querySelector('#tt4').innerHTML = deathCasesIndia;

//wordl cases.......
const confirmedCasesWorld = 290705439;
const activeCasesWorld = 30595576;
const curedCasesWorld = 254647988;
const deathCasesWorld = 5461875;

document.querySelector('#gb-cas').innerHTML = confirmedCasesWorld;
document.querySelector('#gb-dea').innerHTML = activeCasesWorld;
document.querySelector('#gb-rec').innerHTML = curedCasesWorld;
document.querySelector('#gb-act').innerHTML = deathCasesWorld;


//cases by states in India.......
//1.Andaman and Nicobar Islands
const con_1 = 7743;
const act_1 = 24;
const cur_1 = 7590;
const dea_1 = 129;

//2.
const con_2 = 2077486;
const act_2 = 1260;
const cur_2 = 2061729;
const dea_2 = 14497;

//3.
const con_3 = 55343;
const act_3 = 16;
const cur_3 = 55045;
const dea_3 = 282;

//4.
const con_4 = 621071;
const act_4 = 2321;
const cur_4 = 612585;
const dea_4 = 6165;

//5.
const con_5 = 727529;
const act_5 = 1075;
const cur_5 = 714358;
const dea_5 = 12096;

//6.
const con_6 = 66061;
const act_6 = 321;
const cur_6 = 64661;
const dea_6 = 1079;

//7.
const con_7 = 1008756;
const act_7 = 1273;
const cur_7 = 993882;
const dea_7 = 13601;

//8.
const con_8 = 10700;
const act_8 = 9;
const cur_8 = 10687;
const dea_8 = 4;

//9.
const con_9 = 1454121;
const act_9 = 8397;
const cur_9 = 1420615;
const dea_9 = 25109;

//10.
const con_10 = 181570;
const act_10 = 1671;
const cur_10 = 176376;
const dea_10 = 3523;

//11.
const con_11 = 833769;
const act_11 = 4753;
const cur_11 = 818896;
const dea_11 = 10120;

//12.
const con_12 = 774917;
const act_12 = 2423;
const cur_12 = 762430;
const dea_12 = 10064;

//13.
const con_13 = 229016;
const act_13 = 526;
const cur_13 = 224612;
const dea_13 = 3878;

//14.
const con_14 = 341624;
const act_14 = 1429;
const cur_14 = 335665;
const dea_14 = 4530;

//15.
const con_15 = 353785;
const act_15 = 3824;
const cur_15 = 344815;
const dea_15 = 5146;

//16.
const con_16 = 3009557;
const act_16 = 10321;
const cur_16 = 2960890;
const dea_16 = 38346;

//17.
const con_17 = 5252414;
const act_17 = 19714;
const cur_17 = 5184587;
const dea_17 = 48113;

//18.
const con_18 = 22224;
const act_18 = 196;
const cur_18 = 21808;
const dea_18 = 220;

//19.
const con_19 = 10417;
const act_19 = 1;
const cur_19 = 10365;
const dea_19 = 51;

//20.
const con_20 = 794240;
const act_20 = 608;
const cur_20 = 783099;
const dea_20 = 10533;

//21.
const con_21 = 799868;
const act_21 = 45716;
const cur_21 = 612610;
const dea_21 = 141542;

//22.
const con_22 = 125823;
const act_22 = 215;
const cur_22 = 123605;
const dea_22 = 2003;

//23.
const con_23 = 84847;
const act_23 = 75;
const cur_23 = 83288;
const dea_23 = 1484;

//24.
const con_24 = 131901;
const act_24 = 1732;
const cur_24 = 129623;
const dea_24 = 546;

//25.
const con_25 = 32202;
const act_25 = 60;
const cur_25 = 31440;
const dea_25 = 702;

//26.
const con_26 = 1055556;
const act_26 = 1984;
const cur_26 = 1045109;
const dea_26 = 8463;

//27.
const con_27 = 129527;
const act_27 = 150;
const cur_27 = 127496;
const dea_27 = 1881;

//28.
const con_28 = 605409;
const act_28 = 1269;
const cur_28 = 587492;
const dea_28 = 16648;

//29.
const con_29 = 956883;
const act_29 = 1572;
const cur_29 = 946347;
const dea_29 = 8964;

//30.
const con_30 = 32517;
const act_30 = 58;
const cur_30 = 32050;
const dea_30 = 409;

//31.
const con_31 = 2751128;
const act_31 = 9304;
const cur_31 = 2705034;
const dea_31 = 36790;

//32.
const con_32 = 682489;
const act_32 = 3779;
const cur_32 = 674680;
const dea_32 = 4030;

//33.
const con_33 = 85120;
const act_33 = 119;
const cur_33 = 84172;
const dea_33 = 829;

//34.
const con_34 = 345464;
const act_34 = 506;
const cur_34 = 337539;
const dea_34 = 7419;

//35.
const con_35 = 1712537;
const act_35 = 1725;
const cur_35 = 1687896;
const dea_35 = 22916;

//36.
const con_36 = 1649150;
const act_36 = 17038;
const cur_36 = 1612331;
const dea_36 = 19781;

