let apiPartyApi = new TempApi.PartyApi();import TempApi from '../src/index';document.getElementById('i1q7j').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Admin' ;}};document.getElementById('i7q5i').onclick = (event) => {
    event.preventDefault();
    let partyId = window.location.pathname.replace('/PartyPage/','');let party = new TempApi.Party();party['partyDate'] = document.querySelector("[annotationname = 'partyDate']").textContent;party['partyTitle'] = document.querySelector("[annotationname = 'partyTitle']").textContent;party['partyDetails'] = document.querySelector("[annotationname = 'partyDetails']").textContent;party['partyTheme'] = document.querySelector("[annotationname = 'partyTheme']").textContent;party['partyAdress'] = document.querySelector("[annotationname = 'partyAdress']").textContent;party['partyParticipants'] = document.querySelector("[annotationname = 'partyParticipants']").textContent;party['partyHost'] = document.querySelector("[annotationname = 'partyHost']").textContent;party['partyImage'] = {
        data: document.querySelector("[annotationname = 'partyImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'partyImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'partyImage']").src,
        name: document.querySelector("[annotationname = 'partyImage']").getAttribute("name")
      };party['partyTime'] = document.querySelector("[annotationname = 'partyTime']").textContent; let opts = {party};apiPartyApi.updateparty( partyId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = partyDate]').textContent = response.body.query.partyDate ;document.querySelector('[annotationname = partyTitle]').textContent = response.body.query.partyTitle ;document.querySelector('[annotationname = partyDetails]').textContent = response.body.query.partyDetails ;document.querySelector('[annotationname = partyTheme]').textContent = response.body.query.partyTheme ;document.querySelector('[annotationname = partyAdress]').textContent = response.body.query.partyAdress ;document.querySelector('[annotationname = partyParticipants]').textContent = response.body.query.partyParticipants ;document.querySelector('[annotationname = partyHost]').textContent = response.body.query.partyHost ;
      if(response.body.query.partyImage !== undefined){

        if(document.querySelector('[annotationname = partyImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = partyImage]').setAttribute('data-image-base64',response.body.query.partyImage.data);
        }
        else{
          document.querySelector('[annotationname = partyImage]').src = response.body.query.partyImage.data;
        }
        document.querySelector('[annotationname = partyImage]').name = response.body.query.partyImage.name;
      }
      document.querySelector('[annotationname = partyTime]').textContent = response.body.query.partyTime ;{ 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i7q5i")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/PartyPage/' + transitionId;}}});};window.onload = () => {let partyId = window.location.pathname.replace('/PartyPage/','');apiPartyApi.getparty( partyId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { 
      if(response.body.query.partyImage !== undefined){
        if(document.querySelector('[annotationname = partyImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = partyImage]').setAttribute('data-image-base64',response.body.query.partyImage.data);
          let fileName = response.body.query.partyImage.name;
          let file = new File([response.body.query.partyImage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = partyImage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = partyImage]').src = response.body.query.partyImage.data ;
        }
        document.querySelector('[annotationname = partyImage]').name = response.body.query.partyImage.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = partyTitle]').textContent = response.body.query.partyTitle; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = partyTheme]').textContent = response.body.query.partyTheme; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = partyHost]').textContent = response.body.query.partyHost; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = partyDate]').textContent = response.body.query.partyDate; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = partyTime]').textContent = response.body.query.partyTime; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = partyAdress]').textContent = response.body.query.partyAdress; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = partyDetails]').textContent = response.body.query.partyDetails; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = partyParticipants]').textContent = response.body.query.partyParticipants; } catch (e) { console.log(e) };}});};