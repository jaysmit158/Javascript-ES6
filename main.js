const inputForm = document.querySelector('.search-input');
const svg = document.querySelector('.icon-search');
            
const headerPrimary = document.getElementsByClassName('header-primary')[0];
const productLink = document.getElementsByClassName('productlink')[0];
const supportLink = document.getElementsByClassName('supportlink')[0];
const aboutLink = document.getElementsByClassName('aboutlink')[0];
const contactLink = document.getElementsByClassName('contactlink')[0];
const productNav = document.getElementsByClassName('nav-secondary')[0];
const sub = document.getElementsByClassName('sub');

const aboutHeading= document.querySelector('#aboutmenu h2');

const commercialMenu = document.getElementById('commercialmenu');
const commercialSub = document.getElementById('commercialsub');

const industrialMenu = document.getElementById('industrialmenu');
const industrialSub = document.getElementById('industrialsub');

const foodserviceMenu = document.getElementById('foodservicemenu');
const foodserviceSub = document.getElementById('foodservicesub');

const marineMenu = document.getElementById('marinemenu');
const marineSub = document.getElementById('marinesub');

const packagedsystemMenu = document.getElementById('packagedsystemmenu');
const packagedsystemSub = document.getElementById('packagedsystemsub');

const productCategories = [productNav, commercialSub, industrialSub, foodserviceSub, marineSub, packagedsystemSub];

const electricLo = document.getElementsByClassName('electricLo');
const electricHi = document.getElementsByClassName('electricHi');
const gas = document.getElementsByClassName('gas');
const steam = document.getElementsByClassName('steam');
const indirect = document.getElementsByClassName('indirect');
const storage = document.getElementsByClassName('storage');
const specialPurpose = document.getElementsByClassName('specialpurpose');
const marine = document.getElementsByClassName('marine');
const elements = document.getElementsByClassName('elements');

const supportMenu = document.getElementById('supportmenu');
const aboutMenu = document.getElementById('aboutmenu');
const contactMenu = document.getElementById('contactmenu');
const resourcetab = document.getElementById('resourcetab');
const supporttab = document.getElementById('supporttab');
const infolists = document.getElementsByClassName('info-lists');
const socialtab = document.getElementById('socialtab');
const newstab = document.getElementById('newstab');
const comapnytab = document.getElementById('companytab');
const socialtab = document.getElementById('socialtab');
const contacttab = document.getElementById('contacttab');


const initialStyle = () => {
    productNav.style.backgroundColor = "white";
    productNav.style.color = "black";
}

/***************************** Input search field ************************************/
inputForm.style.display = "none";
            svg.onclick = () => {
                inputForm.style.display == "inline-block" ? inputForm.style.display = "none" : 
                inputForm.style.display = "inline-block"; 
               }
            headerPrimary.onmouseleave = () => {
                inputForm.style.display = 'none';
            }  
/***************************** Fixed Header ************************************/

window.onscroll = changePos;

const changePos = () => {
    let header = document.getElementsByClassName("sectionSelection")[0];
    if (window.pageYOffset > 345 && window.screen.width > 1025) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.background = "#003EB1";
    } else if (window.pageYOffset < 345 && window.screen.width > 1025)  {
        header.style.position = "fixed";
        header.style.bottom = "0vh";
        header.style.top = "";
        header.style.background = "rgba(0,61,166,0.65)";
    } else {
        header.style.position = "static";
        // header.style.bottom = "0vh";
        header.style.left = "auto";
        header.style.width = "100%";
    }
}
/******************************** Product Link *****************************/
productLink.onclick = () => {
    
    productNav.style.display == 'block' ? productNav.style.display = "none" : productNav.style.display = "block"; 
    for (let i = 0; i < sub.length; i++) {
        sub[i].style.display = "none";
    }
    
}

/********************************* Support Link ****************************/
supportLink.onclick = () => {
    for (let i = 0; i < productCategories.length; i++) {
        productCategories[i].style.display = "none";
    }
    supportMenu.style.display == 'block' ? supportMenu.style.display = "none" : supportMenu.style.display = "block"; 
    productNav.style.display = "none";
    aboutMenu.style.display = 'none';
    contactMenu.style.display = "none";

}

resourcetab.onmouseenter = () => {
    infolists[0].style.display = "block";
    infolists[1].style.display = "none";
}
supporttab.onmouseenter = () => {
    infolists[1].style.display = "block";
    infolists[0].style.display = "none";
}

/********************************* About Link **********************************/

aboutLink.onclick = () => {
    for (let i = 0; i < productCategories.length; i++) {
        productCategories[i].style.display = "none";
    }
    aboutMenu.style.display == 'block' ? aboutMenu.style.display = "none" : aboutMenu.style.display = "block"; 
    productNav.style.display = "none";
    supportMenu.style.display = 'none';
    contactMenu.style.display = "none";
}

socialtab.onmouseenter = () => {
    infolists[2].style.display = "block";
    for (let i = 3; i < infolists.length; i++) {
        infolists[i].style.display = "none";
    }
}

newstab.onmouseenter = () => {
    for (let i = 0; i < infolists.length; i++) {
       infolists[i].style.display = "none"; 
    }
}

companytab.onmouseenter = () => {
    infolists[3].style.display = "block";
    for (let i = 0; i < 3; i++) {
        infolists[i].style.display = "none";
    }
}

careerstab.onmouseenter = () => {
    for (let i = 0; i < infolists.length; i++) {
       infolists[i].style.display = "none"; 
    }
}

/********************************* Contact Link **********************************/

contactLink.onclick = () => {
    for (let i = 0; i < productCategories.length; i++) {
        productCategories[i].style.display = "none";
    }
    contactMenu.style.display == 'block' ? contactMenu.style.display = "none" : contactMenu.style.display = "block"; 
    productNav.style.display = "none";
    supportMenu.style.display = 'none';
    aboutMenu.style.display = "none";
}

contacttab.onmouseenter = () => {
    infolists[4].style.display = "block";
}

/******************************** Primary Header ******************************/
    
headerPrimary.onmouseleave = () => {
    productNav.style.display = "none";
    supportMenu.style.display = "none";
    aboutMenu.style.display = "none";
    contactMenu.style.display = "none";
    initialStyle();
    for (let i = 0; i < infolists.length; i++) {
        infolists[i].style.display = "none";
    }
}

/****************************** Commercial Sub Related **************************/

commercialMenu.onmouseenter = () =>  {
    commercialSub.style.display = "block";
    industrialSub.style.display = "none";
    foodserviceSub.style.display = "none";
    marineSub.style.display = "none";
    packagedsystemSub.style.display = "none";
    productNav.style.backgroundColor = "#2a358c";
    productNav.style.color = "#fff";
}

commercialSub.onmouseleave  = () =>  {
    commercialSub.style.display = "none";
    // productNav.style.display = "none";
    initialStyle();
}

for (let i = 0; i < electricLo.length; i+=2) {
    electricLo[i].onmouseenter = () => {
        electricLo[i+1].style.display = "inline"; 
        electricHi[i+1].style.display = "none";
        gas[i+1].style.display = "none";
        steam[i+1].style.display = "none";
        indirect[i+1].style.display = "none";
        elements[i+1].style.display = "none";
        specialPurpose[i+1].style.display = "none";

        electricLo[i].style.color = "black";
        electricHi[i].style.color = "rgba(128,128,128,0.7)";
        gas[i].style.color = "rgba(128,128,128,0.7)";
        steam[i].style.color = "rgba(128,128,128,0.7)";
        indirect[i].style.color = "rgba(128,128,128,0.7)";
        elements[i].style.color = "rgba(128,128,128,0.7)";
        specialPurpose[i].style.color = "rgba(128,128,128,0.7)";
        
    }
}

for (let i = 0; i < electricHi.length; i+=2) {
    electricHi[i].onmouseenter = () => {
        electricHi[i+1].style.display = "inline";
        electricLo[i+1].style.display = "none";
        gas[i+1].style.display = "none";
        steam[i+1].style.display = "none";
        indirect[i+1].style.display = "none";
        elements[i+1].style.display = "none";
        specialPurpose[i+1].style.display = "none";

        electricHi[i].style.color = "black";
        electricLo[i].style.color = "rgba(128,128,128,0.7)";
        gas[i].style.color = "rgba(128,128,128,0.7)";
        steam[i].style.color = "rgba(128,128,128,0.7)";
        indirect[i].style.color = "rgba(128,128,128,0.7)";
        elements[i].style.color = "rgba(128,128,128,0.7)";
        specialPurpose[i].style.color = "rgba(128,128,128,0.7)";
    }
}

for (let i = 0; i < gas.length; i +=2) {
    gas[i].onmouseenter = () => {
        gas[i+1].style.display = "inline";
        electricLo[i+1].style.display = "none";
        electricHi[i+1].style.display = "none";
        steam[i+1].style.display = "none";
        indirect[i+1].style.display = "none";
        elements[i+1].style.display = "none";
        specialPurpose[i+1].style.display = "none";
        
        gas[i].style.color = "black";
        electricHi[i].style.color = "rgba(128,128,128,0.7)";
        electricLo[i].style.color = "rgba(128,128,128,0.7)";
        steam[i].style.color = "rgba(128,128,128,0.7)";
        indirect[i].style.color = "rgba(128,128,128,0.7)";
        elements[i].style.color = "rgba(128,128,128,0.7)";
        specialPurpose[i].style.color = "rgba(128,128,128,0.7)";
    }
}

for (let i = 0; i < specialPurpose.length; i+=1) {
    specialPurpose[i].onmouseenter = () => {
        electricLo[i+1].style.display = "none";
        electricHi[i+1].style.display = "none";
        gas[i+1].style.display = "none";
        steam[i+1].style.display = "none";
        indirect[i+1].style.display = "none";
        elements[i+1].style.display = "none";
        specialPurpose[i+1].style.display = "inline";

        specialPurpose[i].style.color = "black";
        gas[i].style.color = "rgba(128,128,128,0.7)";
        electricHi[i].style.color = "rgba(128,128,128,0.7)";
        electricLo[i].style.color = "rgba(128,128,128,0.7)";
        steam[i].style.color = "rgba(128,128,128,0.7)";
        indirect[i].style.color = "rgba(128,128,128,0.7)";
        elements[i].style.color = "rgba(128,128,128,0.7)";
        
    }
}

for (let i = 0; i < steam.length; i+=2) {
    steam[i].onmouseenter = () => {
        steam[i+1].style.display = "inline";
        electricLo[i+1].style.display = "none";
        electricHi[i+1].style.display = "none";
        gas[i+1].style.display = "none";
        indirect[i+1].style.display = "none";
        elements[i+1].style.display = "none";
        specialPurpose[i+1].style.display = "none";

        steam[i].style.color = "black";
        specialPurpose[i].style.color = "rgba(128,128,128,0.7)";
        gas[i].style.color = "rgba(128,128,128,0.7)";
        electricHi[i].style.color = "rgba(128,128,128,0.7)";
        electricLo[i].style.color = "rgba(128,128,128,0.7)";
        indirect[i].style.color = "rgba(128,128,128,0.7)";
        elements[i].style.color = "rgba(128,128,128,0.7)";
    }
}

for (let i = 0; i < indirect.length; i+=2) {
    indirect[i].onmouseenter = () => {
        indirect[i+1].style.display = "inline";
        electricLo[i+1].style.display = "none";
        electricHi[i+1].style.display = "none";
        specialPurpose[i+1].style.display = "none";
        gas[i+1].style.display = "none";
        steam[i+1].style.display = "none";
        elements[i+1].style.display = "none";

        indirect[i].style.color = "black";
        steam[i].style.color = "rgba(128,128,128,0.7)";
        specialPurpose[i].style.color = "rgba(128,128,128,0.7)";
        gas[i].style.color = "rgba(128,128,128,0.7)";
        electricHi[i].style.color = "rgba(128,128,128,0.7)";
        electricLo[i].style.color = "rgba(128,128,128,0.7)";
        elements[i].style.color = "rgba(128,128,128,0.7)";
    }
}

for (let i = 0; i < elements.length; i+=2) {
    elements[i].onmouseenter = () => {
        elements[i+1].style.display = "inline";
        electricLo[i+1].style.display = "none";
        electricHi[i+1].style.display = "none";
        gas[i+1].style.display = "none";
        steam[i+1].style.display = "none";
        indirect[i+1].style.display = "none";
        specialPurpose[i+1].style.display = "none";

        elements[i].style.color = "black";
        indirect[i].style.color = "rgba(128,128,128,0.7)";
        steam[i].style.color = "rgba(128,128,128,0.7)";
        specialPurpose[i].style.color = "rgba(128,128,128,0.7)";
        gas[i].style.color = "rgba(128,128,128,0.7)";
        electricHi[i].style.color = "rgba(128,128,128,0.7)";
        electricLo[i].style.color = "rgba(128,128,128,0.7)";  
    }
}


/***************************** Industrial Sub Related ***************************/

industrialMenu.onmouseenter = () =>  {
    industrialSub.style.display = "block";
    productNav.style.backgroundColor = "#6d6d6d";
    productNav.style.color = "#fff";
    foodserviceSub.style.display = "none";
    marineSub.style.display = "none";
    packagedsystemSub.style.display = "none";
    commercialSub.style.display = "none";
}

industrialSub.onmouseleave  = () =>  {
    industrialSub.style.display = "none";
    // productNav.style.display = "none";
    initialStyle();
}

/***************************** Food Service Sub Related ***************************/

foodserviceMenu.onmouseenter = () =>  {
    foodserviceSub.style.display = "block";
    productNav.style.backgroundColor = "#f26722";
    productNav.style.color = "#fff";
    industrialSub.style.display = "none";
    marineSub.style.display = "none";
    packagedsystemSub.style.display = "none";
    commercialSub.style.display = "none";

}

foodserviceSub.onmouseleave  = () =>  {
    foodserviceSub.style.display = "none";
    // productNav.style.display = "none";
    initialStyle();
}


/***************************** Marine Sub Related ***************************/


marineMenu.onmouseenter = () =>  {
    marineSub.style.display = "block";
    productNav.style.backgroundColor = "#d22026";
    productNav.style.color = "#fff";
    industrialSub.style.display = "none";
    foodserviceSub.style.display = "none";
    packagedsystemSub.style.display = "none";
    commercialSub.style.display = "none";
}

marineSub.onmouseleave  = () =>  {
    marineSub.style.display = "none";
    // productNav.style.display = "none";
    initialStyle();
}

// **************************** Packaged Systems Sub Related **************************


packagedsystemMenu.onmouseenter = () =>  {
    packagedsystemSub.style.display = "block";
    productNav.style.backgroundColor = "#108542";
    productNav.style.color = "#fff";
    industrialSub.style.display = "none";
    foodserviceSub.style.display = "none";
    commercialSub.style.display = "none";
    marineSub.style.display = "none";
}

packagedsystemSub.onmouseleave  = () =>  {
    packagedsystemSub.style.display = "none";
    // productNav.style.display = "none";
    initialStyle();
}

/***************************** Product Hover Functionality ************************/

//Electric Low Capacity

const modelE = document.querySelectorAll('.modelE');
const modelHEHSE = document.querySelectorAll('.modelHEHSE');
const modelPBX = document.querySelectorAll('.modelPBX');
const modelCE25 = document.querySelectorAll('.modelCE25');
const modelCE110 = document.querySelectorAll('.modelCE110');
const modelTankless = document.querySelectorAll('.modelTankless');
const modelJ1 = document.querySelector('#modelJ1');
const modelJ25 = document.querySelector('#modelJ25');

// //Electric Hight Capacity

const modelJ = document.querySelector('#modelJ');
const modelJTX = document.querySelector('#modelJTX');
const modelSE = document.querySelectorAll('.modelSE');
const modelHXTX = document.querySelectorAll('.modelHXTX');
const modelSHH = document.querySelectorAll('.modelSHH');

// //Gas Fired

const modelNX = document.querySelectorAll('.modelNX');
const modelNXT = document.querySelectorAll('.modelNXT');
const modelDGX = document.querySelector('#modelDGX');
const modelPT = document.querySelector('#modelPT');
const modelGSE = document.querySelectorAll('.modelGSE');

// //Steam Fired

const modelST = document.querySelectorAll('.modelST');
const modelSTX = document.querySelectorAll('.modelSTX');
const modelPS = document.querySelectorAll('.modelPS');
const modelF = document.querySelectorAll('.modelF');

// //Indirect

const modelBWX = document.querySelectorAll('.modelBWX');
const modelBW = document.querySelectorAll('.modelBW');
const modelTransflow = document.querySelectorAll('.modelTransflow');
const modelSLN = document.querySelectorAll('.modelSLN');
const modelBWP = document.querySelectorAll('.modelBWP');
const modelBWXP = document.querySelectorAll('.modelBWXP');

// //Storage

const modelTK = document.querySelectorAll('.modelTK');
const modelBuffer =  document.querySelectorAll('.modelBuffer');

// //Special Purpose

const modelCR = document.querySelectorAll('.modelCR');
const modelER = document.querySelector('#modelER');
const modelV = document.querySelector('#modelV');
const modelETX = document.querySelector('#modelETX');
const modelHD = document.querySelector('#modelHD');
const modelD = document.querySelector('#modelD');
const modelEMV = document.querySelector('#modelEMV');
const packagedSkid = document.querySelector('#packagedSkid');

// //Marine

const modelME = document.querySelector('#modelME');
const modelMSH = document.querySelector('#modelMSH');
const modelMSE = document.querySelector('#modelMSE');
const modelMHXTX = document.querySelector('#modelMHXTX');
const model177 = document.querySelector('#model177');
const integratedSkid = document.querySelector('#integratedSkid');

// //Elements and Exchangers

const immersionHeaters = document.querySelectorAll('.immersionHeaters');
const heatingCoils = document.querySelectorAll('.heatingCoils');
const sstp = document.querySelectorAll('.sstp');

const image = document.querySelectorAll('.image-wrapper');
const marineImage = document.querySelector('#marine-image');


for (let i = 0; i < modelE.length; i++) {
    modelE[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_E.png">';

    }
    modelE[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelHEHSE.length; i++) {
    modelHEHSE[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_HEHSE.png">';

    }
    modelHEHSE[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelPBX.length; i++) {
    modelPBX[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_PBX.png">';

    }
    modelPBX[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelCE25.length; i++) {
    modelCE25[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_CE25.png">';

    }
    modelCE25[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelCE110.length; i++) {
    modelCE110[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_CE110.png">';

    }
    modelCE110[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelTankless.length; i++) {
    modelTankless[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_Tankless.png">';

    }
    modelTankless[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

modelJ1.onmouseenter = () => {
    image[2].innerHTML = '<img src="/_img/models/Model_J1.png">';
}
modelJ1.onmouseleave = () => {
    image[2].innerHTML = '';
}

modelJ25.onmouseenter = () => {
    image[2].innerHTML = '<img src="/_img/models/Model_J25.png">';
}
modelJ25.onmouseleave = () => {
    image[2].innerHTML = '';
}

modelJ.onmouseenter = () => {
    image[2].innerHTML = '<img src="/_img/models/Model_J.png">';
}
modelJ.onmouseleave = () => {
    image[2].innerHTML = '';
}

modelJTX.onmouseenter = () => {
    image[2].innerHTML = '<img src="/_img/models/Model_JTX.png">';
}
modelJTX.onmouseleave = () => {
    image[2].innerHTML = '';
}

for (let i = 0; i < modelSE.length; i++) {
    modelSE[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_SE.png">';

    }
    modelSE[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelHXTX.length; i++) {
    modelHXTX[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/model_HXTX.png">';

    }
    modelHXTX[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelSHH.length; i++) {
    modelSHH[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_SHH.png">';

    }
    modelSHH[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelNX.length; i++) {
    modelNX[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_NX.png">';

    }
    modelNX[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelNXT.length; i++) {
    modelNXT[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_NXT.png">';

    }
    modelNXT[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

modelDGX.onmouseenter = () => {
    image[1].innerHTML = '<img src="/_img/models/Model_DGX.png">';
}
modelDGX.onmouseleave = () => {
    image[1].innerHTML = '';
}

modelPT.onmouseenter = () => {
    image[2].innerHTML = '<img src="/_img/models/Model_PT.png">';
}
modelPT.onmouseleave = () => {
    image[2].innerHTML = '';
}

for (let i = 0; i < modelGSE.length; i++) {
    modelGSE[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_GSE.png">';

    }
    modelGSE[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelST.length; i++) {
    modelST[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_ST.png">';

    }
    modelST[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelSTX.length; i++) {
    modelSTX[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_STX.png">';

    }
    modelSTX[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelPS.length; i++) {
    modelPS[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_PS.png">';

    }
    modelPS[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelF.length; i++) {
    modelF[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_F.png">';

    }
    modelF[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelBWX.length; i++) {
    modelBWX[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_BWX.png">';

    }
    modelBWX[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelBW.length; i++) {
    modelBW[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_BW.png">';

    }
    modelBW[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelTransflow.length; i++) {
    modelTransflow[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_Transflow.png">';

    }
    modelTransflow[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelSLN.length; i++) {
    modelSLN[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_SLN.png">';

    }
    modelSLN[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelBWP.length; i++) {
    modelBWP[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_BWP.png">';
    }
    modelBWP[i].onmouseleave = () => {
        image[i].innerHTML = '';
    }
}

for (let i = 0; i < modelBWXP.length; i++) {
    modelBWXP[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_BWXP.png">';
    }
    modelBWXP[i].onmouseleave = () => {
        image[i].innerHTML = '';
    }
}

for (let i = 0; i < modelTK.length; i++) {
    modelTK[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_TK.png">';

    }
    modelTK[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelBuffer.length; i++) {
    modelBuffer[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_Buffer.png">';

    }
    modelBuffer[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

for (let i = 0; i < modelCR.length; i++) {
    modelCR[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Model_CR.png">';

    }
    modelCR[i].onmouseleave = () => {
        image[i].innerHTML = '';

    }
}

modelER.onmouseenter = () => {
    image[1].innerHTML = '<img src="/_img/models/Model_ER.png">';
}
modelER.onmouseleave = () => {
    image[1].innerHTML = '';
}

modelV.onmouseenter = () => {
   image[1].innerHTML = '<img src="/_img/models/Model_V.png">';
}
modelV.onmouseleave = () => {
    image[1].innerHTML = '';
}

modelETX.onmouseenter = () => {
    image[1].innerHTML = '<img src="/_img/models/Model_ETX.png">';
}
modelETX.onmouseleave = () => {
    image[1].innerHTML = '';
}

modelHD.onmouseenter = () => {
    image[1].innerHTML = '<img src="/_img/models/Model_HD.png">';
}
modelHD.onmouseleave = () => {
    image[1].innerHTML = '';
}

modelD.onmouseenter = () => {
    image[1].innerHTML = '<img src="/_img/models/Model_D.png">';
}
modelD.onmouseleave = () => {
    image[1].innerHTML = '';
}

modelEMV.onmouseenter = () => {
    image[1].innerHTML = '<img src="/_img/models/Model_EMV.png">';
}
modelEMV.onmouseleave = () => {
    image[1].innerHTML = '';
}

packagedSkid.onmouseenter = () => {
    image[1].innerHTML = '<img src="/_img/models/packagedSkid.png">';
}
packagedSkid.onmouseleave = () => {
    image[1].innerHTML = '';
}

modelME.onmouseenter = () => {
    marineImage.src = '/_img/models/Model_ME.png';
}
modelME.onmouseleave = () => {
    marineImage.src = '';
}

modelMSH.onmouseenter = () => {
    marineImage.src = '/_img/models/Model_MSH.png';
}
modelMSH.onmouseleave = () => {
    marineImage.src = '';
}

modelMSE.onmouseenter = () => {
    marineImage.src = '/_img/models/Model_MSE.png';
}
modelMSE.onmouseleave = () => {
    marineImage.src = '';
}

modelMHXTX.onmouseenter = () => {
    marineImage.src = '/_img/models/Model_MHXTX.png';
}
modelMHXTX.onmouseleave = () => {
    marineImage.src = '';
}

model177.onmouseenter = () => {
    marineImage.src = '/_img/models/Model_177.png';
}
model177.onmouseleave = () => {
    marineImage.src = '';
}

integratedSkid.onmouseenter = () => {
    marineImage.src = '/_img/models/integratedSkid.png';
}
integratedSkid.onmouseleave = () => {
    marineImage.src = '';
}

for (let i = 0; i < immersionHeaters.length; i++) {
    immersionHeaters[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Elements.png">';
    }
    immersionHeaters[i].onmouseleave = () => {
        image[i].innerHTML = '';
    }
}

for (let i = 0; i < heatingCoils.length; i++) {
    heatingCoils[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/Heatingcoils.png">';
    }
    heatingCoils[i].onmouseleave = () => {
        image[i].innerHTML = '';
    }
}

for (let i = 0; i < sstp.length; i++) {
    sstp[i].onmouseenter = () => {
        image[i].innerHTML = '<img src="/_img/models/sstp.png">';
    }
    sstp[i].onmouseleave = () => {
        image[i].innerHTML = '';
    }
}

/************************* Product Page Slider******************************/
const slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

const showSlides = (n) => {
  const i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  const text = document.getElementsByClassName("text");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[0].style.width  = "14%";
      slides[1].style.width = "70%";
      slides[2].style.width = "14%";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  text[slideIndex-1].style.display = "inline-block";
  slides[slideIndex-1].style.display = "inline-block"; 
  dots[slideIndex-1].className += " active";
}