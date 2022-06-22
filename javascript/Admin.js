let apiPartyApi = new TempApi.PartyApi();import TempApi from '../src/index';document.getElementById('il57o').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Home3' ;}};document.getElementById('ihkfk').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/HostParty' ;}};document.getElementById('i1q7j').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Admin' ;}};document.getElementById('iqo9r').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iqo9r")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/ManageParty/' + transitionId;}};document.getElementById('i7t43').onclick = (event) => {
    event.preventDefault();
    let partyId = window.location.pathname.replace('/Admin/','');
      if(partyId === '/Admin' || partyId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i7t43")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            partyId = value._id;
            parentId = key;
          }
        });
      }
    apiPartyApi.deleteparty( partyId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Admin' ;}}});};document.getElementById('i0i83').onclick = (event) => {
    event.preventDefault();
    let partyId = window.location.pathname.replace('/Admin/','');
      if(partyId === '/Admin' || partyId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i0i83")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            partyId = value._id;
            parentId = key;
          }
        });
      }
    apiPartyApi.deleteparty( partyId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('iap3yf').onclick = (event) => {
    event.preventDefault();
    let partyId = window.location.pathname.replace('/Admin/','');
      if(partyId === '/Admin' || partyId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iap3yf")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            partyId = value._id;
            parentId = key;
          }
        });
      }
    apiPartyApi.deleteparty( partyId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('i9u1ea').onclick = (event) => {
    event.preventDefault();
    let partyId = window.location.pathname.replace('/Admin/','');
      if(partyId === '/Admin' || partyId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i9u1ea")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            partyId = value._id;
            parentId = key;
          }
        });
      }
    apiPartyApi.deleteparty( partyId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('ivhbhm').onclick = (event) => {
    event.preventDefault();
    let partyId = window.location.pathname.replace('/Admin/','');
      if(partyId === '/Admin' || partyId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ivhbhm")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            partyId = value._id;
            parentId = key;
          }
        });
      }
    apiPartyApi.deleteparty( partyId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};window.onload = () => {apiPartyApi.getAllparty((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i7ajs").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'partyTitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].partyTitle;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'partyTitle'){
        subDataElements[i].textContent = data[data.length -i -1].partyTitle;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'partyHost']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].partyHost;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'partyHost'){
        subDataElements[i].textContent = data[data.length -i -1].partyHost;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'partyDate']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].partyDate;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'partyDate'){
        subDataElements[i].textContent = data[data.length -i -1].partyDate;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'partyAdress']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].partyAdress;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'partyAdress'){
        subDataElements[i].textContent = data[data.length -i -1].partyAdress;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};