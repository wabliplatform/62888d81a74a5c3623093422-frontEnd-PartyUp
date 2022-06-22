let apiPartyApi = new TempApi.PartyApi();import TempApi from '../src/index';document.getElementById('i9ymb').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Admin' ;}};
 function calculateSize(img, maxWidth, maxHeight) {
      let width = img.width;
      let height = img.height;
    
      // calculate the width and height, constraining the proportions
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      return [width, height];
    }const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            
      const MAX_WIDTH = 300;
      const MAX_HEIGHT = 300;
      const MIME_TYPE = "image/jpeg";
      const QUALITY = 0.9;
      const file = e.target.files[0]; // get the file
      const blobURL = URL.createObjectURL(file);
      const img = new Image();
      img.src = blobURL;
      img.onerror = function () {
        URL.revokeObjectURL(this.src);
        console.log("Cannot load image");
      };
      img.onload = function () {
        URL.revokeObjectURL(this.src);
        const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(
          async (blob) => {
            const base64 = await convertBase64(blob);
    
            document
              .getElementById('formFile')
              .setAttribute("data-image-base64", base64);
            document
              .getElementById('formFile')
              .setAttribute("name", e.target.files[0].name);
          },
          MIME_TYPE,
          QUALITY
        );
      };});
$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('ibvdg').onclick = (event) => {
    event.preventDefault();
    let partyId = window.location.pathname.replace('/ManageParty/','');let party = new TempApi.Party();party['partyDate'] = document.querySelector("[annotationname = 'partyDate']").value;party['partyDetails'] = document.querySelector("[annotationname = 'partyDetails']").value;party['partyTheme'] = document.querySelector("[annotationname = 'partyTheme']").value;party['partyHost'] = document.querySelector("[annotationname = 'partyHost']").value;party['partyImage'] = {
        data: document.querySelector("[annotationname = 'partyImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'partyImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'partyImage']").src,
        name: document.querySelector("[annotationname = 'partyImage']").getAttribute("name")
      };party['partyTime'] = document.querySelector("[annotationname = 'partyTime']").value; let opts = {party};apiPartyApi.updateparty( partyId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = partyDate]').value = response.body.query.partyDate ;document.querySelector('[annotationname = partyDetails]').value = response.body.query.partyDetails ;document.querySelector('[annotationname = partyTheme]').value = response.body.query.partyTheme ;document.querySelector('[annotationname = partyHost]').value = response.body.query.partyHost ;
      if(response.body.query.partyImage !== undefined){

        if(document.querySelector('[annotationname = partyImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = partyImage]').setAttribute('data-image-base64',response.body.query.partyImage.data);
        }
        else{
          document.querySelector('[annotationname = partyImage]').src = response.body.query.partyImage.data;
        }
        document.querySelector('[annotationname = partyImage]').name = response.body.query.partyImage.name;
      }
      document.querySelector('[annotationname = partyTime]').value = response.body.query.partyTime ;{  location.href= '/Admin/'+response.body.query._id+'' ;}}});};window.onload = () => {};